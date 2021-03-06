import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import screenone from "../screens/screenone";
import screentwo from "../screens/screentwo";
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator initialRouteName="One">
      <Tab.Screen
        name="One"
        component={screenone}
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <Icon name="home" size={30} color={color} />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Two"
        component={screentwo}
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <Icon name="user" size={30} color={color} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;
