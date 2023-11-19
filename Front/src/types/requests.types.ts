export type RequestsProps = {
  onSuccess?: () => void;
  onError?: () => void;
  successMessage?: string;
  errorMessage?: string;
};

export type ByIdRequestProps = { _id: string };

export type RequestsBaseReturn<T> = {
  data: T;
  isLoading: boolean;
  error?: Error;
};

export type GetRequestProps = {
  isPaused?: boolean;
};
export type RequestPagination = {
  pageNumber: number;
  pageSize: number;
};
export type CreateRequestProps<T> = RequestsProps & {
  formData: T;
};
export type UpdateByIdProps<T> = RequestsProps & {
  formData: T;
  _id: string;
};

export type RemoveByIdProps = RequestsProps & {
  _id: string;
  secondaryId?: number;
};

export type PaginatedResponse<T> = {
  items: T[];
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

export type DirectResponse<T> = T[];
