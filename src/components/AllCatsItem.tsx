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
const AllCatsItem = ({ text, imageUrl, isLiked }: Props) => {
  return (
    <View
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      mb={"l"}
    >
      <View flexDirection="row" alignItems={"center"}>
        <Image source={defaultImage || imageUrl} style={styles.image} />
        <Text ml={"l"} variant="regular">
          {text}
        </Text>
      </View>
      <LikeButton isLiked={isLiked} size={22} />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 40,
    width: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
  },
});

export default AllCatsItem;
