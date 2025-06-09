import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api";

export const getEpisode = createAsyncThunk(
  "episode/get",
  async (id, thunkAPI) => {
    try {
      const res = await api.get(`/episode:${id}`, {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });

      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.res?.data?.message || "Failed to get episode"
      );
    }
  }
);

const episodeSlice = createSlice({
  name: "episode",
  initialState: {
    loading: false,
    error: null,
    episode: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEpisode.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getEpisode.fulfilled, (state, action) => {
        state.loading = false;
        state.episode = action.payload.data;
      })
      .addCase(getEpisode.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});


export default episodeSlice.reducer
