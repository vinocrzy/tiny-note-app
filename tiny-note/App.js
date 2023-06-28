import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { createAppContainer } from "react-navigation";
import { Provider } from 'react-redux'
import store from './src/redux/store';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import HomeScreen from './src/Screens/HomeScreen';
import { StyleSheet, Text, View } from 'react-native';
import DrawerNavigation from './src/Components/DrawerNavigation';
import HeaderNavigation from './src/Components/HeaderNavigation';


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      header: (<HeaderNavigation navigation={navigation} screen={'Home'} />)
    }),
  },

});

const MyDrawer = createDrawerNavigator(
  {
    Home: {
      screen: AppNavigator,
    }
  },
  {
    contentComponent: DrawerNavigation,
    drawerWidth: 235
  }
);


const AppContainer = createAppContainer(MyDrawer);


export default function App() {
  return (

    <Provider store={store}>
      <AppContainer />
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
