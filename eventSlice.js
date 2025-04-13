import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEvents = createAsyncThunk("events/fetchEvents", async () => {
  const res = await axios.get("/api/events");
  return res.data;
});

const eventSlice = createSlice({
  name: "events",
  initialState: { all: [], loading: false },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => { state.loading = true; })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.all = action.payload;
        state.loading = false;
      });
  },
});

export default eventSlice.reducer;
