import React from 'react';
import { Text, View, StyleSheet, Button, Image,ImageBackground} from 'react-native';

class Settings extends React.Component {
  
  static navigationOptions = {
    title: 'About',
  };
  
    render() {
      return (  


      <ImageBackground source={require('../../image/bg.jpg')} style={{flex:1, height: undefined, width: undefined}} resizeMethod="auto">
      <View style={styles.container}>
       
        
        <View style={styles.title}> 
         <Text style={[styles.title,styles.text]}>{'\n'}About</Text> 
       
           
         <Image source={require('../../image/iconaLogo.png')} style={{ position:'absolute',width: 90, height: 40,top:25,alignSelf:'flex-end'}}/>
        </View>
        
        <View style={styles.body}>
          <Text style={styles.text}> Informazioni:    app sviluppata da:{'\n'}Aleksandro Toderenchuk,{'\n'}Danilo Pinto,{'\n'}Riccardo Genova,{'\n'}Kevin Gordon con React Native</Text>
          <Text style={styles.text}> Linguaggio di programmazione: React Native{'\n'} con l'aiuto del Team Mobile</Text>
        </View>

      </View>
    </ImageBackground>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
   
    },
    title: {
     
      alignItems:'center',
      fontSize: 30,
      
    },
    body:{
        flex:0.8,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        
    },
  text:{
    color:'white'
  },
  });
  export default Settings;