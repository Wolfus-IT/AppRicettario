import React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';

class RicetteScreen extends React.Component {
  static navigationOptions = {
    title: 'Ricette',


    headerRight: (
      
      <Image
        source={require('../../image/iconaLogo.png')} style={{width: 100, height: 60,right:5}}/>),
  };
  
    render() {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>RICETTE</Text>
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
  