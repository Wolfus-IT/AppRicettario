import React,{Component} from 'react';
import {AppRegistry,StyleSheet,TouchableHighlight,Text,View, SafeAreaView, FlatList ,ImageBackground} from 'react-native';

export default class App extends React.Component{
static navigationOptions= {
  title: 'Home',
};


onPressLearnMore = () => {

    this.props.navigation.navigate('App2');  
}; 

renderItem = (data) => {
    const {item}  = data;
    //console.warn(JSON.stringify(item))
    return (  

        <View style={{flex:1}}>

        <TouchableHighlight style={styles.buttonStyle2} onPress={this.onPressLearnMore}>
          <Text style={styles.textStyle}>{item.title}</Text>
        </TouchableHighlight>

      </View> 
      )
}

render(){
    const data = [{title: 'Antipasti'},{title: 'Primi'}, {title: 'Secondi'}, {title: 'Dolci'},{title: 'test ciao'}, {title: ' ciao'}]

    return (
        <ImageBackground style = {{width: '100%', height: '100%'}} source = {{uri: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj21_f6kfriAhVFy6QKHaFBBB4QjRx6BAgBEAU&url=http%3A%2F%2Fimmagini.4ever.eu%2Fcibi-e-bevande%2Fhamburger-158973&psig=AOvVaw2Kg_v-aaWU7F8699YoZrpQ&ust=1561191216452454'}}>
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