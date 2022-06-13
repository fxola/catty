import Navigation from "@src/navigation";
import { useColorScheme } from "react-native";
import { ThemeProvider } from "@shopify/restyle";
import { useState } from "react";
import theme, { darkTheme } from "@src/constants/theme";

export default function App() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const [darkMode, setDarkMode] = useState(isDarkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <Navigation isDarkMode={darkMode} />
    </ThemeProvider>
  );
}
