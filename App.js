import LoginScreen from "./screen/login/login";
import SecondScreen from "./screen/home";
import QRScreen from "./screen/ScanQR";
import VeifyCode from "./screen/login/vetifyCode";
import Start from "./screen/login/start";
import InStart from "./screen/login/instart";
import InNumberPhone from "./screen/login/inNumberPhone";
import Register from "./screen/login/register";
import SearchRoute from "./screen/route/searchRoute";
import SelectChair from "./screen/route/selectChair";
import RouteDetails from "./screen/route/routeDetails";
import TicketInfo from "./screen/route/ticketInfo";
import IconOption from "./components/IconOption";
import TicketDetails from "./screen/route/ticketDetails";
import UpdateProfile from "./screen/updateProfile";
import ChangePass from "./screen/changePassWord";
import ForgotPass from "./screen/login/forgotPass";
import TicketRefundDetails from "./screen/route/ticketRefundDetails";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Provider from "./store/Provider";

const Stack = createNativeStackNavigator();

export default function App({}) {
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
            options={{
              title: "Tạo Tài Khoản",
              headerStyle: {
                backgroundColor: "#D86A23",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
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
          <Stack.Screen
            name="selectChair"
            component={SelectChair}
            options={{
              title: "Đặt Vé",
              headerStyle: {
                backgroundColor: "#D86A23",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="routeDetails"
            component={RouteDetails}
            options={{
              title: "Thông Tin Liên Lạc",
              headerStyle: {
                backgroundColor: "#D86A23",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="ticketInfo"
            component={TicketInfo}
            options={{
              title: "Thông Tin Vé",
              headerStyle: {
                backgroundColor: "#D86A23",
              },

              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="ticketDetails"
            component={TicketDetails}
            options={{
              title: "Thông Tin Vé",
              headerStyle: {
                backgroundColor: "#009387",
              },
              // headerRight: () => <IconOption />,

              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="ticketRefund"
            component={TicketRefundDetails}
            options={{
              title: "Thông Tin Vé Hủy",
              headerStyle: {
                backgroundColor: "#009387",
              },
              //  headerRight: () => <IconOption />,

              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />

          <Stack.Screen
            name="updateProfile"
            component={UpdateProfile}
            options={{
              title: "Cập nhật hồ sơ",
              headerStyle: {
                backgroundColor: "#694fad",
              },

              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />

          <Stack.Screen
            name="changePass"
            component={ChangePass}
            options={{
              title: "Đổi mật khẩu",
              headerStyle: {
                backgroundColor: "#694fad",
              },

              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="forgotPass"
            component={ForgotPass}
            options={{
              title: "Quên mật khẩu",
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
