import Header from "@src/components/Header";
import Text from "@src/constants/text";
import View from "@src/constants/view";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CatsILike = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Cats I Like" />
      <View
        justifyContent="center"
        alignItems="center"
        flex={1}
        backgroundColor="primaryBackground"
      >
        <Text color="primaryText" variant="regular">
          Cats i like!
        </Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: { flexGrow: 1 },
});

export default CatsILike;
