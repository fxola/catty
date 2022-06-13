import Text from "@src/constants/text";
import View from "@src/constants/view";

const AllCats = () => {
  return (
    <View
      justifyContent="center"
      alignItems="center"
      flex={1}
      backgroundColor="primaryBackground"
    >
      <Text marginBottom="l" color="primaryText">
        AllCats!
      </Text>
    </View>
  );
};

export default AllCats;
