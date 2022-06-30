import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@src/store";
import { allCatsApi } from "@src/features/all-cats/api";
import { Cat } from "../types";
import uuid from "uuid-random";

export type FavoriteCat = Cat & { favorite_id: string };

interface LikedCatsState {
  sub_id?: string;
  favorite_ids: string[];
  favoriteCats: Array<FavoriteCat>;
}

const initialState: LikedCatsState = {
  favorite_ids: [],
  favoriteCats: [],
};

const likedCatsSlice = createSlice({
  name: "likedCats",
  initialState,
  reducers: {
    removeFromFavorites: (state, { payload }) => {
      state.favoriteCats = state.favoriteCats.filter(
        (c) => c.id !== payload.id
      );
      state.favorite_ids = state.favorite_ids.filter((id) => payload.id !== id);
    },
    addToFavorites: (state, { payload }) => {
      state.favorite_ids.push(payload.id);
      state.favoriteCats.push(payload);
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      allCatsApi.endpoints.getAllCats.matchFulfilled,
      (state) => {
        if (!state.sub_id) {
          state.sub_id = uuid();
        }
      }
    );
  },
});

export const { removeFromFavorites, addToFavorites } = likedCatsSlice.actions;
export default likedCatsSlice.reducer;
export const getFavoriteIDs = (state: RootState) =>
  state.likedCats.favorite_ids;
export const getFavoriteCats = (state: RootState) =>
  state.likedCats.favoriteCats;
export const getSubID = (state: RootState) => state.likedCats?.sub_id;
