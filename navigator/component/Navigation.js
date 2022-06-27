import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../../src/screen/WelcomeScreen';
import BottomTabs from '../BottomTab/BottomTabs';
import SideDrawer from '../Sidebar/SideDrawer';
import ForgetPassword from '../../src/screen/ForgetPassword';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Bottom"
          component={BottomTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={SideDrawer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Password"
          component={ForgetPassword}
          options={{title: 'Forget Password'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
