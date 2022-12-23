import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: "",
  current: 1,
  size: 10,
  input: {},
};

export const keeperSlice = createSlice({
  name: "keeper",
  initialState,
  reducers: {
    setUrl: (state, action) => {
      state.url = action.payload;
    },
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
    setSize: (state, action) => {
      state.size = action.payload;
    },
    setInput: (state, action) => {
      state.input = action.payload;
    },
    clear: () => {
      return { url: "", current: 1, size: 10, input: {} };
    },
  },
});

export const { setUrl, setCurrent, setSize, setInput, clear } =
  keeperSlice.actions;

export default keeperSlice.reducer;
