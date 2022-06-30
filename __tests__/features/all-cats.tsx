import { render, waitFor } from "@testing-library/react-native";
import { expect, it } from "@jest/globals";
import AllCatsScreen from "@src/features/all-cats";
import { Provider } from "react-redux";
import store from "@src/store";
import { darkTheme } from "@src/constants/theme";
import { ThemeProvider } from "@shopify/restyle";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

describe("When the All Cats screen renders", () => {
  const toggleModalMock = jest.fn();
  beforeEach(() => {
    fetchMock.resetMocks();
    fetchMock.mockClear();
  });
  const Cats = [
    { name: "American Curl cat", url: "", id: "1" },
    { name: "Toyger cat", url: "", id: "2" },
    { name: "Sphinx cat", url: "", id: "3" },
  ];

  const component = (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen component={AllCatsScreen} name="All Cats" />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );

  it("displays list of cats from the server", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(Cats));

    const { getByTestId, getAllByText, queryByTestId } = render(component);

    const spinner = getByTestId("spinner");
    expect(spinner).not.toBeUndefined();

    await waitFor(() => {
      const listElements = getAllByText(/cat/i);
      expect(listElements.length).toBe(3);
    });

    expect(queryByTestId("spinner")).toBeNull();
  });

  it("displays an error message when request fails", async () => {
    fetchMock.mockRejectedValueOnce(JSON.stringify({}));

    const { getByTestId, queryByTestId, getByText } = render(component);

    const spinner = getByTestId("spinner");
    expect(spinner).not.toBeUndefined();

    await waitFor(() => {
      const errorText = getByText("Something Went wrong.");
      const retryButton = getByText("Retry");

      expect(errorText).toBeTruthy();
      expect(retryButton).toBeTruthy();
    });

    expect(queryByTestId("spinner")).toBeNull();
  });
});
