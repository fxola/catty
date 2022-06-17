import CatsILikeItem from "@src/components/CatsIlikeItem";
import Header from "@src/components/Header";
import View from "@src/constants/view";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CatsILike = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Cats I Like" />
      <ScrollView>
        <View flexDirection={"row"} justifyContent={"space-between"}>
          <CatsILikeItem text="Abysinnan" imageUrl="" isLiked />
          <CatsILikeItem text="American Bobtail" imageUrl="" isLiked={false} />
        </View>
        <View flexDirection={"row"} justifyContent={"space-between"}>
          <CatsILikeItem text="Abysinnan" imageUrl="" isLiked />
          <CatsILikeItem text="American Bobtail" imageUrl="" isLiked={false} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: { flexGrow: 1 },
});

export default CatsILike;
