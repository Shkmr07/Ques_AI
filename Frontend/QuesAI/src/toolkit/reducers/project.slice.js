import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api";

export const getProject = createAsyncThunk(
  "project/getItem",
  async (_, thunkAPI) => {
    try {
      const res = await api.get("/project", {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      console.log(res)
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.res?.data?.message || "Failed to get projects"
      );
    }
  }
);

export const createProject = createAsyncThunk(
  "project/create",
  async (name, thunkAPI) => {
    try {
      const res = await api.post(
        "/project/add-project",
        { name },
        {
          headers: {
            Authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
          },
        }
      );
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.res?.data?.message || "Failed to add projects"
      );
    }
  }
);

const projectSlice = createSlice({
  name: "project",
  initialState: {
    loading: false,
    error: null,
    project: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createProject.fulfilled, (state, action) => {
        state.loading = false;
        state.project.push(action.payload.data);
      })
      .addCase(createProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // get Project
      .addCase(getProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProject.fulfilled, (state, action) => {
        state.loading = false;
        state.project = action.payload.data;
      })
      .addCase(getProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default projectSlice.reducer;
