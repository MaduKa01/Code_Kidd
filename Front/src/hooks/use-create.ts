/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

import useToast from "@/contexts/toast-context";
import { buildErrorMessage } from "@/helpers/error-helpers";
import useLoading, { UseLoadingReturn } from "@/hooks/use-loading";
import { CreateRequestProps } from "@/types/requests.types";

export type CreateProps<T> = CreateRequestProps<T>;

export type UseCreateReturn<T> = {
  create: (props: CreateProps<T>) => Promise<any | void>;
  result: any | null;
} & UseLoadingReturn;

export type UseCreateProps<T> = {
  operation: (formData: T) => Promise<any | void>;
};

const useCreate = <T>({ operation }: UseCreateProps<T>): UseCreateReturn<T> => {
  const { isLoading, startLoading, endLoading, loadingIcon } = useLoading();
  const { showToast } = useToast();
  const [result, setResult] = useState<any | null>(null);

  const create = async ({
    formData,
    onSuccess,
    onError,
    successMessage = "",
    errorMessage = "",
  }: CreateProps<T>): Promise<any> => {
    startLoading();
    try {
      const operationResult = await operation(formData);
      setResult(operationResult);

      if (onSuccess) onSuccess();
      showToast({ text: successMessage, type: "success" });

      return operationResult; // Retorna o resultado aqui
    } catch (e) {
      setResult(null);
      const message = buildErrorMessage(e, errorMessage);
      showToast({ text: message, type: "error" });
      if (onError) onError();
      throw e;
    } finally {
      endLoading();
    }
  };

  return {
    isLoading,
    startLoading,
    endLoading,
    loadingIcon,
    create,
    result,
  };
};

export default useCreate;
