import React,{Component} from 'react';
import { createDrawerNavigator, createStackNavigator, createAppContainer,DrawerItems } from "react-navigation";
import {StyleSheet,SafeAreaView,ScrollView,Image} from 'react-native';
import Home from './ScreenHome.js';
import App2 from './App2.js';
//import App3 from './App3.js';
const CustomDrawerComponent=(props)=>(
  <SafeAreaView style={{flex:1}}>
      <View style={{height:150,backgroundcolor:'white'}}>
      <Image source={require('C:\Users\Docebo_Guest1\Desktop\Projects\Prova2\images\Android.png')} style={{height:120,width:120,borderRadius:60}}/>
      </View>
      <ScrollView>
        <DrawerItems/>
      </ScrollView>
 </SafeAreaView>
)
const MainNavigator = createStackNavigator({
    Home: {screen: Home},
    App2: {screen: App2},
    //App3: {screen: App3},
  }, 
  {contentComponet:CustomDrawerComponent}
  );

  const MyDrawerNavigator = createDrawerNavigator({
    Impostazioni: MainNavigator,
    Contattaci: MainNavigator
  })
  
export default createAppContainer(MyDrawerNavigator);
