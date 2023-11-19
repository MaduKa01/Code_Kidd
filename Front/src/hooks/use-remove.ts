import useToast from "@/contexts/toast-context";
import { buildErrorMessage } from "@/helpers/error-helpers";
import useLoading, { UseLoadingReturn } from "@/hooks/use-loading";
import { RequestsProps } from "@/types/requests.types";

export type RemoveProps = {
  _id: string;
  secondaryId?: number;
} & RequestsProps;

export type UseRemoveReturn = {
  remove: (props: RemoveProps) => Promise<void>;
} & UseLoadingReturn;

export type UseRemoveProps = {
  operation: (_id: string, secondaryId?: number) => Promise<void>;
};
const useRemove = ({ operation }: UseRemoveProps): UseRemoveReturn => {
  const { isLoading, startLoading, endLoading, loadingIcon } = useLoading();
  const { showToast } = useToast();

  const remove = async ({
    _id,
    secondaryId,
    onSuccess,
    onError,
    successMessage = "",
    errorMessage = "",
  }: RemoveProps): Promise<void> => {
    startLoading();
    try {
      await operation(_id, secondaryId);

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
    remove,
  };
};

export default useRemove;
