import {configureStore} from "@reduxjs/toolkit";
import { logSlice } from "./LogSlice";

const store = configureStore({
    reducer: {
      log: logSlice.reducer,
    },
  });

export default store;


