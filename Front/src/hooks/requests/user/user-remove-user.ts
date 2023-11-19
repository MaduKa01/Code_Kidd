import { UseLoadingReturn } from "@/hooks/use-loading";
import userService from "@/services/user.service";
import { RemoveByIdProps } from "@/types/requests.types";

import useRemove from "../../use-remove";

export type UseRemoveUserReturn = {
  removeUser: (props: RemoveByIdProps) => Promise<void>;
} & UseLoadingReturn;

const useRemoveUser = (): UseRemoveUserReturn => {
  const { isLoading, startLoading, endLoading, loadingIcon, remove } = useRemove({
    operation: (userId) => userService.delete(userId),
  });

  return {
    isLoading,
    startLoading,
    endLoading,
    loadingIcon,
    removeUser: remove,
  };
};

export default useRemoveUser;
