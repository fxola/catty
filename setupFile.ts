import mockAsyncStorage from "@react-native-async-storage/async-storage/jest/async-storage-mock";
import fetchMock from "jest-fetch-mock";
jest.mock("@react-native-async-storage/async-storage", () => mockAsyncStorage);
fetchMock.enableMocks();
//@ts-ignore
global.__reanimatedWorkletInit = () => {};
jest.mock("react-native-reanimated", () =>
  require("react-native-reanimated/mock")
);
jest.mock("redux-persist", () => {
  const real = jest.requireActual("redux-persist");
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");
