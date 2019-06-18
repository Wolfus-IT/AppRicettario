
 'use strict'

import React, {Component} from 'react';
import {Alert,Platform, StyleSheet, Text, View, Button,Image, FlatList, TextInput} from 'react-native';
import RNFS from 'react-native-fs';
import AsyncStorage from '@react-native-community/async-storage';
//var RNFS = require('react-native-fs');
type Props = {};



export default class AddRecipe extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  static navigationOptions = {
    title: 'Aggiungi una ricetta',
  };


  storeData = async (key) => {
 
    if (key == null)
    key = 'test';
    await AsyncStorage.setItem('@' + key, key)
    .then((success) =>{
      console.warn('file scritto');
    })
    .catch((error)=>{
      console.warn('file non scritto')  
    });
}
  getData = async () =>{
     var Value =  await AsyncStorage.getItem('@storage_Key')
    .then ((success)=> {
      if (Value != null)
        console.warn(Value);
      else
        console.warn('Trovato ma vuoto');
      return Value;
    })
    .catch((error)=>{
      console.warn('file non trovato');
      return 'error';
    });
  }
  getAllKeyys = async () => {
  let keys = []
  try {
    keys = await AsyncStorage.getAllKeys()
  } catch(e) {
    // read key error
  }

  console.warn(keys)
  // example console.log result:
  // ['@MyApp_user', '@MyApp_key']
}
  render() {
    
     let pikachu = {
      
         uri :'data:image/webp;base64,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'
    };
    return (
    <View style={styles.container}>
      <Text style={styles.welcome}>This is the recipe page </Text>
      <Text>  {this.state.text} </Text>  
      <TextInput placeholder = "Inserisci nome ricetta" 
        onChangeText={(text) => this.setState({text})}
        onSubmitEditing = {() =>{ this.storeData(this.state.text); console.warn(this.state.text);}}
      />
      <Image source={pikachu} style={{width: 225, height: 225, marginBottom:10}}/>
      <Button title="Salva" onPress= {() => {this.storeData(this.state.text);console.warn(this.state.text);}}></Button>
      <Button title="Cancella draft" onPress= {async() => {await AsyncStorage.clear()}}></Button>
      <Button title = "Visualizza ricette" onPress = {() => {this.getAllKeyys()}} > </Button>
    </View>

    ); // end return
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10, 
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

 // require the module


// get a list of files and directories in the main bundle

//hhh

 /* componentDidMount(){
RNFS.readDir(RNFS.DocumentDirectoryPath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
  .then((result) => {
    console.log('GOT RESULT', result);

    // stat the first file
  //  return Promise.all([RNFS.stat(result[0].path), result[0].path]);
  })
 .catch((err) => {
    console.warn(err.message, err.code);
  });
  var path = RNFS.DocumentDirectoryPath + '/test.txt';
  RNFS.writeFile(path, 'Sono un test', 'utf8' )
  .then((sucess)=> {console.warn('file scritto');})
  .catch((error)=> {console.warn('file non scritto');});

  RNFS.readDir(path) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
  .then((result) => {
    //console.log('GOT RESULT', result);

    // stat the first file
   return Promise.all([RNFS.stat(result[0].path), result[0].path]);
  })
  .then ((res)=>{
    if (res[0].isFIle()){
     return  RNFS.readFile(res[1], 'utf8');
    }
  })
  .then ((content)=> {
    console.warn(content);
  })
 .catch((err) => {
    console.warn(err.message, err.code);
  });

  }*/
