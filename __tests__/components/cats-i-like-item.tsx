import { fireEvent, render } from "@testing-library/react-native";
import { expect, it } from "@jest/globals";
import { Provider } from "react-redux";
import store from "@src/store";
import theme from "@src/constants/theme";
import { ThemeProvider } from "@shopify/restyle";
import CatsILikeItem from "@src/components/cats-I-like-Item";

describe("When the CatsILikeItem Component renders", () => {
  const likeMock = jest.fn();

  const Props = {
    text: "Aegean",
    onLike: likeMock,
    isLiked: false,
  };

  const component = (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CatsILikeItem {...Props} />
      </ThemeProvider>
    </Provider>
  );

  it("renders the CatsILikeItem Component Correctly", async () => {
    const { getByTestId } = render(component);

    const image = getByTestId("image");
    const text = getByTestId("text");
    const like = getByTestId("like-button");

    expect(image).toBeTruthy();
    expect(image.props.source).toBe(require("../../assets/images/favicon.png"));

    expect(text).toBeTruthy();
    expect(text.children[0]).toBe("Aegean");
    expect(text.props.style[0].color).toBe("#212227"); //light theme

    expect(like).toBeTruthy();
    fireEvent.press(like);
    expect(likeMock).toHaveBeenCalled();
  });
});
