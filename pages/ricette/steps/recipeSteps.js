import React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import json from '../../src/recipes/pasta_asciutta.json';
import json from '../../src/recipes/bistecca.json';

class recipeSteps extends React.Component {
  constructor (props)
  {
    super(props);
    var value = this.props.navigation.getParam('recipe',{ricetta : "ricetta"});
    this.state = {data : value, cont : 0, ricetta : ""};
  }

  static navigationOptions = ({navigation}) => {
    return{
    title : navigation.getParam('title', 'A Nested Details Screen'),
    }
  };
  
  _caricaRicetta = ()=> {
    //this.setState({ this.state.ricetta : "bistecca"})
    this.state.ricetta = 'pasta asciutta'
    console.warn('caricamento ricetta ' + this.state.ricetta);
  }

  componentDidMount() {
    /* this._caricaRicetta();
    if (this.state.ricetta == bistecca.title)
    this.setState({data : bistecca});
    else if (this.state.ricetta == pastaAsciutta.title)
    this.setState({data : pastaAsciutta})
    */
  }

  render() { 
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{this.state.data.steps[this.state.cont]}</Text>
        <Button onPress = {()=>{
          // this.setState(cont  cont + 1);
          if(this.state.cont < this.state.data.steps.length - 1)
          this.setState((state)=>
          {return {cont : state.cont+1}});
          // console.warn(this.state.data.steps.length);
          // console.warn(this.state.cont)
        }}
        title = 'Avanti' 
        />
          <Button onPress = {()=>{
            // this.setState(cont  cont + 1);
            if(this.state.cont > 0)
              this.setState((state)=>
              {return {cont : state.cont-1}});
              //console.warn(this.state.data.steps.length);
              //console.warn(this.state.cont)
            }}
          title = 'Indietro' 
          />
      </View>
    );
  }
}

export default recipeSteps;
  