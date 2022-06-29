import { TouchableOpacity, StyleSheet } from "react-native";
import { palette } from "@src/constants/theme";
import Text from "./base/text";
import View from "./base/view";

interface Props {
  onPress: () => void;
}

const ErrorMessage = ({ onPress }: Props) => {
  return (
    <View
      style={styles.container}
      alignItems="center"
      justifyContent={"center"}
      paddingHorizontal="l"
    >
      <Text variant="bold" mb={"l"}>
        Something Went wrong.
      </Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text variant="bold" textAlign={"center"} color="plainWhite">
          Retry
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "90%",
  },
  button: {
    width: "100%",
    backgroundColor: palette.darkGray,
    borderRadius: 10,
    height: 40,
    justifyContent: "center",
  },
});

export default ErrorMessage;
