import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import { createDrawerNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import listComponents from './pages/list/listComponents'
import recipeSteps from './pages/steps/recipeSteps'
import home from './pages/home/home'

const MyStackNavigator = createStackNavigator({
  Home: {
    screen: home,
  },
  List: {
    screen: listComponents,
  },
  Ricetta: {
    screen: recipeSteps,
  },

});

const MyDrawerNavigator = createDrawerNavigator({
  Impostazioni: MyStackNavigator,
  Contattaci: MyStackNavigator
})

export default createAppContainer(MyDrawerNavigator);



