import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/usersSlice.tsx";
import thunk from "redux-thunk";

import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    usersReducer: usersReducer,
  },
  middleware: [thunk],
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
