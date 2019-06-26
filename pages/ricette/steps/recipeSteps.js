import React from 'react';
import { Text, View, TouchableHighlight, Button, Image } from 'react-native';
import { styles } from '../../../styles/steps';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';
//import json from '../../src/recipes/pasta_asciutta.json';
//import json from '../../src/recipes/bistecca.json';

class recipeSteps extends React.Component {
  constructor (props)
  {
    super(props);
    var value = this.props.navigation.getParam('recipe',{ricetta : "ricetta"});
    this.state = {data : value, cont : 0, ricetta : "", text : "Avanti"};
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
        <SafeAreaView style={{paddingBottom: 107, paddingTop: 20}}>
          <ScrollView>
            <View style={{paddingHorizontal: 20}}>
              <Text style={styles.text}>{this.state.data.steps[this.state.cont]}</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
          <View style={{flex:1}}>
            <View style={{position:'absolute', bottom:0, flexDirection: 'row', alignSelf:'center'}}>
              <TouchableHighlight
                style={styles.buttonStyle}
                underlayColor='#e59400'
                onPress={() => {
                        // this.setState(cont  cont + 1);
                        if(this.state.cont > 0)
                        this.setState((state)=>
                          {return {cont : state.cont-1}});
                        if (this.state.cont == 0) 
                          {
                            this.props.navigation.goBack();
                          }
                        if (this.state.cont == this.state.data.steps.length -1) 
                          {
                            this.setState({text : 'Avanti'});
                          }
                          //console.warn(this.state.data.steps.length);
                          //console.warn(this.state.cont)
                        }}
              >
                <Text style={{color: 'white', fontWeight: 'bold'}}>Indietro</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={styles.buttonStyle}
                underlayColor='#e59400'
                onPress={() => {
                        // this.setState(cont  cont + 1);
                        if(this.state.cont < this.state.data.steps.length - 1)
                          this.setState((state)=>
                          {return {cont : state.cont+1}});
                        // console.warn(this.state.data.steps.length);
                        // console.warn(this.state.cont)
                        if (this.state.cont == this.state.data.steps.length -2) 
                          {
                            this.setState({text : 'Fine'});
                          }
                        if (this.state.cont == this.state.data.steps.length -1) 
                          {  
                            //console.warn('Fine');
                            this.props.navigation.navigate('Catalogo');
                          }
                        }}
                >
                <Text style={{color: 'white', fontWeight: 'bold'}}>{this.state.text}</Text>
              </TouchableHighlight>

                
            </View>
          </View>
          
      </View>
    );
  }
}

export default recipeSteps;
  