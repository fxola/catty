import { createTheme } from "@shopify/restyle";

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
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
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
      fontSize: 16,
      lineHeight: 24,
    },
    regular: {
      fontWeight: "400",
      fontFamily: "SFPro Display",
      fontSize: 16,
      lineHeight: 24,
    },
    caption: {
      fontSize: 13,
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
