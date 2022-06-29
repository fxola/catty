import { Platform, StyleSheet } from "react-native";
import { normalize } from "@src/constants/layout";
import { palette } from "@src/constants/theme";
import Text from "./base/text";
import View from "./base/view";

const OfflineMessage = () => {
  return (
    <View
      style={styles.container}
      alignItems="center"
      justifyContent={"flex-end"}
      pb={"s"}
    >
      <Text variant="bold" fontSize={18} color="plainWhite">
        You're Offline
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: Platform.select({ ios: normalize(80), android: normalize(65) }),
    width: "100%",
    backgroundColor: palette.red,
  },
});

export default OfflineMessage;
