import { createSlice } from "@reduxjs/toolkit";

// LocalStorage থেকে load করা
const cartFromStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [], totalQuantity: 0, totalPrice: 0 };

const initialState = cartFromStorage;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existItem = state.cartItems.find(i => i.id === item.id);
      if (existItem) {
        existItem.quantity += 1;
        existItem.subtotal = existItem.price * existItem.quantity;
      } else {
        state.cartItems.push({ ...item, quantity: 1, subtotal: item.price });
      }
      state.totalQuantity = state.cartItems.reduce((a, c) => a + c.quantity, 0);
      state.totalPrice = state.cartItems.reduce((a, c) => a + c.subtotal, 0);
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
      state.totalQuantity = state.cartItems.reduce((a, c) => a + c.quantity, 0);
      state.totalPrice = state.cartItems.reduce((a, c) => a + c.subtotal, 0);
      localStorage.setItem("cart", JSON.stringify(state));
    },
    increaseQuantity(state, action) {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item) {
        item.quantity += 1;
        item.subtotal = item.price * item.quantity;
      }
      state.totalQuantity = state.cartItems.reduce((a, c) => a + c.quantity, 0);
      state.totalPrice = state.cartItems.reduce((a, c) => a + c.subtotal, 0);
      localStorage.setItem("cart", JSON.stringify(state));
    },
    decreaseQuantity(state, action) {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.subtotal = item.price * item.quantity;
      }
      state.totalQuantity = state.cartItems.reduce((a, c) => a + c.quantity, 0);
      state.totalPrice = state.cartItems.reduce((a, c) => a + c.subtotal, 0);
      localStorage.setItem("cart", JSON.stringify(state));
    },
    clearCart(state) {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
