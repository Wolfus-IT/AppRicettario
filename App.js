import React, { Component } from 'react';
import { AppRegistry, Alert, TouchableHighlight, Text, View } from 'react-native';
import { styles } from './styles/styles.js'


export default class App extends Component{
   render(){
      return(
         <View style={styles.container}>
            <TouchableHighlight
               style={styles.submit}
               onPress={() => this.submitSuggestion(this.props)}
               underlayColor='blue'>
               <Text style={[styles.submitText]}>Button</Text>
            </TouchableHighlight>
         </View>
      )
   }


   submitSuggestion(){
      Alert.alert("This is a button")
   }
}
AppRegistry.registerComponent('AppRicettario', () => App);