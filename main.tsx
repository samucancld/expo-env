import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";
import { Text } from "react-native";

const Stack = createNativeStackNavigator();

export const main = () => {
  const [fontsLoaded] = useFonts({
    FredokaRegular: require("./assets/fonts/FredokaRegular.ttf"),
  });

  return (
    fontsLoaded && (
      <Provider store={store}>
        <App />
      </Provider>
    )
  );
};

export default main;
