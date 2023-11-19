import { FilterProperty, IFilter } from "@/types/filter.types";
import { RequestPagination } from "@/types/requests.types";

export function buildPaginationQuery(pagination: RequestPagination): string {
  const { pageNumber, pageSize } = pagination;
  return `pageNumber=${pageNumber}&pageSize=${pageSize}`;
}

export const normalizeSingleFilterFormData = <T>(
  formData: IFilter<T>[],
  defaultProperty: FilterProperty<T>
) => {
  if (formData[0].property === "all") {
    return [{ ...formData[0], property: defaultProperty }];
  }
  return formData;
};
