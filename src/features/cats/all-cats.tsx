import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import View from "@src/components/base/view";

import Header from "@src/components/header";
import AllCatsItem from "@src/components/all-cats-Item";

const AllCats = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="All Cats" />
      <View
        flexGrow={1}
        backgroundColor="primaryBackground"
        paddingHorizontal={"l"}
      >
        <AllCatsItem text="Abysinnan" imageUrl="" isLiked />
        <AllCatsItem text="American Bobtail" imageUrl="" isLiked={false} />
        <AllCatsItem text="Abysinnan" imageUrl="" isLiked />
        <AllCatsItem text="American Bobtail" imageUrl="" isLiked={false} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1 },
});

export default AllCats;
