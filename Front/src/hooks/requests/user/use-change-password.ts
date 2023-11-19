import useToast from "@/contexts/toast-context";
import { isError } from "@/helpers/error-helpers";
import useLoading, { UseLoadingReturn } from "@/hooks/use-loading";
import { IChangePassword } from "@/interfaces/auth.interfaces";
import authService from "@/services/auth.service";
import { RequestsProps } from "@/types/requests.types";

export type ChangePasswordProps = {
  formData: IChangePassword;
} & RequestsProps;

export type UseChangePassowrdReturn = {
  changePassword: (props: ChangePasswordProps) => Promise<void>;
} & UseLoadingReturn;

const useChangePassowrd = (): UseChangePassowrdReturn => {
  const { isLoading, startLoading, endLoading, loadingIcon } = useLoading();
  const { showToast } = useToast();

  const changePassword = async ({
    formData,
    onSuccess,
    onError,
    successMessage = "",
    errorMessage = "",
  }: ChangePasswordProps): Promise<void> => {
    startLoading();
    try {
      await authService.changePassword(formData);

      if (onSuccess) onSuccess();
      showToast({ text: successMessage, type: "success" });
    } catch (e) {
      const message = isError(e) ? e.response?.data.messages[0] || e.message : errorMessage;
      showToast({ text: message, type: "error" });
      if (onError) onError();
    } finally {
      endLoading();
    }
  };

  return {
    isLoading,
    startLoading,
    endLoading,
    loadingIcon,
    changePassword,
  };
};

export default useChangePassowrd;
