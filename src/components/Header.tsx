import { useState } from "react";
import { Insets, Platform, TouchableOpacity } from "react-native";
import { useTheme } from "@shopify/restyle";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

import Text from "@src/components/base/text";
import View from "@src/components/base/view";

import { Theme } from "@src/constants/theme";
import PreferenceModal from "./preference-modal";

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  const { colors } = useTheme<Theme>();

  const statusBarInset = useSafeAreaInsets().top;
  const headerHeight = Platform.OS === "android" ? 64 : 44;
  const smallHeaderInset = statusBarInset + headerHeight;

  const hitSlop: Insets = { top: 20, left: 20, right: 20, bottom: 20 };

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <View
      flexDirection="row"
      justifyContent="space-between"
      height={smallHeaderInset}
      backgroundColor="primaryBackground"
      alignItems={"center"}
      paddingHorizontal={"l"}
    >
      <Text variant="bold" color="primaryText">
        {title}
      </Text>
      <TouchableOpacity hitSlop={hitSlop} onPress={toggleModal}>
        <Ionicons
          name="settings-outline"
          size={20}
          color={colors.primaryText}
        />
      </TouchableOpacity>
      <PreferenceModal visible={showModal} toggleModal={toggleModal} />
    </View>
  );
};

export default Header;
