import React, { Component } from 'react';
import { AppRegistry, Alert, Button, Text, View } from 'react-native';
import { styles } from './styles/styles.js'


export default class App extends Component{
   render(){
      return(
         <View style={styles.container}>
            <View>
               <Button onPress={() => {Alert.alert("Salve, lei ha premuto il bottone!")}}
               title="Questo è un bottone"
               color='green'
               borderRadius='10'
               >

               </Button>
            </View>   
         </View>
      )
   }
}
AppRegistry.registerComponent('AppRicettario', () => App);