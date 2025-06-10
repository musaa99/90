export interface ResponseType<T> {
  data: T;
  success?: boolean;
  message: string;
  statusCode?: boolean;
}
