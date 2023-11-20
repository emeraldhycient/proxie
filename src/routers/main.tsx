import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./BottomTab";
import AuthStack from "./Auth";
import ConnectDevice from "../screens/dashboard/connectDevice";

function MainStack() {

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="application"
>
      <Stack.Screen
        name="auth"
        component={AuthStack}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="application"
        component={BottomTab}
        options={{
          headerShown: false,
        }}
      />
     
      <Stack.Screen
        name="connectDevice"
        component={ConnectDevice}
        options={{
          headerShown: false,
        }}
      />
     
    </Stack.Navigator>
  );
}

export default MainStack;
