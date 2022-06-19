import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@src/store";
import { allCatsApi, CatsResponse } from "./api";

const initialState: CatsResponse = {
  data: [],
  page: 1,
};

const allCatsSlice = createSlice({
  name: "allCats",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      allCatsApi.endpoints.getAllCats.matchFulfilled,
      (state, { payload }) => {
        const { data, page } = payload;
        state.data = page > 0 ? state.data.concat(data) : data;
        state.page = page;
      }
    );
  },
});

export default allCatsSlice.reducer;
export const getInfiniteCatList = (state: RootState) => state.allCats;
