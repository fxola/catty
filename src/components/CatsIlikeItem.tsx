import Text from "@src/constants/text";
import View from "@src/constants/view";
import { Image, StyleSheet } from "react-native";
import LikeButton from "./LikeButton";

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
