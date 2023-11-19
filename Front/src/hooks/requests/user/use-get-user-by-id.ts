"use client";

import useSWR from "swr";

import SWR_KEYS from "@/constants/swr-keys";
import IUser from "@/interfaces/user.interface";
import userService from "@/services/user.service";
import { ByIdRequestProps, RequestsBaseReturn } from "@/types/requests.types";

export type UseGetUserByIdReturn = RequestsBaseReturn<IUser | null>;

export type UseGetUserByIdProps = ByIdRequestProps;

type UseSwrGetUserByIdParams = [string, string];
const useGetUserById = ({ _id }: UseGetUserByIdProps): UseGetUserByIdReturn => {
  const {
    data = null,
    isValidating: isLoading,
    error,
  } = useSWR<IUser, Error, UseSwrGetUserByIdParams | null>(
    _id ? [SWR_KEYS.getUserById, _id] : null,
    ([, userId]) => userService.getById(userId),
    {
      revalidateOnFocus: false,
    }
  );

  return { data, isLoading, error };
};

export default useGetUserById;
