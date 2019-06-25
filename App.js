import React from 'react';
import { createDrawerNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

//pagine home
import HomeScreen from './pages/home/HomeScreen';
import Settings from './pages/home/Settings';
import Catalogo from './pages/ricette/Catalogo';
import ConcatUs from  './pages/home/contactUs';

//lista e steps
import listComponents from './pages/ricette/list/listComponents';
import recipeSteps from './pages/ricette/steps/recipeSteps';

//catalogo
import antipasti from './pages/ricette/antipasti/antipasti';
import primi from './pages/ricette/primi/primi';
import secondi from './pages/ricette/secondi/secondi';
import dolci from './pages/ricette/dolci/dolci';


const MyStackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Catalogo: {
    screen: Catalogo,
  },
  //componenti del catalogo
  Antipasti: {
    screen: antipasti,
  },
  Primi: {
    screen: primi,
  },
  Secondi: {
    screen: secondi,
  },
  Dolci: {
    screen: dolci,
  },
  //Variabili lista e steps
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