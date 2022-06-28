import { configureStore } from "@reduxjs/toolkit";
import { allCatsApi } from "@src/features/all-cats/api";
import allCats from "@src/features/all-cats/slice";
import likedCats from "@src/features/cats-i-like/slice";

export const store = configureStore({
  reducer: {
    [allCatsApi.reducerPath]: allCatsApi.reducer,
    allCats,
    likedCats,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(allCatsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
