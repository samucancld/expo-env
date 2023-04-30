import Login from "./pages/Login";
import Home from "./pages/Home";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { isLoggedInSelector } from "./redux/selectors/authSelectors";

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  const [fontsLoaded] = useFonts({
    FredokaRegular: require("./assets/fonts/FredokaRegular.ttf"),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerTitleStyle: {
            fontFamily: "FredokaRegular",
            fontSize: 20,
          },
          headerTitleAlign: "center",
          contentStyle: {
            backgroundColor: "#fff",
          },
        }}
      >
        {isLoggedIn ? (
          <Stack.Screen name="Home" component={Home} />
        ) : (
          <Stack.Screen name="Login Page" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
