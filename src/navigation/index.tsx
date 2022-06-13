import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "@shopify/restyle";
import { enableScreens } from "react-native-screens";

import { Theme } from "@src/constants/theme";
import Tabs from "@src/navigation/tabs";

enableScreens();

export default function Navigation({ isDarkMode }: { isDarkMode: boolean }) {
  const theme = useTheme<Theme>();
  const navigationTheme = {
    dark: isDarkMode,
    colors: theme.navigationContainer,
  };

  return (
    <NavigationContainer theme={navigationTheme}>
      <Tabs />
    </NavigationContainer>
  );
}
