export class SearchResponse<T> {
    items: T[];
    totalItem: number;
    currentPage: number;
    pageSize: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
}