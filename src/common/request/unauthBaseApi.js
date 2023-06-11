import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosUnauthBaseQuery } from "./request";
import tagTypes from "../../tagTypes";

const unauthBaseApi = createApi({
  reducerPath: "unauthBaseApi",
  baseQuery: axiosUnauthBaseQuery({
    baseUrl: "",
    headers: {
      clientId: `A6w0Xu6`,
    },
  }),
  tagTypes: tagTypes.unauthBaseApi,
  endpoints: () => ({}),
});

export default unauthBaseApi;
