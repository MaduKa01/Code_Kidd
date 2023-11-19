import { UseLoadingReturn } from "@/hooks/use-loading";
import useUpdate from "@/hooks/use-update";
import { IUserInput } from "@/interfaces/user.interface";
import userService from "@/services/user.service";
import { UpdateByIdProps } from "@/types/requests.types";

export type UpdateUserProps = UpdateByIdProps<IUserInput>;

export type UseUpdateUserReturn = {
  update: (props: UpdateUserProps) => Promise<void>;
} & UseLoadingReturn;

const useUpdateUser = (): UseUpdateUserReturn => {
  const { isLoading, startLoading, endLoading, loadingIcon, update } = useUpdate<IUserInput>({
    operation: (formData, userId) => userService.update(formData, userId),
  });

  return {
    isLoading,
    startLoading,
    endLoading,
    loadingIcon,
    update,
  };
};

export default useUpdateUser;
