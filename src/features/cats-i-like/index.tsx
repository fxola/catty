import CatsILikeItem from "@src/components/cats-I-like-Item";
import Header from "@src/components/header";
import View from "@src/components/base/view";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  addToFavorites,
  getFavoriteCats,
  getFavoriteIDs,
  removeFromFavorites,
} from "./slice";
import { useAppDispatch, useAppSelector } from "@src/hooks/useReduxHooks";
import { useCallback, useRef } from "react";
import { Cat } from "../types";
import { useResponsiveProp } from "@shopify/restyle";
import { useScrollToTop } from "@react-navigation/native";
import Text from "@src/components/base/text";

const CatsILike = () => {
  const likedCats = useAppSelector(getFavoriteCats);
  const favoriteIDs = useAppSelector(getFavoriteIDs);

  const ref = useRef<FlatList | null>(null);
  useScrollToTop(ref);

  const dispatch = useAppDispatch();

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
        <CatsILikeItem
          text={item.name}
          imageUrl={item.url}
          isLiked={isLiked}
          onLike={onLike}
        />
      );
    },
    [likedCats, favoriteIDs]
  );

  const responsiveColumns = useResponsiveProp({ phone: 2, tablet: 4 });

  const EmptyList = (
    <View alignItems="center" justifyContent="center" flexGrow={1}>
      <Text>No Likes yet!</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Cats I Like" />
      <View marginHorizontal={"m"} flexGrow={1}>
        <FlatList
          data={likedCats}
          renderItem={renderItem}
          numColumns={responsiveColumns}
          contentContainerStyle={styles.listContainer}
          columnWrapperStyle={styles.columnContainer}
          showsVerticalScrollIndicator={false}
          ref={ref}
          ListEmptyComponent={EmptyList}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  listContainer: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  columnContainer: {
    justifyContent: "space-between",
    flexGrow: 1,
  },
});

export default CatsILike;
