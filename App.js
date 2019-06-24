import React from 'react';
import { createDrawerNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from './ui/home/HomeScreen';
import Settings from './ui/home/Settings';
import Catalogo from './ui/ricette/Catalogo';
import ConcatUs from  './ui/home/contactUs';
import Antipasti from  './ui/ricette/Antipasti';
import Primi from  './ui/ricette/Primi';
import Secondi from  './ui/ricette/Secondi';
import Dolci from  './ui/ricette/Dolci';
const MyStackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Catalogo: {
    screen: Catalogo,
  },
  Antipasti: {
    screen: Antipasti,
  },
  Primi: {
    screen: Primi,
  },
  Secondi: {
    screen: Secondi,
  },
  Dolci: {
    screen: Dolci,
  },
});



const MyDrawerNavigator = createDrawerNavigator({
  Home: MyStackNavigator,
  ConcatUs: { screen: ConcatUs },
  Settings: { screen: Settings }
})

export default createAppContainer(MyDrawerNavigator);