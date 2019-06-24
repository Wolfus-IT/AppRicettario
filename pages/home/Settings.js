import React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';

class Settings extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };
  
    render() {
      return (
      
        <View  style={styles.text}>
       
          <Text>Addres</Text>
          <Text>Phone</Text>
          <Text>E-mail</Text>
          <Text>Website</Text>

        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    title: {
     alignItems:'center',
     fontSize: 30,
    },
    text:{
         flex:0.5,
        flexDirection: 'column',
        justifyContent: 'space-between',
    }
  });
  export default Settings;