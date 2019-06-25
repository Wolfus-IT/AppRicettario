import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';
import { createDrawerNavigator, createAppContainer, createStackNavigator, DrawerItems } from 'react-navigation';

//pagine home
import HomeScreen from './pages/home/HomeScreen';
import Settings from './pages/home/Settings';
import Catalogo from './pages/ricette/Catalogo';
import ContactUs from  './pages/home/contactUs';

//lista e steps
import listComponents from './pages/ricette/list/listComponents';
import recipeSteps from './pages/ricette/steps/recipeSteps';

//catalogo
import antipasti from './pages/ricette/antipasti/antipasti';
import primi from './pages/ricette/primi/primi';
import secondi from './pages/ricette/secondi/secondi';
import dolci from './pages/ricette/dolci/dolci';

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
  ContactUs: {
    screen: ContactUs,
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
  ContactUs: { screen: ContactUs },
  Settings: { screen: Settings }
},
{
  contentComponent: CustomDrawerContentComponent
})

export default createAppContainer(MyDrawerNavigator);
