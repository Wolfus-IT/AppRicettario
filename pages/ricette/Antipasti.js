import React, {Component} from 'react';
import {AppRegistry,StyleSheet,TouchableHighlight,Text,View, SafeAreaView, FlatList ,ImageBackground} from 'react-native';

class Antipasti extends React.Component {
  static navigationOptions = {
    title: 'Antipasti',
  };

  onPressButton = () => {
   
    this.props.navigation.navigate('Home')
  };

render(){

    return (
      <ImageBackground source={require('../../image/Antipasti.jpg')}
        style={{flex:1, height: undefined, width: undefined}}
        resizeMethod="auto">
          
        <View  style={styles.container1}>
          <View style={styles.container2}>

            <TouchableHighlight style={styles.buttonStyle2} onPress={this.onPressButton}>
              <View style={styles.ViewTesto}>
                <Text style={styles.textStyle}>Ricetta</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttonStyle2} onPress={this.onPressButton}>
              <View style={styles.ViewTesto}>
                <Text style={styles.textStyle}>Ricetta</Text>
              </View>
            </TouchableHighlight>

          </View>
          <View style={styles.container2}>

            <TouchableHighlight style={styles.buttonStyle2} onPress={this.onPressButton}>
              <View style={styles.ViewTesto}>
                <Text style={styles.textStyle}>Ricetta</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttonStyle2} onPress={this.onPressButton}>
              <View style={styles.ViewTesto}>
                <Text style={styles.textStyle}>Ricetta</Text>
              </View>
            </TouchableHighlight>

          </View>
        </View>

      </ImageBackground>
      )
    }
}

const styles = StyleSheet.create({
    buttonStyle2:{
      backgroundColor:'#f77213',
      margin:10,
      //borderWidth:1,
      borderRadius:10,
      padding:30,
      width: 150,
    },
    textStyle:{
      color:'white',
      fontSize: 20,
      fontWeight:'bold'
    },
    container1:{
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    container2:{
        flex:0.2,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    ViewTesto:{
        flex:1,
        justifyContent: 'center'
        ,alignItems: 'center'
    },
  });

export default Antipasti;