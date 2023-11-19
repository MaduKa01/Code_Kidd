export type SelectData<T = string> = {
  label: string;
  value: T;
};

export type InputTypes =
  | "string"
  | "boolean"
  | "number"
  | "options"
  | "date"
  | "select"
  | "disable";

export type TabItem<T = string> = { label: string; value: T };
