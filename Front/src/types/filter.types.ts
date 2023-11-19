import { InputTypes } from "./form.types";

export enum FilterType {
  Contains = "contains",

  Equals = "equals",

  GreaterThan = "greaterThan",

  LessThan = "lessThan",

  StartsWith = "startsWith",
}

export type FilterValueTypes = InputTypes;

export type FilterValue = string | boolean | number;

export type FilterProperty<T> = keyof T | "all";

export interface IFilter<T> {
  property: FilterProperty<T>;
  filterType: FilterType;
  value: FilterValue;
}

export type FilterAttributes = {
  defaultValue: FilterValue;
  type: FilterType;
  valueType: FilterValueTypes;
};
