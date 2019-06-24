import React, {Component} from 'react';
import {AppRegistry,StyleSheet,TouchableHighlight,Text,View, SafeAreaView, FlatList ,ImageBackground} from 'react-native';

class Antipasti extends React.Component {
  static navigationOptions = {
    title: 'Secondi',
  };

  onPressButton = () => {
   
    this.props.navigation.navigate('Home')
  };
  
  renderItem = (data) => {
    const {item}  = data;
    return (  

        <View style={{flex:1}}>

        <TouchableHighlight style={styles.buttonStyle2} onPress={this.onPressButton}>
          <Text style={styles.textStyle}>{item.title}</Text>
        </TouchableHighlight>

      </View> 
      )
}

render(){
    const data = [{title: 'Antipasti'},{title: 'Primi'}, {title: 'Secondi'}, {title: 'Dolci'},{title: 'test ciao'}, {title: ' ciao'}, {title: ' ciao'}]

    return (
      <ImageBackground source={require('../../image/catalogoIB.jpg')}
        style={{flex:1, height: undefined, width: undefined}}
        resizeMethod="auto">
          
        <FlatList data={data} renderItem={this.renderItem} />

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

export default Antipasti;