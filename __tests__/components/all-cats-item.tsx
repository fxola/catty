import { fireEvent, render } from "@testing-library/react-native";
import { expect, it } from "@jest/globals";
import { Provider } from "react-redux";
import store from "@src/store";
import { darkTheme } from "@src/constants/theme";
import { ThemeProvider } from "@shopify/restyle";
import AllCatsItem from "@src/components/all-cats-Item";

describe("When the AllCatsItem Component renders", () => {
  const likeMock = jest.fn();

  const Props = {
    text: "American Curl",
    onLike: likeMock,
    isLiked: false,
  };

  const component = (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <AllCatsItem {...Props} />
      </ThemeProvider>
    </Provider>
  );

  it("renders the AllCatsItem Component Correctly", async () => {
    const { getByTestId } = render(component);

    const image = getByTestId("image");
    const text = getByTestId("text");
    const like = getByTestId("like-button");

    expect(image).toBeTruthy();
    expect(image.props.source).toBe(require("../../assets/images/favicon.png"));

    expect(text).toBeTruthy();
    expect(text.children[0]).toBe("American Curl");
    expect(text.props.style[0].color).toBe("#fff"); //dark theme

    expect(like).toBeTruthy();
    fireEvent.press(like);
    expect(likeMock).toHaveBeenCalled();
  });
});
