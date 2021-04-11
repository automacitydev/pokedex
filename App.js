/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// React modules
import React from 'react';
import { LogBox } from 'react-native';

// Third party libraries
import { ThemeProvider } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider, } from "react-redux";

// Redux
import { store } from './src/redux/index';

// Screens
import ListDetailsScreen from './src/screens/ListDetailsScreen'
import ListScreen from './src/screens/ListScreen'

const Stack = createStackNavigator();
const App = () => {
  const screenOptions = {
    title: 'POKEDEX',
    headerStyle: {
      backgroundColor: 'rgba(255, 61, 51, 0.9)',
    },
    headerTintColor: '#fcf8e8',
    headerTitleStyle: {
      fontWeight: 'bold',
      alignSelf: 'center',
      letterSpacing: 4,
    },
    headerTitleContainerStyle: {
      left: 16,
    },
  }

  LogBox.ignoreAllLogs();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <ThemeProvider>
          <Stack.Navigator initialRouteName="ListScreen">
            <Stack.Screen
              name="ListScreen"
              component={ListScreen}
              options={screenOptions}
            />

            <Stack.Screen
              name="ListDetailsScreen"
              component={ListDetailsScreen}
              options={screenOptions}
            />
          </Stack.Navigator>
        </ThemeProvider>
      </NavigationContainer>
    </Provider>

  )
}

export default App;
