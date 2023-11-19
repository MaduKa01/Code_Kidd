"use client";
import jwt_decode from "jwt-decode";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

import LOCAL_STORAGE from "@/constants/local-storage";
import ROUTE_URLS, { UNPROTECTED_ROUTE } from "@/constants/route-urls";
import { InvalidTokenError, UserNotFound } from "@/errors/auth.errors";
import { buildErrorMessage } from "@/helpers/error-helpers";
import useLoading from "@/hooks/use-loading";
import { IDecodedToken, ILoginTokens } from "@/interfaces/auth.interfaces";
import IUser from "@/interfaces/user.interface";
import authService from "@/services/auth.service";
import userService from "@/services/user.service";
import { AuthContextProps, AuthProviderProps, LoginProps, RegisterProps } from "@/types/auth.types";

import useLanguage from "./language-context";
import useToast from "./toast-context";

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const getAccessToken = (): string | null => {
  return localStorage.getItem(LOCAL_STORAGE.accessTokenKey);
};
const setAccessTokenToLocalStorage = (value: string) => {
  localStorage.setItem(LOCAL_STORAGE.accessTokenKey, value);
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const { lang } = useLanguage();

  const redirectUrl = useSearchParams().get("redirect");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  const [redirectUrlLogout, setRedirectUrlLogout] = useState("");

  const { showToast } = useToast();

  const urlToRedirect = redirectUrl || ROUTE_URLS.dashboard(lang);
  const {
    isLoading: isLoggingOut,
    startLoading: startLoggingOut,
    endLoading: endLoggingOut,
  } = useLoading();

  const { isLoading, startLoading, endLoading, loadingIcon } = useLoading({
    initialState: true,
    loadingIconColor: "primary",
    loadingIconSize: 40,
  });
  const {
    isLoading: isLoggingIn,
    startLoading: startLoggingIn,
    endLoading: endLoggingIn,
    loadingIcon: loadingIconLoggingIn,
  } = useLoading();

  const {
    isLoading: isRegistering,
    startLoading: startRegistering,
    endLoading: endRegistering,
    loadingIcon: loadingIconRegistering,
  } = useLoading();

  const isLoginPage = pathname.includes(UNPROTECTED_ROUTE);
  const isRegisterPage = pathname.includes(ROUTE_URLS.registerBase);

  const logout = (redirectUrl?: string) => {
    startLoggingOut();
    setIsAuthenticated(false);
    localStorage.removeItem(LOCAL_STORAGE.accessTokenKey);

    if (redirectUrl) {
      setRedirectUrlLogout(redirectUrl);
      router.replace(redirectUrl);
    } else if (!isLoginPage && !isRegisterPage) {
      setRedirectUrlLogout("");
      router.replace(ROUTE_URLS.login(lang));
    }

    endLoggingOut();
  };

  const generateDecodedToken = useCallback((_accessToken: string): IDecodedToken | null => {
    const decoded: IDecodedToken = jwt_decode(_accessToken);
    if (!decoded) return null;
    return decoded;
  }, []);

  const getUser = useCallback(async (userId: string) => {
    try {
      if (!userId) return;
      const user = await userService.getById(userId);
      setUser(user);

      if (!user) {
        throw new UserNotFound();
      }
    } catch (err) {
      const message = buildErrorMessage(err);
      // eslint-disable-next-line no-console
      console.error(message);
    }
  }, []);

  const login = async ({ formData, onError, onSuccess }: LoginProps): Promise<void> => {
    startLoggingIn();
    try {
      const loginTokens: ILoginTokens = await authService.login(formData);
      const accessToken = loginTokens.token;

      setAccessTokenToLocalStorage(accessToken);

      if (!accessToken) {
        throw new InvalidTokenError();
      }

      const user = await userService.getById(loginTokens.id);

      if (!user) {
        throw new UserNotFound();
      }

      setUser(user);
      setIsAuthenticated(true);

      router.replace(urlToRedirect);
      if (onSuccess) onSuccess();
    } catch (err) {
      logout();
      const message = buildErrorMessage(err);
      showToast({ text: message, type: "error" });
      if (onError) onError();
    } finally {
      endLoggingIn();
    }
  };

  const register = async ({ formData, onError, onSuccess }: RegisterProps): Promise<void> => {
    startRegistering();

    try {
      await authService.register(formData);

      await login({
        formData: {
          email: formData.email,
          password: formData.password,
        },
        onError: () => {
          throw new Error("Erro ao tentar fazer login após o registro.");
        },
      });

      if (onSuccess) onSuccess();
    } catch (err) {
      const message = buildErrorMessage(err);
      showToast({ text: message, type: "error" });
      if (onError) onError();
    } finally {
      endRegistering();
    }
  };

  useEffect(() => {
    if (!localStorage) return;

    const accessToken = getAccessToken();
    startLoading();

    const checkIfUserIsLoggedIn = (): boolean => {
      if (!accessToken) {
        return false;
      }
      const decodedToken = generateDecodedToken(accessToken);
      if (!decodedToken) {
        return false;
      }

      return true;
    };

    const isCurrentlyAuthenticated = checkIfUserIsLoggedIn();
    if (isCurrentlyAuthenticated === isAuthenticated) {
      endLoading();
      return;
    }
    setIsAuthenticated(isCurrentlyAuthenticated);
    endLoading();
  }, [endLoading, startLoading, generateDecodedToken, isAuthenticated, lang, isLoggingOut]);

  useEffect(() => {
    // This useEffect checks authentication and redirects
    if (isAuthenticated && isLoginPage) {
      router.replace(urlToRedirect);
    } else if (!isAuthenticated && !isLoginPage && !isRegisterPage && !isLoading) {
      if (redirectUrlLogout !== "") {
        router.replace(redirectUrlLogout);
      } else {
        router.replace(ROUTE_URLS.loginRedirect(pathname, lang));
      }
    }
  }, [
    isAuthenticated,
    isLoginPage,
    lang,
    pathname,
    router,
    urlToRedirect,
    redirectUrlLogout,
    isLoading,
    isRegisterPage,
  ]);

  useEffect(() => {
    // This useEffect gets user and saves in the user state
    if (!localStorage) return;
    const accessToken = getAccessToken();
    if (!accessToken) return;
    const decodedToken = generateDecodedToken(accessToken);
    if (!decodedToken) return;

    getUser(decodedToken.id);
  }, [generateDecodedToken, getUser]);

  const isLoadingLoginPage = (isLoading || isAuthenticated) && isLoginPage;
  const isLoadingPathProtected = (isLoading || !isAuthenticated) && !isLoginPage && !isRegisterPage;

  if (isLoadingLoginPage || isLoggingOut || isLoadingPathProtected)
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {loadingIcon}
      </div>
    );
  return (
    <AuthContext.Provider
      value={{
        isLoading,
        isAuthenticated,
        isLoggingOut,
        logout,
        loadingIcon,
        user,
        login,
        loadingIconLoggingIn,
        isLoggingIn,
        register,
        isRegistering,
        loadingIconRegistering,
      }}
    >
      {isLoadingLoginPage || isLoggingOut || isLoadingPathProtected ? (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {loadingIcon}
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export default useAuth;
