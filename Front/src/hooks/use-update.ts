import useToast from "@/contexts/toast-context";
import { buildErrorMessage } from "@/helpers/error-helpers";
import useLoading, { UseLoadingReturn } from "@/hooks/use-loading";
import { UpdateByIdProps } from "@/types/requests.types";

export type UpdateProps<T> = UpdateByIdProps<T>;

export type UseUpdateReturn<T> = {
  update: (props: UpdateProps<T>) => Promise<void>;
} & UseLoadingReturn;

export type UseUpdateProps<T> = {
  operation: (formData: T, _id: string) => Promise<void>;
};
const useUpdate = <T>({ operation }: UseUpdateProps<T>): UseUpdateReturn<T> => {
  const { isLoading, startLoading, endLoading, loadingIcon } = useLoading();
  const { showToast } = useToast();

  const update = async ({
    _id,
    formData,
    onSuccess,
    onError,
    successMessage = "",
    errorMessage = "",
  }: UpdateProps<T>): Promise<void> => {
    startLoading();
    try {
      await operation(formData, _id);

      if (onSuccess) onSuccess();
      showToast({ text: successMessage, type: "success" });
    } catch (e) {
      const message = buildErrorMessage(e, errorMessage);
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
    update,
  };
};

export default useUpdate;
