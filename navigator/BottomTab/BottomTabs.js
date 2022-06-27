import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import LoginScreen from '../../src/screen/LoginScreen';
import Signup from '../../src/screen/Signup';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <MaterialCommunity name="login" />,
        }}
      />
      <Tab.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
          tabBarIcon: () => <MaterialCommunity name="account-cancel" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
