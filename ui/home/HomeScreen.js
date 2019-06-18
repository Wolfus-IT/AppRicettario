
import React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Lista',
  };

  onPressButton = () => {
    this.props.navigation.navigate('Ricette')
  }
  
    render() {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
         
          <Button onPress={this.onPressButton} title='ciao'/>
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

  export default HomeScreen;


  