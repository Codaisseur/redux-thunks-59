import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  all: [],
  loading: true,
};

export const postSlice = createSlice({
  initialState,
  name: "posts",
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    postsFetched: (state, action) => {
      // action.payload => [{}, {}, {}, {}]
      state.all = [...action.payload];
    },
    stopLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { postsFetched, startLoading, stopLoading } = postSlice.actions;

export default postSlice.reducer;
