import { createTheme } from "@shopify/restyle";

const palette = {
  darkGray: "#333",
  lightGray: "#EEE",
  black: "#0B0B0B",
  white: "#F0F2F3",
  red: "red",
};

const theme = createTheme({
  colors: {
    primaryBackground: palette.white,
    primaryText: palette.black,
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
      fontWeight: "bold",
    },
    regular: {
      fontWeight: "bold",
    },
  },
  navigationContainer: {
    primary: palette.black,
    background: palette.white,
    card: palette.white,
    text: palette.darkGray,
    border: palette.darkGray,
    notification: palette.red,
  },
});

export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    primaryBackground: palette.black,
    primaryText: palette.white,
  },
  navigationContainer: {
    primary: palette.white,
    background: palette.black,
    card: palette.black,
    text: palette.white,
    border: palette.darkGray,
    notification: palette.red,
  },
};

export type Theme = typeof theme;
export default theme;
