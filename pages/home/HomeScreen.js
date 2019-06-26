
import React from 'react';
import { Text, View, StyleSheet, Button, Image,TouchableHighlight,ImageBackground,Font } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerActions } from 'react-navigation';
import { AuthSession } from 'expo';

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => { 
    
    

    const onPress =  () => navigation.openDrawer();
    return  {
      title:'                Home',
 
      headerLeft: (
        <TouchableOpacity onPress={onPress} > 
        <Image
          source={require('../../image/drawer.png')} style={{width: 30, height: 30,left:5}}/>
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
          style={{flex:1, height: undefined, width: undefined}} resizeMethod="auto">
            
        <View style={styles.home}>    
          <Image source={require('../../image/logo21.png')} style={{ position:'absolute',top:20,width: 200, height: 120}}/>

            <Text style={styles.textHome}>Hi,welcome!</Text>
           
            <TouchableHighlight
              style={styles.bottonHome}
              onPress={this.onPressButton}
              underlayColor='#e59400'>
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
    backgroundColor:'#ff8100',
    justifyContent: 'center',
    borderRadius:15,
    paddingHorizontal:30,
    paddingVertical:15,
    
    
  },
  textBotton:{
    color:'white',
    fontFamily: 'notoserif', 
    fontWeight: 'bold',
    fontSize:18,
  },
  textHome:{
    flex:0.10,
    alignItems: 'center',
    color:'white',
    fontFamily: 'notoserif', 
    fontSize:25,
  },
  home:{ 
    flex:1,
    justifyContent: "center", 
    alignItems: "center",
  },

});
  export default HomeScreen;


  