import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for user login
export const getUser = createAsyncThunk("getUser", async (loginData) => {
  const response = await axios.post(
    "https://academix.runasp.net/api/Auth/Login",
    loginData
  );
  const user = response.data.userdata;
  console.log(user[0]);

  return user[0];
});

// Create the login slice
export const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: {},
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(getUser.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default loginSlice.reducer;
