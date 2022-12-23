import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TOKEN_STORAGE, REFRESH_TOKEN_STORAGE } from "@/constants/storage";

const initialState = {
  token: "",
  refreshToken: "",
  userStoreId: "",
  userStoreUnitId: "",
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      window.localStorage.setItem(TOKEN_STORAGE, action.payload);
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.refreshToken = action.payload;
      window.localStorage.setItem(REFRESH_TOKEN_STORAGE, action.payload);
    },
    setUserStoreId: (state, action: PayloadAction<string>) => {
      state.userStoreId = action.payload;
    },
    setUserStoreUnitId: (state, action: PayloadAction<string>) => {
      state.userStoreUnitId = action.payload;
    },
    clear: () => {
      window.localStorage.removeItem(TOKEN_STORAGE);
      window.localStorage.removeItem(REFRESH_TOKEN_STORAGE);
      return {
        token: "",
        refreshToken: "",
        userStoreId: "",
        userStoreUnitId: "",
      };
    },
  },
});

export const {
  setToken,
  setRefreshToken,
  setUserStoreId,
  setUserStoreUnitId,
  clear,
} = tokenSlice.actions;

export default tokenSlice.reducer;
