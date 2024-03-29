import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./reducer";

const store = configureStore({
  reducer: myReducer,
});

export default store;
