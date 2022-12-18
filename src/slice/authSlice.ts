import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IAuth } from "../interfaces/IAuth";

// Define the initial state using that type
const initialState: IAuth = {
  name: "",
  email: "",
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getUser: (state, action: PayloadAction<IAuth>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
  },
});

export const { getUser } = authSlice.actions;

export default authSlice.reducer;
