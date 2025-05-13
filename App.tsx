import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigation/Stack';
import {navigationRef} from './src/RootNavigation';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
  },
};
export default function App() {
  return (
    <NavigationContainer theme={MyTheme} ref={navigationRef}>
      <StackNavigator />
    </NavigationContainer>
  );
}
