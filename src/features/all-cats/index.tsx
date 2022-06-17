import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Text from "@src/constants/text";
import View from "@src/constants/view";

import LikeButton from "@src/components/LikeButton";
import Header from "@src/components/Header";

const AllCats = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="All Cats" />
      <View
        justifyContent="center"
        alignItems="center"
        flexGrow={1}
        backgroundColor="primaryBackground"
      >
        <Text color="primaryText" variant="regular">
          All Cats!
        </Text>
        <LikeButton isLiked />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1 },
});

export default AllCats;
