import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../redux/slices/appSlice";
import productReducer from "../redux/slices/productSlice";
import basketreducer from "../redux/slices/basketSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    product: productReducer,
    basket: basketreducer,
  },
});
