import useCreate from "@/hooks/use-create";
import { UseLoadingReturn } from "@/hooks/use-loading";
import { IUserInput } from "@/interfaces/user.interface";
import userService from "@/services/user.service";
import { RequestsProps } from "@/types/requests.types";

export type CreateUserProps = {
  formData: IUserInput;
} & RequestsProps;

export type UseCreateUserReturn = {
  create: (props: CreateUserProps) => Promise<void>;
} & UseLoadingReturn;

const useCreateUser = (): UseCreateUserReturn => {
  const { isLoading, startLoading, endLoading, loadingIcon, create } = useCreate<IUserInput>({
    operation: (formData) => userService.create(formData),
  });

  return {
    isLoading,
    startLoading,
    endLoading,
    loadingIcon,
    create,
  };
};

export default useCreateUser;
