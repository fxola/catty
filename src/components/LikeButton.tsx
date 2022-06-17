import * as React from "react";
import { Insets, Pressable } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { palette } from "@src/constants/theme";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withSequence,
} from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface Props {
  isLiked: boolean;
  size?: number;
}

export const LikeButton = ({ isLiked, size = 25 }: Props) => {
  const [liked, setLiked] = React.useState(isLiked);

  const name = liked ? "heart" : "heart-outline";
  const color = liked ? palette.red : palette.gray;

  const heartScale = useSharedValue(1);

  const style = useAnimatedStyle(() => {
    return {
      transform: [{ scale: heartScale.value }],
    };
  });

  const onPress = () => {
    setLiked(!liked);
    if (!liked) {
      heartScale.value = withSequence(
        withSpring(1.1, { velocity: 20, damping: 10 }),
        withSpring(1)
      );
    }
  };

  const hitSlop: Insets = {
    bottom: 20,
    left: 20,
    right: 20,
    top: 20,
  };

  return (
    <AnimatedPressable onPress={onPress} style={style} hitSlop={hitSlop}>
      <MaterialCommunityIcons name={name} color={color} size={size} />
    </AnimatedPressable>
  );
};

export default LikeButton;
