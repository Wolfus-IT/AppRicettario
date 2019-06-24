import React from 'react';
import { createDrawerNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from './pages/home/HomeScreen';
import Settings from './pages/home/Settings';
import Catalogo from './pages/ricette/Catalogo';
import ConcatUs from  './pages/home/contactUs';
import Antipasti from  './pages/ricette/Antipasti';
import Primi from  './pages/ricette/Primi';
import Secondi from  './pages/ricette/Secondi';
import Dolci from  './pages/ricette/Dolci';
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