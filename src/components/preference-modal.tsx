import { palette } from "@src/constants/theme";
import { getDarkMode, toggleAppearance } from "@src/features/app-theme/slice";
import { useAppDispatch, useAppSelector } from "@src/hooks/useReduxHooks";
import {
  Pressable,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Switch,
} from "react-native";
import Text from "./base/text";
import View from "./base/view";

interface Props {
  visible: boolean;
  toggleModal: () => void;
}

const PreferenceModal = ({ visible, toggleModal }: Props) => {
  const dispatch = useAppDispatch();
  const isDark = useAppSelector(getDarkMode);

  const onSwitch = () => {
    dispatch(toggleAppearance({ isDark: !isDark }));
  };

  return (
    <Modal visible={visible} transparent={true} animationType={"slide"}>
      <Pressable style={styles.overlay} onPress={toggleModal} testID="overlay">
        <TouchableWithoutFeedback>
          <View style={styles.banner} backgroundColor="primaryBackground">
            <Text variant={"bold"} textAlign="center">
              Preferences
            </Text>
            <View marginTop={"l"} style={styles.line} testID="line" />
            <View
              flexDirection="row"
              justifyContent="space-between"
              alignItems={"center"}
              paddingHorizontal="l"
              paddingVertical="m"
            >
              <Text variant={"bold"}>Dark Mode</Text>
              <Switch value={isDark} onChange={onSwitch} testID="switch" />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    alignItems: "center",
    justifyContent: "flex-end",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  banner: {
    width: "100%",
    height: "23%",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    borderColor: palette.darkGray,
    borderWidth: StyleSheet.hairlineWidth,
    paddingTop: "5%",
  },
  line: {
    borderBottomColor: palette.gray,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default PreferenceModal;
