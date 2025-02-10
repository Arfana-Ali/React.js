import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CreateSlice";
const Store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});

export default Store;
