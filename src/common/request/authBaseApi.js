import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosAuthBaseQuery } from "./request";
import tagTypes from "../../tagTypes";

const authBaseApi = createApi({
  reducerPath: "authBaseApi",
  baseQuery: axiosAuthBaseQuery({
    baseUrl: "",
    headers: {
      clientId: `A6w0Xu6`,
    },
  }),
  tagTypes: tagTypes.authBaseApi,
  endpoints: () => ({}),
});

export default authBaseApi;
