import React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import { createDrawerNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from './ui/list/listComponents'
import RicetteScreen from './ui/steps/recipeSteps'

const MyStackNavigator = createStackNavigator({
  List: {
    screen: HomeScreen,
  },
  Ricetta: {
    screen: RicetteScreen,
  },
});

const MyDrawerNavigator = createDrawerNavigator({
  Impostazioni: MyStackNavigator,
  Contattaci: MyStackNavigator
})

export default createAppContainer(MyDrawerNavigator);



