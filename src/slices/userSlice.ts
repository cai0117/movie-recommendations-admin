import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { USER_INFO_STORAGE } from "@/constants/storage";
import { RoleAuthType } from "@/api/userApi";

const initialState: Partial<RoleAuthType> = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (_, action: PayloadAction<RoleAuthType>) => {
      window.localStorage.setItem(
        USER_INFO_STORAGE,
        JSON.stringify(action.payload)
      );
      return action.payload;
    },
    clear: () => {
      window.localStorage.removeItem(USER_INFO_STORAGE);
      return {};
    },
  },
});

export const { setUserInfo, clear } = userSlice.actions;

export default userSlice.reducer;
