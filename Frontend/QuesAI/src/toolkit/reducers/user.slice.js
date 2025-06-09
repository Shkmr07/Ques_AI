import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api";

export const signup = createAsyncThunk(
  "user/signup",
  async ({ name, email, password }, thunkAPI) => {
    try {
      const res = await api.post("/user/signup", { name, email, password });
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.res?.data?.message || "Signup Failed"
      );
    }
  }
);

export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const res = await api.post("/user/login", { email, password });
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.res?.data?.message || "Login Failed");
    }
  }
);

const token = JSON.parse(localStorage.getItem("token"));

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    error: null,
    user: token || null,
    isSignup: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
        localStorage.setItem("token", JSON.stringify(action.payload.data));
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      // Signup Part
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.isSignup = action.payload.message;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
