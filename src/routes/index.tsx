import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Booking, Bookmark, Home, Message, Profile, Splash} from '@screens';
import {Colors} from '@constants';
import {BottomTabBar} from '@components';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<BottomTabParamLst>();

const MainApp = () => {
  const renderBottomTabBar = (props: BottomTabBarProps) => {
    return <BottomTabBar {...props} />;
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      sceneContainerStyle={{backgroundColor: Colors.WHITE}}
      tabBar={renderBottomTabBar}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Booking" component={Booking} />
      <Tab.Screen name="Message" component={Message} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: Colors.WHITE,
        },
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="MainApp" component={MainApp} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Bookmark" component={Bookmark} />
    </Stack.Navigator>
  );
};

export default Router;
