import React,{Component} from 'react';
import { createDrawerNavigator, createStackNavigator, createAppContainer,DrawerItems } from "react-navigation";
import {StyleSheet,SafeAreaView,ScrollView,Image} from 'react-native';
import Home from './ScreenHome.js';
import App2 from './App2.js';

const MainNavigator = createStackNavigator({
    Home: {screen: Home},
    App2: {screen: App2},
  }) 

const MyDrawerNavigator = createDrawerNavigator({
    Impostazioni: MainNavigator,
    Contattaci: MainNavigator
  })
  
export default createAppContainer(MyDrawerNavigator);
