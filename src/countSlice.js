import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
  name: "count",
  initialState: { value: 0 },
  reducers: {
    plus: (state) => {
      state.value += 35;
    },
    minus: (state) => {
      state.value -= 22;
    },
  },
});

export const { plus, minus } = countSlice.actions;
export default countSlice.reducer;
