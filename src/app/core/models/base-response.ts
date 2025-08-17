export class BaseResponse<T> {
    succeed: boolean;
    messages: string[];
    data: T;
}