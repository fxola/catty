import {
  ActivityIndicator,
  FlatList,
  Platform,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import View from "@src/components/base/view";
import Header from "@src/components/header";
import AllCatsItem from "@src/components/all-cats-Item";
import { useGetAllCatsQuery } from "./api";
import { useCallback, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@src/hooks/useReduxHooks";
import { getInfiniteCatList } from "./slice";
import { Cat } from "../types";
import { useScrollToTop } from "@react-navigation/native";
import {
  addToFavorites,
  getFavoriteIDs,
  removeFromFavorites,
} from "@src/features/cats-i-like/slice";
import { normalize } from "@src/constants/layout";

const AllCats = () => {
  const [page, setPage] = useState(0);
  const { isLoading, isFetching } = useGetAllCatsQuery(page);
  const { data } = useAppSelector(getInfiniteCatList);
  const favoriteIDs = useAppSelector(getFavoriteIDs);
  const dispatch = useAppDispatch();

  const ref = useRef<FlatList | null>(null);
  useScrollToTop(ref);

  const renderItem = useCallback(
    ({ item }: { item: Cat }) => {
      const { id, name, url } = item;
      const isLiked = favoriteIDs.includes(item.id);

      const onLike = () => {
        if (isLiked) {
          return dispatch(removeFromFavorites({ id }));
        }
        dispatch(addToFavorites({ id, name, url }));
      };

      return (
        <AllCatsItem
          text={item.name}
          imageUrl={item.url}
          isLiked={isLiked}
          onLike={onLike}
        />
      );
    },
    [data, favoriteIDs]
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
        ref={ref}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="All Cats" />
      <View backgroundColor="primaryBackground">{renderPageContent()}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: Platform.select({
      ios: normalize(70),
      android: normalize(100),
    }),
  },
  listContainer: {
    flexGrow: 1,
    paddingBottom: Platform.select({
      ios: normalize(70),
      android: normalize(100),
    }),
    paddingHorizontal: normalize(24),
  },
});

export default AllCats;
