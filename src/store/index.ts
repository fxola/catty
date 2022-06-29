import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { allCatsApi } from "@src/features/all-cats/api";
import allCats from "@src/features/all-cats/slice";
import likedCats from "@src/features/cats-i-like/slice";
import appTheme from "@src/features/app-theme/slice";

import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  persistStore,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
  FLUSH,
  PAUSE,
  PERSIST,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ["api", "allCats"],
};

const reducer = combineReducers({
  [allCatsApi.reducerPath]: allCatsApi.reducer,
  allCats,
  likedCats,
  appTheme,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(allCatsApi.middleware),
});

export const persistor = persistStore(store);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
