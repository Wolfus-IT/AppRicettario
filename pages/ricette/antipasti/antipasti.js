import React from 'react';
import { TouchableHighlight, Text, View, StyleSheet, Button, Image ,FlatList, List, ListItem} from 'react-native';
//import { styles } from '../../styles/styles';
//import json from '../../src/recipes/pasta_asciutta.json';
import rice from '../../../recipes/recipes.json'
import {AsyncStorage} from 'react-native';

class home extends React.Component {
  constructor(props){
    super(props);
    var NIET= 'suus';
    this.state = { data1: [{ key: 'muori'},{key:'DIo cane'}],
                    data: rice,  }; 
  }

  static navigationOptions = {
    title: 'Antipasti',
   
    headerRight: (
      <Image
        source={require('../../../image/iconaLogo.png')} style={{width: 70, height: 40,right:5}}/>
    ),
  };
  
  onPressButton = () => {
    this.props.navigation.navigate('List')
  }
  
  async  componentDidMount (){
  //console.warn('suus');
    for ( var i = 0; i <  this.state.data.recipes.length; i++)
    //console.warn(this.state.data.recipes[i].title);
    //if (this.state.data.recipes[i].type == 'Colazione' )
    {
    await AsyncStorage.setItem('@' + this.state.data.recipes[i].title,JSON.stringify(this.state.data.recipes[i]))
    //var value = await AsyncStorage.getItem ('@' + this.state.data.recipes[i].title)
    //console.warn (value)
    } 
  /*var pastaAlForno = 
    {
      "title":"Pasta al forno", "type":"Pranzo",
      "ingredients":
      [
        {"key" : "Pasta"},
        {"key" : "Pomodoro"},
        {"key" : "Mozzarella"}
      ],
      "steps" :
        [
        "Prepara la pasta",
        "Metti il pomodoro e la mozzarella",
        "Cucina"
      ]
    };
    console.warn(pastaAlForno.title);

    async () =>{await AsyncStorage.setItem('@' + pastaAlForno.title,JSON.stringify(pastaAlForno))}
    var valueee = {async suus() => {(return await AsyncStorage.getItem ('@' + pastaAlForno.title))}}

    console.warn (valueee);

    this.setState((state)=>{this.state.data.recipes.push(JSON.parse(valueee))});
    console.warn (this.state.data.recipes);
    //prendi tutte le chiavi
    */
  }
  
  render() {
    return (
      <View>
        <FlatList   //renderizza tutte le ricette contenute in '/assets/recipes.json' e crea chiavi corrispondenti
          extraData={this.state}
          keyExtractor = {(item)=> item.title}
          data = {this.state.data.recipes}
          renderItem = {({item})=> {
          if (item.type == 'Antipasti'){    //item.type == TIPO DI RICETTA
            return( 
              <Button  
                title=  {item.title} 
                onPress = {
                  async() => { var value = await AsyncStorage.getItem ('@' + item.title)
                  //console.warn (value);
                  this.props.navigation.navigate('List', {recipe : value, titlee : JSON.parse(value).title} )
                }
              }/>
            )
          }}}
        />
      </View>
    );
  }
}

export default home;
  