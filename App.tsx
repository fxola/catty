import Navigation from "@src/navigation";
import { useColorScheme } from "react-native";
import { ThemeProvider } from "@shopify/restyle";
import { useState } from "react";
import theme, { darkTheme } from "@src/constants/theme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import useCachedResources from "@src/hooks/useCachedResources";

export default function App() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const [darkMode, setDarkMode] = useState(isDarkMode);
  const statusBarStyle = darkMode ? "light" : "dark";

  const resourcesLoaded = useCachedResources();
  if (!resourcesLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={darkMode ? darkTheme : theme}>
        <Navigation isDarkMode={darkMode} />
      </ThemeProvider>
      <StatusBar style={statusBarStyle} translucent />
    </SafeAreaProvider>
  );
}
