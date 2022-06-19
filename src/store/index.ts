import { configureStore } from "@reduxjs/toolkit";
import { allCatsApi } from "@src/features/all-cats/api";
import allCatsReducer from "@src/features/all-cats/slice";

export const store = configureStore({
  reducer: {
    [allCatsApi.reducerPath]: allCatsApi.reducer,
    allCats: allCatsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(allCatsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
