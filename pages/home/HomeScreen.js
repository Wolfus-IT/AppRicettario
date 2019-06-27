
import React from 'react';
import { Text, Image, View, StyleSheet, TouchableHighlight, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => { 
    
    const onPress =  () => navigation.openDrawer();
    return  {
      title:'Home',

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
 
      headerLeft: (
      <TouchableOpacity onPress={onPress} > 
        <Image
          source={require('../../image/drawer.png')} style={{width: 30, height: 30,left:5}}
        />
      </TouchableOpacity>
    ),
  }
};

  onPressButton = () => {
   
    this.props.navigation.navigate('Catalogo')
  };

    render() {
      return (
        <ImageBackground source={require('../../image/home21.jpg')}
            style={{flex:1, height: undefined, width: undefined}} resizeMethod="auto"
        >     
        <View style={styles.home}>    
          <Image source={require('../../image/logo21.png')} style={{ position:'absolute',top:90,width: 200, height: 120}}/>

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
    color:'#4d4d4d',
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


  