import axios from "axios";
// import { getAccessToken } from "../sessions/cookies";

const axiosAuthBaseQuery = ({ baseUrl } = { baseUrl: "" }) => {
  return async ({ url, method, data, params, headers }) => {
    try {
      const setHeaders = () => {
        const accessToken = false;  //getAccessToken();

        if (accessToken) {
          return {
            ...headers,
            Authorization: `Bearer ${accessToken}`,
          };
        } else {
          return {
            ...headers,
          };
        }
      };

      const result = await axios({
        url,
        baseURL: baseUrl,
        method,
        data,
        params,
        headers: setHeaders(),
      });

      return {
        data: result.data,
      };
    } catch (axiosError) {
      const err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
};

const axiosUnauthBaseQuery = (
  { baseUrl, headers } = { baseUrl: "", headers: {} }
) => {
  return async ({ url, method, data, params, additionalHeaders }) => {
    try {
      const result = await axios({
        url,
        baseURL: baseUrl,
        method,
        data,
        params,
        headers: {
          ...additionalHeaders,
          ...headers,
        },
      });

      return {
        data: result.data,
      };
    } catch (axiosError) {
      const err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
};

export { axiosAuthBaseQuery, axiosUnauthBaseQuery };
