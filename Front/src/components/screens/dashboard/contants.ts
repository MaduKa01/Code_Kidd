import { ICourse } from "@/interfaces/course.interfaces";
import { FilterType, IFilter } from "@/types/filter.types";

export const initialFilterValues: IFilter<ICourse>[] = [
  {
    property: "title",
    value: "",
    filterType: FilterType.Contains,
  },
];
