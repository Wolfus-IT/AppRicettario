import React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import { createDrawerNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from './ui/home/HomeScreen';
import Settings from './ui/home/Settings';
import RicetteScreen from './ui/ricette/RicetteScreen';
import ConcatUs from  './ui/home/contactUs';

const MyStackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Ricette: {
    screen: RicetteScreen,
  },
});



const MyDrawerNavigator = createDrawerNavigator({
  Home: MyStackNavigator,
  ConcatUs: { screen: ConcatUs },
  Settings: { screen: Settings }
})

export default createAppContainer(MyDrawerNavigator);