import { createTheme } from "@shopify/restyle";
import { normalize } from "./layout";

export const palette = {
  gray: "#ccc",
  black: "#212227",
  white: "#fff",
  red: "#DE0202",
  darkGray: "#aaa",
  pitchBlack: "#000",
};

const theme = createTheme({
  colors: {
    primaryBackground: palette.white,
    primaryText: palette.black,
    primaryGrey: palette.gray,
  },
  tabTintColor: {
    inactive: palette.gray,
    active: palette.black,
  },
  spacing: {
    s: normalize(8),
    m: normalize(16),
    l: normalize(24),
    xl: normalize(40),
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    defaults: {
      color: "primaryText",
    },
    bold: {
      fontWeight: "600",
      fontFamily: "SFPro Display",
      fontSize: normalize(16),
      lineHeight: normalize(24),
    },
    regular: {
      fontWeight: "400",
      fontFamily: "SFPro Display",
      fontSize: normalize(16),
      lineHeight: normalize(24),
    },
    caption: {
      fontSize: normalize(13),
      fontWeight: "400",
      fontFamily: "SFPro Display",
    },
  },
  navigationContainer: {
    primary: palette.black,
    background: palette.white,
    card: palette.white,
    text: palette.gray,
    border: palette.gray,
    notification: palette.red,
  },
});

export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    primaryBackground: palette.pitchBlack,
    primaryText: palette.white,
  },
  navigationContainer: {
    primary: palette.white,
    background: palette.pitchBlack,
    card: palette.pitchBlack,
    text: palette.white,
    border: palette.black,
    notification: palette.red,
  },
  tabTintColor: {
    inactive: palette.darkGray,
    active: palette.white,
  },
};

export type Theme = typeof theme;
export default theme;
