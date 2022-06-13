import Text from "@src/constants/text";
import View from "@src/constants/view";

const CatsILike = () => {
  return (
    <View
      justifyContent="center"
      alignItems="center"
      flex={1}
      backgroundColor="primaryBackground"
    >
      <Text color="primaryText">Cats i like!</Text>
    </View>
  );
};

export default CatsILike;
