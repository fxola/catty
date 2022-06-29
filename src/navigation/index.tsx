import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "@shopify/restyle";

import { Theme } from "@src/constants/theme";
import Tabs from "@src/navigation/tabs";
import { useNetworkState } from "@src/hooks/useNetworkState";
import OfflineMessage from "@src/components/offline-message";

export default function Navigation({ isDarkMode }: { isDarkMode: boolean }) {
  const theme = useTheme<Theme>();
  const navigationTheme = {
    dark: isDarkMode,
    colors: theme.navigationContainer,
  };
  const { connected } = useNetworkState();
  return (
    <NavigationContainer theme={navigationTheme}>
      <Tabs />
      {!connected && <OfflineMessage />}
    </NavigationContainer>
  );
}
