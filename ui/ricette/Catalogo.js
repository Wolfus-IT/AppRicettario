import React, {Component} from 'react';
import {AppRegistry,StyleSheet,TouchableHighlight,Text,View, SafeAreaView, FlatList ,ImageBackground} from 'react-native';

class RicetteScreen extends React.Component {
  static navigationOptions = {
    title: 'Catalogo',
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
          
        <View style={{flex:1}}>

          <TouchableHighlight style={styles.buttonStyle2} onPress={this.onPressButton1}>
            <Text style={styles.textStyle}>Antipasti</Text>
          </TouchableHighlight>

        </View>
        <View style={{flex:1}}>

          <TouchableHighlight style={styles.buttonStyle2} onPress={this.onPressButton2}>
            <Text style={styles.textStyle}>Primi</Text>
          </TouchableHighlight>

        </View>  
        <View style={{flex:1}}>

          <TouchableHighlight style={styles.buttonStyle2} onPress={this.onPressButton3}>
            <Text style={styles.textStyle}>Secondi</Text>
          </TouchableHighlight>

        </View> 
        <View style={{flex:1}}>

          <TouchableHighlight style={styles.buttonStyle2} onPress={this.onPressButton4}>
            <Text style={styles.textStyle}>Dolci</Text>
          </TouchableHighlight>

        </View> 
      </ImageBackground>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    flex: 0.2,
    flexDirection:'row',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  buttonStyle2:{
    backgroundColor:'cornflowerblue',
    margin:10,
    borderWidth:1,
    borderRadius:10,
    padding:30,
    width: 300,
  },
  textStyle:{
    color:'white',
    fontSize: 25,
    fontWeight:'bold'
  },
  titleStyle:{
    flex:0.2,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default RicetteScreen;
