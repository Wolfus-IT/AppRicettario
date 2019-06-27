import React, {Component} from 'react';
import {AppRegistry,StyleSheet,TouchableHighlight,Text,View, SafeAreaView, FlatList ,ImageBackground,Image} from 'react-native';

class RicetteScreen extends React.Component {
  static navigationOptions = ({ navigation }) => { 
    
    const onPress =  () => navigation.openDrawer();
    return  {
      title:'Catalogo',

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
    headerRight: (
      
      <Image
        source={require('../../image/iconaLogo.png')} style={{width: 70, height: 40,right:5}}/>
    
    ),
  };
  };

   onPressButton1 = () => {
   
    this.props.navigation.navigate('Antipasti')
  };
  onPressButton2 = () => {
   
    this.props.navigation.navigate('Primi')
  };
  onPressButton3 = () => {
   
    this.props.navigation.navigate('Secondi')
  };
  onPressButton4 = () => {
   
    this.props.navigation.navigate('Dolci')
  };
  
  
render(){
    

    return (
      <ImageBackground source={require('../../image/catalogoIB.jpg')}
        style={{flex:1, height: undefined, width: undefined}}
        resizeMethod="auto">
          
        <View style={styles.ViewBotton}>
        <Text>{'\n'}</Text>
          <TouchableHighlight style={styles.buttonStyle2} onPress={this.onPressButton1} underlayColor='#e59400'>
            <View style={styles.ViewTesto}>
              <Text style={styles.textStyle}>Antipasti</Text>
            </View>
          </TouchableHighlight>

       
        

          <TouchableHighlight style={styles.buttonStyle2} onPress={this.onPressButton2} underlayColor='#e59400'>
            <View style={styles.ViewTesto}>
              <Text style={styles.textStyle}>Primi</Text>
            </View>
          </TouchableHighlight>

       
       

          <TouchableHighlight style={styles.buttonStyle2} onPress={this.onPressButton3} underlayColor='#e59400'>
            <View style={styles.ViewTesto}>
              <Text style={styles.textStyle}>Secondi</Text>
            </View>
          </TouchableHighlight>

        

          <TouchableHighlight style={styles.buttonStyle2} onPress={this.onPressButton4} underlayColor='#e59400'>
            <View style={styles.ViewTesto}>
            
              <Text style={styles.textStyle}>Dolci</Text>
            </View>
          </TouchableHighlight>

        </View> 
      </ImageBackground>
      )
    }
}

const styles = StyleSheet.create({

  buttonStyle2:{
    backgroundColor:'#ff8100',
    
    borderRadius: 10,
    padding: 30,
    width: 200,
  },
  textStyle:{
    color:'white',
    fontSize: 25,
    fontWeight:'bold',
  },
  ViewTesto:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ViewBotton:{
    flex:0.8,
    justifyContent: 'space-around',
    alignItems: 'center'

  }
});

export default RicetteScreen;
