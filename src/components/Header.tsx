import Text from "@src/constants/text";
import View from "@src/constants/view";
import { Insets, Platform, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Theme } from "@src/constants/theme";
import { useTheme } from "@shopify/restyle";

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  const { colors } = useTheme<Theme>();

  const statusBarInset = useSafeAreaInsets().top;
  const headerHeight = Platform.OS === "android" ? 64 : 44;
  const smallHeaderInset = statusBarInset + headerHeight;

  const hitSlop: Insets = { top: 20, left: 20, right: 20, bottom: 20 };

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
      <TouchableOpacity hitSlop={hitSlop}>
        <Ionicons
          name="settings-outline"
          size={20}
          color={colors.primaryText}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
