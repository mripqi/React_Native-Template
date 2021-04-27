import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../src/App/ui/screen/HomeScreen/Components/Home';
import LoginScreen from '../src/App/ui/screen/LoginScreen/Index';
import ProfileScreen from '../src/App/ui/screen/ProfileScreen/Components/Profile';

import HomeIcon from '../src/App/ui/assets/Home_Tab.svg';
import ProfileIcon from '../src/App/ui/assets/Profile_Tab.svg';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const MyHomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Home'}
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const MyBottomTabs = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name={'Main'}
        component={MyHomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <HomeIcon color={color} width={20} />,
        }}
      />
      <BottomTab.Screen
        name={'Profile'}
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => <ProfileIcon color={color} width={20} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Login'}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'Home'}
        component={MyBottomTabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
