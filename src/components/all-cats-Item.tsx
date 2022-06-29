import Text from "@src/components/base/text";
import View from "@src/components/base/view";
import { palette } from "@src/constants/theme";
import { memo } from "react";
import { Image, ImageSourcePropType, StyleSheet } from "react-native";
import LikeButton from "./like-button";

const defaultImage = require("../../assets/images/favicon.png");
interface Props {
  imageUrl?: string;
  text: string;
  onLike: () => void;
  isLiked: boolean;
}
const AllCatsItem = ({ text, imageUrl, onLike, isLiked }: Props) => {
  const source: ImageSourcePropType = imageUrl
    ? { uri: imageUrl }
    : defaultImage;

  return (
    <View
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      mb={"l"}
    >
      <View flexDirection="row" alignItems={"center"}>
        <Image source={source} style={styles.image} />
        <Text ml={"l"} variant="regular">
          {text}
        </Text>
      </View>
      <LikeButton isLiked={isLiked} size={22} onLike={onLike} />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 40,
    width: 40,
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: palette.gray,
    backgroundColor: palette.gray,
  },
});

export default memo(AllCatsItem);
