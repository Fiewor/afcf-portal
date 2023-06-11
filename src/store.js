import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import blogReducer from "../src/features/blog/slices/blogSlice";
import authBaseApi from "./common/request/authBaseApi";
import unauthBaseApi from "./common/request/unauthBaseApi";
import appReducer from "./slices/appSlice";
import dashboardReducer from "./features/dashboard/slices/dashboard";
import profileReducer from "./features/profiles/slices/profiles";
import reportingReducer from "./features/reporting/slices/reporting";

export const store = configureStore({
  reducer: {
    blogs: blogReducer,
    [authBaseApi.reducerPath]: authBaseApi.reducer,
    [unauthBaseApi.reducerPath]: unauthBaseApi.reducer,
    app: appReducer,
    dashboard: dashboardReducer,
    profiles: profileReducer,
    reporting: reportingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authBaseApi.middleware,
      unauthBaseApi.middleware,
    ]),
});

setupListeners(store.dispatch);
