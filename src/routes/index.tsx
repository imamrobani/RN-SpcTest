import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Bookmark, Home, Splash} from '../screens';
import {Colors} from '../constants';

const Stack = createStackNavigator<RootStackParamList>();

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
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Bookmark" component={Bookmark} />
    </Stack.Navigator>
  );
};

export default Router;
