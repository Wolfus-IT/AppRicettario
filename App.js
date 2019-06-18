import React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import { createDrawerNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from './ui/home/HomeScreen'
import RicetteScreen from './ui/ricette/RicetteScreen'

const MyStackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Ricette: {
    screen: RicetteScreen,
  },
});

const MyDrawerNavigator = createDrawerNavigator({
  Impostazioni: MyStackNavigator,
  Contattaci: MyStackNavigator
})

export default createAppContainer(MyDrawerNavigator);



