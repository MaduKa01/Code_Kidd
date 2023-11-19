/* eslint-disable @typescript-eslint/no-explicit-any */
import useSWR from "swr";

import SWR_KEYS from "@/constants/swr-keys";
import courseService from "@/services/course.service"; // Make sure to define this service
import { RequestsBaseReturn } from "@/types/requests.types";

export type UseGetCoursesReturn = RequestsBaseReturn<any | null>;

const useGetCourses = (): UseGetCoursesReturn => {
  const {
    data = null,
    isValidating: isLoading,
    error,
  } = useSWR<any, Error>(SWR_KEYS.getCourses, () => courseService.getAll(), {
    revalidateOnFocus: false,
  });

  return { data, isLoading, error };
};

export default useGetCourses;
