/** Successful API response wrapper */
export interface ApiResponse<T> {
  success: true;
  data: T;
}

/** Failed API response wrapper */
export interface ApiError {
  success: false;
  error: {
    code: string;
    message: string;
    statusCode: number;
  };
}

/** Union type for any API call result */
export type ApiResult<T> = ApiResponse<T> | ApiError;

/** Pagination metadata for list endpoints */
export interface PaginationMeta {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
}

/** Paginated API response */
export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  meta: PaginationMeta;
}
