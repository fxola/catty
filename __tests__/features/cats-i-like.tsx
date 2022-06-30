import { fireEvent, render } from "@testing-library/react-native";
import { expect, it } from "@jest/globals";
import { Provider } from "react-redux";
import { reducer, RootState } from "@src/store";
import { darkTheme } from "@src/constants/theme";
import { ThemeProvider } from "@shopify/restyle";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { configureStore, PreloadedState } from "@reduxjs/toolkit";
import CatsILike from "@src/features/cats-i-like";
import { FavoriteCat } from "@src/features/cats-i-like/slice";
const Tab = createBottomTabNavigator();

describe("When the Cats I like screen renders", () => {
  const faves: FavoriteCat[] = [
    {
      name: "American Curl cat",
      url: "",
      id: "1",
      favorite_id: "",
    },
    { name: "Toyger cat", url: "", id: "2", favorite_id: "" },
    { name: "Sphinx cat", url: "", id: "3", favorite_id: "" },
  ];

  const setup = (favoriteCats: FavoriteCat[]) => {
    const initialState = {
      likedCats: {
        favorite_ids: ["1", "2", "3"],
        favoriteCats: favoriteCats,
      },
      appTheme: { isDark: true },
      allCats: {
        data: [],
        page: 0,
      },
    };

    const setupStore = (preloadedState?: PreloadedState<RootState>) => {
      return configureStore({
        reducer,
        preloadedState,
      });
    };

    const store = setupStore(initialState);

    const component = (
      <Provider store={store}>
        <ThemeProvider theme={darkTheme}>
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen component={CatsILike} name="Cats I Like" />
            </Tab.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </Provider>
    );
    return { component, store };
  };

  it("displays list of favorited cats", async () => {
    const { component } = setup(faves);
    const { getByText, getAllByTestId } = render(component);

    const americanCurlCat = getByText("American Curl cat");
    const toygerCat = getByText("Toyger cat");
    const sphinxCat = getByText("Sphinx cat");

    const likeButtons = getAllByTestId("like-button");
    expect(likeButtons.length).toBe(3);

    expect(americanCurlCat).toBeTruthy();
    expect(toygerCat).toBeTruthy();
    expect(sphinxCat).toBeTruthy();
  });

  it("should initially display 3 favorited cats and end up with 2 after one has been unfavorited", async () => {
    const { component } = setup(faves);
    const { getByText, getAllByTestId } = render(component);

    const americanCurlCat = getByText("American Curl cat");
    const toygerCat = getByText("Toyger cat");
    const sphinxCat = getByText("Sphinx cat");
    const likeButtons = getAllByTestId("like-button");

    expect(likeButtons.length).toBe(3);
    expect(americanCurlCat).toBeTruthy();
    expect(toygerCat).toBeTruthy();
    expect(sphinxCat).toBeTruthy();

    fireEvent.press(likeButtons[0]);
    expect(getAllByTestId("like-button").length).toBe(2);
  });

  it("displays a message when there are no favorited cats", async () => {
    const { component } = setup([]);
    const { getByText } = render(component);

    const emptyMessage = getByText("No Likes yet!");
    expect(emptyMessage).toBeTruthy();
  });
});
