import React from 'react';
import { createDrawerNavigator, createAppContainer, createStackNavigator,DrawerItems } from 'react-navigation';
import { Text, View, StyleSheet,ScrollView,SafeAreaView, Image } from 'react-native';
import HomeScreen from './pages/home/HomeScreen';
import Settings from './pages/home/Settings';
import Catalogo from './pages/ricette/Catalogo';
import ConcatUs from  './pages/home/contactUs';

import listComponents from './pages/ricette/list/listComponents';
import recipeSteps from './pages/ricette/steps/recipeSteps';
import home from './pages/ricette/home/home';

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always', horizontal: 'never' }}>
    <View style={{alignItems:'center',justifyContent: 'center',marginTop:50}}>
        <Image source={require('./image/home1.jpg')} style={{width: 100, height: 100,borderRadius:60}}/>
      
    </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);
const MyStackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Catalogo: {
    screen: Catalogo,
  },
  Homee: {
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
},
{
  contentComponent: CustomDrawerContentComponent
})

export default createAppContainer(MyDrawerNavigator);