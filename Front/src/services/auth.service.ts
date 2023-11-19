import httpRequest from "@/auth/http-client";
import {
  IChangePassword,
  ILogin,
  ILoginTokens,
  IRecoverPassword,
  IRegister,
} from "@/interfaces/auth.interfaces";

class AuthService {
  private baseLoginUrl = "/api/users/login";
  private baseSignupUrl = "/api/users";

  async register(data: IRegister): Promise<ILoginTokens> {
    return httpRequest.post(`${this.baseSignupUrl}`, data);
  }

  async login(data: ILogin): Promise<ILoginTokens> {
    return httpRequest.post(this.baseLoginUrl, data);
  }

  async recoverPassword(data: IRecoverPassword): Promise<void> {
    return httpRequest.post(`${this.baseLoginUrl}/recoverpassword`, data);
  }

  async changePassword(data: IChangePassword): Promise<void> {
    return httpRequest.post(`${this.baseLoginUrl}/changepassword`, data);
  }
}

const authService = new AuthService();
export default authService;
