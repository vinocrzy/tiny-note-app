import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { createAppContainer } from "react-navigation";
import { Provider } from 'react-redux'
import store from './src/redux/store';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/Screens/HomeScreen';
import { StyleSheet, Text, View } from 'react-native';
import HeaderNavigation from './src/Components/HeaderNavigation';
import AddNote from './src/Screens/AddNote';
import EditNote from './src/Screens/EditNote';


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      header: (<HeaderNavigation navigation={navigation} screen={'Home'} />)
    }),
  },
  AddNote: {
    screen: AddNote,
    navigationOptions: ({ navigation }) => ({
      header: (<HeaderNavigation navigation={navigation} screen={'AddNote'} />)
    }),
  },
  EditNote: {
    screen: EditNote,
    navigationOptions: ({ navigation }) => ({
      header: (<HeaderNavigation navigation={navigation} screen={'EditNote'} />)
    }),
  },
});




const AppContainer = createAppContainer(AppNavigator);


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
