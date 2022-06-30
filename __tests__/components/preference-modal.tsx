import { fireEvent, render } from "@testing-library/react-native";
import { expect, it } from "@jest/globals";
import PreferenceModal from "@src/components/preference-modal";
import { Provider } from "react-redux";
import store from "@src/store";
import { darkTheme } from "@src/constants/theme";
import { ThemeProvider } from "@shopify/restyle";

describe("When the Modal Component renders", () => {
  const toggleModalMock = jest.fn();

  const ModalProps = {
    visible: true,
    toggleModal: toggleModalMock,
  };

  const component = (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <PreferenceModal {...ModalProps} />
      </ThemeProvider>
    </Provider>
  );

  it("renders the Modal contents Correctly", async () => {
    const { getByText, getByTestId } = render(component);
    const preferenceText = getByText("Preferences");
    const darkModeText = getByText("Dark Mode");
    const switchButton = getByTestId("switch");
    const horizontalLine = getByTestId("line");

    expect(preferenceText).toBeTruthy();
    expect(darkModeText).toBeTruthy();
    expect(switchButton).toBeTruthy();
    expect(horizontalLine).toBeTruthy();
  });

  it("Closes the Modal", async () => {
    const { getByTestId } = render(component);

    const overlay = getByTestId("overlay");
    fireEvent.press(overlay);
    expect(toggleModalMock).toHaveBeenCalled();
  });
});
