import { Appearance } from "react-native";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@src/store";

interface AppThemeState {
  isDark: boolean;
}

const initialState: AppThemeState = {
  isDark: Appearance.getColorScheme() === "dark",
};

const appThemeSlice = createSlice({
  name: "appTheme",
  initialState,
  reducers: {
    toggleAppearance(state, { payload }) {
      state.isDark = payload.isDark;
    },
  },
});

export const { toggleAppearance } = appThemeSlice.actions;

export default appThemeSlice.reducer;

export const getDarkMode = (state: RootState) => state.appTheme.isDark;
