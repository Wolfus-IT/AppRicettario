import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles/styles.js'

export default class App extends React.Component {
   render() {
      return (
         <View style={styles.container}>
            <Text>Welcome to Tutorialspoint</Text>
         </View>
      );
   }
}