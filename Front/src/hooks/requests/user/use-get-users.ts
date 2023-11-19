import useSWR from "swr";

import SWR_KEYS from "@/constants/swr-keys";
import { normalizeSingleFilterFormData } from "@/helpers/request-helpers";
import IUser from "@/interfaces/user.interface";
import userService from "@/services/user.service";
import { IFilter } from "@/types/filter.types";
import { PaginatedResponse, RequestPagination, RequestsBaseReturn } from "@/types/requests.types";

export interface UseGetUsersProps extends RequestPagination {
  filters: IFilter<IUser>[];
}

type GetAllSwrParams = [string, number, number, IFilter<IUser>[]];

export type UseGetUsersReturn = RequestsBaseReturn<PaginatedResponse<IUser> | null>;

const useGetUsers = ({ pageNumber, pageSize, filters }: UseGetUsersProps): UseGetUsersReturn => {
  const normalizedFilter = normalizeSingleFilterFormData(filters, "name");

  const {
    data = null,
    isValidating: isLoading,
    error,
  } = useSWR<PaginatedResponse<IUser>, Error, GetAllSwrParams>(
    [SWR_KEYS.getUsers, pageNumber, pageSize, normalizedFilter],
    ([, _pageNumber, _pageSize, _filters]) =>
      userService.filter(_filters, {
        pageNumber: _pageNumber,
        pageSize: _pageSize,
      }),
    {
      revalidateOnFocus: false,
    }
  );

  return { data, isLoading, error };
};

export default useGetUsers;
