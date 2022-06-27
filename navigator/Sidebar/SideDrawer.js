import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../../src/screen/Home';
import SettingScreen from '../../src/screen/SettingScreen';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import Logout from '../../src/screen/Logout';
const Drawer = createDrawerNavigator();

const SideDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: '#5352ed',
        drawerActiveTintColor: '#fff',
        drawerInactiveBackgroundColor: '#70a1ff',
        drawerInactiveTintColor: '#fff',
      }}>
      <Drawer.Screen
        name="Dashboard"
        component={Home}
        options={{
          drawerIcon: () => (
            <MaterialCommunity
              name="view-dashboard"
              size={20}
              color="#fff"
              style={{fontWeight: 'bold'}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          drawerIcon: () => (
            <MaterialCommunity
              name="cog-outline"
              size={20}
              color="#fff"
              style={{fontWeight: 'bold'}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          drawerIcon: () => (
            <MaterialCommunity
              name="cog-outline"
              size={20}
              color="#fff"
              style={{fontWeight: 'bold'}}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default SideDrawer;
