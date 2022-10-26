import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const HomeApi = createApi({
  reducerPath: "colorApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://reqres.in/api/",
  }),
  tagTypes: ["Color"],
  endpoints: (builder) => ({
    getColors: builder.query({
      query: () => "colors",
      providesTags: ["Color"],
    }),
    // getColorById: builder.query({
    //     query: (id) => `colors/${id}`
    // })
  }),
});

export const {
  useGetColorsQuery,
  //   useGetColorByIdQuery,
  //   useAddColorMutation,
  //   useUpdateColorMutation,
  //   useDeleteColorMutation,
} = colorApi;
