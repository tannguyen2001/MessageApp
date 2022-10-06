/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Chat from './src/screens/Chat';
import ImageDetail from './src/screens/ImageDetail';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Messages"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="ImageDetail" component={ImageDetail} />
        <Stack.Screen name="Messages" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
