import React from 'react';
import { createDrawerNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from './pages/home/HomeScreen';
import Settings from './pages/home/Settings';
import Catalogo from './pages/ricette/Catalogo';
import ConcatUs from  './pages/home/contactUs';

import listComponents from './pages/ricette/list/listComponents';
import recipeSteps from './pages/ricette/steps/recipeSteps';
import home from './pages/ricette/home/home.js';


const MyStackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Catalogo: {
    screen: Catalogo,
  },
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
  Home: MyStackNavigator,
  ConcatUs: { screen: ConcatUs },
  Settings: { screen: Settings }
})

export default createAppContainer(MyDrawerNavigator);