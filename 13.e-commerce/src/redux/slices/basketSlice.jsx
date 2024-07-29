import { createSlice } from "@reduxjs/toolkit";

const getBasketFromStorage = () => {
  const basket = localStorage.getItem("basket");
  return basket ? JSON.parse(basket) : [];
};

const initialState = {
  products: getBasketFromStorage(),
  drawer: false,
  totalAmount: 0,
};

const writeBasketToStorage = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket));
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const findProduct = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        const updatedProducts = state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, count: product.count + action.payload.count }
            : product
        );
        state.products = updatedProducts;
      } else {
        state.products.push(action.payload);
      }
      writeBasketToStorage(state.products);
    },
    setDrawer: (state) => {
      state.drawer = !state.drawer;
    },
    calculateBasket: (state) => {
      state.totalAmount = state.products.reduce(
        (total, product) => total + product.price * product.count,
        0
      );
    },
    removeFromBasket: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      writeBasketToStorage(state.products);
      state.totalAmount = state.products.reduce(
        (total, product) => total + product.price * product.count,
        0
      );
    },
  },
});

export const { addToBasket, setDrawer, calculateBasket, removeFromBasket } =
  basketSlice.actions;
export default basketSlice.reducer;
