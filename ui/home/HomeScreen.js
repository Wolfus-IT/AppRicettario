
import React from 'react';
import { Text, View, StyleSheet, Button, Image,TouchableHighlight,ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerActions } from 'react-navigation';
import { AuthSession } from 'expo';

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => { 
    
    

    const onPress =  () => navigation.openDrawer();
    return  {
     
      
      title: 'Home',

    
      headerLeft: (
        <TouchableOpacity onPress={onPress} > 
        <Image
          source={require('../../image/drawer.png')} style={{width: 30, height: 30}}/>
      </TouchableOpacity>
      ),
  }
};

  onPressButton = () => {
   
    this.props.navigation.navigate('Catalogo')
  };

    render() {
      return (
      
      
      <ImageBackground source={require('../../image/home1.jpg')}
          style={{flex:1, height: undefined, width: undefined}}
          resizeMethod="auto">
            
        <View style={styles.home}>    

          
        
            <Text style={styles.textHome}>Hi,welcome!</Text>
           
            <TouchableHighlight
              style={styles.bottonHome}
              onPress={this.onPressButton}
              underlayColor='blue'>
              <Text style={styles.textBotton}>Entra</Text>
            </TouchableHighlight>
            
          </View>
      
         
              </ImageBackground>
          
      );

    }
}

//<Button onPress={this.onPressButton} title='ciao'/>

const styles = StyleSheet.create({
  bottonHome: {
    alignItems: 'center',
    backgroundColor:'#00CDFF',
    justifyContent: 'center',
    borderRadius:15,
    paddingHorizontal:25,
    paddingVertical:10,
    
  },
  textBotton:{
    color:'white',
  },
  textHome:{
    flex:0,
    alignItems: 'center',
    color:'white',
  },
  home:{ 
    flex: 1,
    justifyContent: "center", 
    alignItems: "center",
    
  },
  headerButton: {
    height: 30,
    width: 30,
  },

});
  export default HomeScreen;


  