import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Bookmark, Home, Splash} from '../screens';

const Stack = createStackNavigator<RootStackParamList>();

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Bookmark" component={Bookmark} />
    </Stack.Navigator>
  );
};

export default Router;
