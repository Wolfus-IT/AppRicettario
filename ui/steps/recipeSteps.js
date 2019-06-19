import React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';

class recipeSteps extends React.Component {
  static navigationOptions = {
    title: 'Ecco i passaggi da seguire...',
  };
  
    render() {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>RICETTA</Text>
        </View>
      );
    }
  }

export default recipeSteps;
  