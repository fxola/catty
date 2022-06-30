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
  isLiked: boolean;
  onLike: () => void;
}
const CatsILikeItem = ({ text, imageUrl, isLiked, onLike }: Props) => {
  const source: ImageSourcePropType = imageUrl
    ? { uri: imageUrl }
    : defaultImage;
  return (
    <View marginHorizontal={"s"} marginVertical={"m"}>
      <Image source={source} style={styles.image} testID="image" />
      <View flexDirection="row" justifyContent="space-between" mt="s">
        <Text variant="regular" testID="text">
          {text}
        </Text>
        <LikeButton isLiked={isLiked} size={22} onLike={onLike} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 150,
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: palette.gray,
    backgroundColor: palette.gray,
  },
});

export default memo(CatsILikeItem);
