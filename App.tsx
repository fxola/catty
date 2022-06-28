import Navigation from "@src/navigation";
import { useColorScheme } from "react-native";
import { ThemeProvider } from "@shopify/restyle";
import { useEffect, useState } from "react";
import theme, { darkTheme } from "@src/constants/theme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import useCachedResources from "@src/hooks/useCachedResources";
import { Provider } from "react-redux";
import { store } from "@src/store";

export default function App() {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme === "dark");

  useEffect(() => {
    const unsubScribe = store.subscribe(() => {
      const result = store.getState().appTheme.isDark;
      setIsDark(result);
    });

    return () => {
      unsubScribe();
    };
  }, []);

  const statusBarStyle = isDark ? "light" : "dark";

  const resourcesLoaded = useCachedResources();
  if (!resourcesLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <ThemeProvider theme={isDark ? darkTheme : theme}>
          <Navigation isDarkMode={isDark} />
        </ThemeProvider>
      </Provider>
      <StatusBar style={statusBarStyle} translucent />
    </SafeAreaProvider>
  );
}
