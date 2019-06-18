import React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';

class RicetteScreen extends React.Component {
  static navigationOptions = {
    title: 'Ecco i passaggi...',
  };
  
    render() {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>RICETTA</Text>
        </View>
      );
    }
  }

  const iconStyle = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });

  export default RicetteScreen;
  