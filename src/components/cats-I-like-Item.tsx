import Text from "@src/components/base/text";
import View from "@src/components/base/view";
import { Image, StyleSheet } from "react-native";
import LikeButton from "./like-button";

const defaultImage = require("../../assets/images/favicon.png");
interface Props {
  imageUrl?: string;
  text: string;
  isLiked: boolean;
}
const CatsILikeItem = ({ text, imageUrl, isLiked }: Props) => {
  return (
    <View margin="m">
      <Image source={defaultImage || imageUrl} style={styles.image} />
      <View flexDirection="row" justifyContent="space-between" mt="s">
        <Text variant="regular">{text}</Text>
        <LikeButton isLiked={isLiked} size={22} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 150,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
  },
});

export default CatsILikeItem;
