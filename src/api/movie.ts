import { baseApi } from "./baseApi";

export interface Movie {
  cover: string;
  director: string;
  evaluateNum: number;
  hotId: number;
  movieId: number;
  hotShortCommend: string;
  movieCountry: string;
  movieTime: string;
  preview: string;
  protagonist: string;
  rate: number;
  release: string;
  star: number;
  title: string;
  seemNum: number;
  comingData: string;
  type: string;
  synopsis: string;
}
export type MovieReq = {
  current: number;
  size: number;
  input: Partial<{
    title: string;
    rate: string;
    director: string;
    protagonist: string;

    type: string;
  }>;
};

type Result<T> = {
  current: number;
  size: number;
  total: number;
  records: T[];
};
const MovieApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllMovie: builder.mutation<Result<Movie>, MovieReq>({
      query: (data) => ({
        url: "/movieInfo/query",
        method: "post",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllMovieMutation } = MovieApi;

export default MovieApi;
