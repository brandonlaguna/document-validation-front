import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../hooks/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
