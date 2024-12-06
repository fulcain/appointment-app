import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fakeBaseQuery(),
  // tagTypes: ["BLOG", "USER"], // baraye bi etebar kardan cach
  endpoints: () => ({}),
});
