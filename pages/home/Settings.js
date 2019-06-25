import React from 'react';
import { Text, View, StyleSheet, Button, Image,ImageBackground} from 'react-native';

class Settings extends React.Component {
  
  static navigationOptions = {
    title: 'Settings',
  };
  
    render() {
      return (  


        <ImageBackground source={require('../../image/impostazion.jpg')}
        style={{flex:1, height: undefined, width: undefined,resizeMode: 'contain'}}
        >
      <View style={styles.container}>
        
        
        <View style={styles.title}>
         <Text style={styles.title}>{'\n'}Settings</Text>   
        </View>
        
        <View style={styles.body}>
          <Text> Assistenza:    per problemi contattare '''''''''''</Text>
          <Text>Infrmazioni:    app sviluppata da .... con React Native</Text>
          
        </View>

      </View>
      </ImageBackground >
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column'
        
    },
    title: {
      flex: 1,
      alignItems:'center',
      fontSize: 30,
    },
    body:{
        flex:5,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        
    }
  });
  export default Settings;