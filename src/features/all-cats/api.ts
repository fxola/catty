import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { catsAPIKey } from "@src/constants/keys";
import { AllCats } from "../types";

export interface CatsResponse {
  data: AllCats;
  page: number;
}

interface RawCatResponse {
  id: string;
  name: string;
  image: {
    id: string;
    url: string;
  };
  life_span: string;
  // and some other fields
}

export const allCatsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thecatapi.com/",
    prepareHeaders: (headers) => {
      if (catsAPIKey) {
        headers.set("x-api-key", `${catsAPIKey}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllCats: builder.query({
      query: (page) => ({
        url: `v1/breeds?page=${page}&attach_breed=0&limit=10`,
      }),
      transformResponse: (data: RawCatResponse[], _, arg) => {
        const result = data.map((item) => ({
          id: item.image?.id,
          name: item.name,
          url: item.image?.url,
        }));
        return { data: result, page: arg } as CatsResponse;
      },
    }),
  }),
});

export const { useGetAllCatsQuery } = allCatsApi;
