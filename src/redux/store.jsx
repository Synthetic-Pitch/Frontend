import { configureStore } from "@reduxjs/toolkit";
import CounteReducer from "./counter";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    counter: CounteReducer,
    userInfo: userSlice
  }
});

export default store;