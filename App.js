import LoginScreen from "./screen/login/login";
import SecondScreen from "./screen/home";
import QRScreen from "./screen/ScanQR";
import VeifyCode from "./screen/login/vetifyCode";
import Start from "./screen/login/start";
import InStart from "./screen/login/instart";
import InNumberPhone from "./screen/login/inNumberPhone";
import Register from "./screen/login/register";
import SearchRoute from "./screen/route/searchRoute";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Provider from "../appchat_react/store/Provider";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Start"
            component={Start}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="InStart"
            component={InStart}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Second"
            component={SecondScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ScanQR"
            component={QRScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="VetifyCode"
            component={VeifyCode}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="inNumber"
            component={InNumberPhone}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SearchRoute"
            component={SearchRoute}
            options={{
              title: "Tìm Chuyến Xe",
              headerStyle: {
                backgroundColor: "#D86A23",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
