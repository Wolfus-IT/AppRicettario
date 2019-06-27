import React from 'react';
import { Text, View, StyleSheet, Button, Image,ImageBackground} from 'react-native';

class Settings extends React.Component {
  
  static navigationOptions = {
    title: 'Settings',
  };
  
    render() {
      return (  


        <ImageBackground source={require('../../image/impostazion.jpg')}
        style={{flex:1, height: undefined, width: undefined,resizeMode: 'contain'}} >
      <View style={styles.container}>
        
        
        <View style={styles.title}>
         <Text style={styles.title}>{'\n'}Settings</Text>   
         <Image source={require('../../image/iconaLogo.png')} style={{ position:'absolute',width: 90, height: 40,top:20,alignSelf:'flex-end'}}/>
        </View>
        
        <View style={styles.body}>

          <Text> Assistenza:    per problemi contattare '''''''''''</Text>
          <Text> Informazioni:    app sviluppata da:{'\n'} Aleksandro Toderenchuk,{'\n'}Danilo Pinto,{'\n'}Riccardo Genova,{'\n'}Kevin Gordon con React Native</Text>
          
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