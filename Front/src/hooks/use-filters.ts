"use client";

import _ from "lodash";
import { useCallback, useState } from "react";

import { IFilter } from "@/types/filter.types";

export type UseFiltersReturn<T> = {
  filters: IFilter<T>[];
  addNewFilter: (filter: IFilter<T>) => void;
  deleteFilter: (filter: IFilter<T>) => void;
  changeFilters: (filters: IFilter<T>[]) => void;
  clearFilters: () => void;
};

export type UseFiltersProps<T> = {
  initialValue: IFilter<T>[];
};

const useFilters = <T>(props?: UseFiltersProps<T>): UseFiltersReturn<T> => {
  const { initialValue } = props || {};
  const [filters, setFilters] = useState<IFilter<T>[]>(initialValue || []);
  const addNewFilter = (filter: IFilter<T>) => {
    setFilters((previousFilters) => [filter, ...previousFilters]);
  };
  const deleteFilter = (filter: IFilter<T>) => {
    const newFilters = filters.filter((item) => !_.isEqual(filter, item));
    setFilters(newFilters);
  };
  const changeFilters = useCallback((filters: IFilter<T>[]) => {
    setFilters(filters);
  }, []);

  const clearFilters = () => {
    if (filters.length === 0) return;
    const newFilter = [{ ...filters[0], value: "" }];
    setFilters(newFilter);
  };

  return { filters, addNewFilter, deleteFilter, changeFilters, clearFilters };
};

export default useFilters;
