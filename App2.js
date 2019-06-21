import React,{Component} from 'react';
import {AppRegistry,StyleSheet,TouchableHighlight,Text,View,ImageBackground} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
export default class App extends React.Component{
  
  onPressLearnMore = () => {
    this.props.navigation.navigate('Home')  
} 
static navigationOptions = {
  title: 'Home',
};
render(){
return (
<ImageBackground  style = {{width: '100%', height: '100%'}} source = {{uri: 'https://facebook.github.io/react-native/img/opengraph.png'}}>
<View style={styles.container}>
  
  
  <ScrollView>
     


      <View style={styles.titleStyle}>

        <Text style={{color:'cornflowerblue',fontSize:45,fontWeight:'bold'}}>
          Catalogo 22
        </Text>

      </View>

      <View style={styles.container2}>

        <TouchableHighlight style={styles.buttonStyle2} onPress={this.onPressLearnMore}>
          <Text style={styles.textStyle}>Antipasto</Text>
        </TouchableHighlight>

      </View> 

      <View style={styles.container2}>

        <TouchableHighlight style={styles.buttonStyle2} onPress={this.onPressLearnMore}>
          <Text style={styles.textStyle}>Antipasto</Text>
        </TouchableHighlight>
        
      </View>

      <View style={styles.container2}>

        <TouchableHighlight style={styles.buttonStyle2} onPress={this.onPressLearnMore}>
          <Text style={styles.textStyle}>Antipasto</Text>
        </TouchableHighlight>

      </View>

      <View style={styles.container2}>

        <TouchableHighlight style={styles.buttonStyle2} onPress={this.onPressLearnMore}>
          <Text style={styles.textStyle}>Antipasto</Text>
        </TouchableHighlight>

      </View>

      <View style={styles.container2}>

        <TouchableHighlight style={styles.buttonStyle2} onPress={this.onPressLearnMore}>
          <Text style={styles.textStyle}>Antipasto</Text>
        </TouchableHighlight>

      </View> 

      <View style={styles.container2}>

        <TouchableHighlight style={styles.buttonStyle2} onPress={this.onPressLearnMore}>
          <Text style={styles.textStyle}>Antipasto</Text>
        </TouchableHighlight>

      </View>

      <View style={styles.container2}>

        <TouchableHighlight style={styles.buttonStyle2} onPress={this.onPressLearnMore}>
          <Text style={styles.textStyle}>Antipasto</Text>
        </TouchableHighlight>

      </View>

      <View style={styles.container2}>

        <TouchableHighlight style={styles.buttonStyle2} onPress={this.onPressLearnMore}>
          <View>
            <Text style={styles.textStyle}>Antipasto</Text>
          </View>
        </TouchableHighlight>

      </View>

       

  </ScrollView>
</View>
</ImageBackground>
);
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