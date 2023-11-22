import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Dashboard from "../screens/dashboard/dashboard";
import Colors from "../theme/colors";
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import ConnectDevice from "../screens/dashboard/connectDevice";
import Profile from "../screens/profile/profile";



const Tab = createMaterialBottomTabNavigator();

function BottomTab() {
  let { Navigator, Screen } = Tab;
  return (
    <Navigator
      activeColor={Colors.primary}
      inactiveColor={Colors.gray}
      barStyle={{ backgroundColor: Colors.black }}
      labeled={false}
    >
      <Screen
        name="home"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: ({ color,focused }: any) => (
            focused ?
              <Image source={require("../../assets/images/bottombar/ICON.png")} style={{ height: 30, width: 30 }} />
              :
              <Image source={require("../../assets/images/bottombar/home-in.png")} style={{ height: 20, width: 20 }} />
          ),
        } as never}
      />
      <Screen
        name="addDevice"
        component={ConnectDevice}
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                position: 'absolute',
                height: 40,
                width: 40,
                borderRadius: 68,
                // backgroundColor: 'blue', // your color
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image source={require("../../assets/images/bottombar/stream.png")} style={{ height: 35, width: 35 }} />
            </View>
          ),
        }}
      />
    
      <Screen
        name="profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }: any) => (
              <Image source={require("../../assets/images/bottombar/profile.png")} style={{ height: 20, width: 20 }} />
          ),
        } as never}
      />
     
    </Navigator>
  );
}


export default BottomTab;
