import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.push({ ...action.payload, count: 1 });
      }
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    increaseCount: (state, action) => {
      const item = state.find((i) => i.id === action.payload);
      if (item) {
        item.count += 1;
      }
    },
    decreaseCount: (state, action) => {
      const item = state.find((i) => i.id === action.payload);
      if (item && item.count > 1) {
        item.count -= 1;
      }
    },
    clearCart: () => [],
  },
});

export const { addItem, removeItem, increaseCount, decreaseCount, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
