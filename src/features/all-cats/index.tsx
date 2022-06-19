import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import View from "@src/components/base/view";
import Header from "@src/components/header";
import AllCatsItem from "@src/components/all-cats-Item";
import { useGetAllCatsQuery } from "./api";
import { useCallback, useState } from "react";
import { useAppSelector } from "@src/hooks/useReduxHooks";
import { getInfiniteCatList } from "./slice";
import { Cat } from "../types";

const AllCats = () => {
  const [page, setPage] = useState(0);
  const { isLoading, isFetching } = useGetAllCatsQuery(page);
  const { data } = useAppSelector(getInfiniteCatList);

  const renderItem = useCallback(
    ({ item }: { item: Cat }) => {
      return (
        <AllCatsItem text={item.name} imageUrl={item.url} isLiked={false} />
      );
    },
    [data]
  );

  const onEndreached = useCallback(() => {
    if (!isFetching) {
      setPage(page + 1);
    }
  }, [page, isFetching]);

  const KeyExtractor = useCallback(({ id, name }) => id + name, []);

  const renderPageContent = () => {
    if (isLoading) {
      return <ActivityIndicator size={"large"} />;
    }

    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        keyExtractor={KeyExtractor}
        showsVerticalScrollIndicator={false}
        onEndReached={onEndreached}
        onEndReachedThreshold={0.7}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="All Cats" />
      <View backgroundColor="primaryBackground" paddingHorizontal={"l"}>
        {renderPageContent()}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, paddingBottom: 70 },
  listContainer: {
    flexGrow: 1,
    paddingBottom: 70,
  },
});

export default AllCats;
