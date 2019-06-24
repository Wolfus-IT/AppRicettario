import React,{Component} from 'react';
import { createDrawerNavigator, createStackNavigator, createAppContainer,DrawerItems } from "react-navigation";
import {StyleSheet,SafeAreaView,ScrollView,Image} from 'react-native';
import Home from './ScreenHome.js';

const MainNavigator = createStackNavigator({
    Home: {screen: Home},
  }) 

const MyDrawerNavigator = createDrawerNavigator({
    Impostazioni: MainNavigator,
    Contattaci: MainNavigator
  })
  
export default createAppContainer(MyDrawerNavigator);
