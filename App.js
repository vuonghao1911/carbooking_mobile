import LoginScreen from "./screen/login";
import SecondScreen from "./screen/home";
import QRScreen from "./screen/ScanQR";

import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Second"
          component={SecondScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="ScanQR"
          component={QRScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
