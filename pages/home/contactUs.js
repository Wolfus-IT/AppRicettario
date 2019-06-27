import React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';

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
<View>
    <View >
        <Text style={styles.title}>Contact</Text>
    </View>
    
    <View  style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
       
          <Text>Addres</Text>
          <Text>Phone</Text>
          <Text>E-mail</Text>
          <Text>Website</Text>

    </View>
</View>
    
      );
    }
  }

  const styles = StyleSheet.create({
    title:{
        alignItems: 'center',
        fontSize: 50,
    },

    info:{
        flex:1 ,
        flexDirection: 'column',
        justifyContent: 'space-between',

    },
  });

  export default ContactUs;
  