import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import OnBoardingScreen from "./screens/OnBoardingScreen";
import { Provider } from "react-redux";
import store from "./context/store";
import ProductScreen from "./screens/ProductScreen";
import { BottomTab } from "./components/common";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer className="flex-1 items-center justify-center bg-white">
      <Provider store={store}>
        <Stack.Navigator
          initialRouteName="OnBoarding"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ProductScreen" component={ProductScreen} />
        </Stack.Navigator>
      </Provider>
      <BottomTab />
    </NavigationContainer>
  );
}
