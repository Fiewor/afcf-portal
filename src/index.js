import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store";
import { Toaster } from "react-hot-toast";
import "./styles/general.scss";
import ErrorBoundary from "./ErrorBoundary";

ReactDOM.createRoot(document.querySelector("#app")).render(
  <Provider store={store}>
    <Toaster toastOptions={{ duration: 4000 }} />
    <ErrorBoundary>
      <Suspense fallback="Loading...">
        <App />
      </Suspense>
    </ErrorBoundary>
  </Provider>
);
