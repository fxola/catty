import * as React from "react";
import NetInfo from "@react-native-community/netinfo";

interface Props {
  connected: boolean;
}

export const NetworkContext = React.createContext<Props>({ connected: true });

export const useNetworkState = () => {
  const [connected, setConneted] = React.useState(true);

  const handleNetworkChange = React.useCallback((state) => {
    setConneted(state.isConnected);
  }, []);

  React.useEffect(() => {
    let unsubscribe = NetInfo.addEventListener(handleNetworkChange);
    return () => {
      unsubscribe();
    };
  }, [connected]);

  const networkState = React.useMemo(() => ({ connected }), [connected]);

  return networkState;
};
