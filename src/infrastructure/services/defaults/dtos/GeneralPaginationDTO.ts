export namespace GeneralPaginationDTO {
  export namespace DTOs {
    export type Request = {
      page?: number;
      perPage?: number;
    };

    export type Response = {
      meta: {
        page: number;
        perPage: number;
        nextPage: number | null;
        total: number;
      };
    };
  }
}
