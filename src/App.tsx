import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './routes';
import {Provider} from 'react-redux';
import {store} from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView />
        <Router />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
