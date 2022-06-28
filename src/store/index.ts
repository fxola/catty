import { configureStore } from "@reduxjs/toolkit";
import { allCatsApi } from "@src/features/all-cats/api";
import allCats from "@src/features/all-cats/slice";
import likedCats from "@src/features/cats-i-like/slice";
import appTheme from "@src/features/app-theme/slice";

export const store = configureStore({
  reducer: {
    [allCatsApi.reducerPath]: allCatsApi.reducer,
    allCats,
    likedCats,
    appTheme,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(allCatsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
