import useSWR from "swr";

import SWR_KEYS from "@/constants/swr-keys";
import { ICourse } from "@/interfaces/course.interfaces";
import courseService from "@/services/course.service";
import { ByIdRequestProps, RequestsBaseReturn } from "@/types/requests.types";

export type UseGetCourseByIdReturn = RequestsBaseReturn<ICourse | null>;

export type UseGetCourseByIdProps = ByIdRequestProps;

type UseSwrGetCourseByIdParams = [string, string];
const useGetCourseById = ({ _id }: UseGetCourseByIdProps): UseGetCourseByIdReturn => {
  const {
    data = null,
    isValidating: isLoading,
    error,
  } = useSWR<ICourse, Error, UseSwrGetCourseByIdParams | null>(
    _id ? [SWR_KEYS.getCourseById, _id] : null,
    ([, courseId]) => courseService.getById(courseId),
    {
      revalidateOnFocus: false,
    }
  );

  return { data, isLoading, error };
};

export default useGetCourseById;
