import React from 'react';
import { Text, View, StyleSheet, Button, Image,ImageBackground} from 'react-native';
import { Linking } from 'expo';

class ContactUs extends React.Component {
  static navigationOptions = ({ navigation }) => { 
    
    const onPress =  () => navigation.openDrawer();
    return  {
      title:'Contattaci',

      headerStyle: {
        backgroundColor:'#ff8100',
      },

      headerTintColor:{
        color:'white',
      },

      headerTitleStyle:{
        color: 'white',
        //alignContent: 'center',
      },
    };
  };
  
  render() {
    return (  


     
    <View style={styles.container}>
     
      
      <View style={styles.title}> 
       <Text style={[styles.title,styles.text]}>{'\n'}Contact Us</Text> 
      <ImageBackground source={require('../../image/fiamma.png')}style={{ height: 70, width: 70,alignItems:'center',justifyContent: 'center',top:200}}/>
         
       <Image source={require('../../image/iconaLogo.png')} style={{ position:'absolute',width: 90, height: 40,top:20,alignSelf:'flex-end'}}/>
      </View>
      
      <View style={styles.body}>
        <Text style={styles.text} > Adress: Via Giacomo Leopardi, 132, 20099 Sesto San Giovanni MI</Text>
        <Text style={styles.text}> E-mail: iisaltierospinelli@gmail.com</Text>
        <Text style={styles.text}> Phone: +39 02 240 3441</Text>
        <Text style={[styles.text]} onPress={()=>Linking.openURL('http://opm100yen.altervista.org/')}> WebSite:One punch Man</Text>
        <Text style={styles.text} onPress={()=>Linking.openURL('http://byteitaly.altervista.org/')}>WebSite2: Sito scuola </Text>
      </View>

    </View>
  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor:'blue'
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

  color:'white',
  
},

});

  export default ContactUs;
  