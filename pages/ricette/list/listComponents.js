import React from 'react';
import { SafeAreaView, AsyncStorage, TouchableHighlight, Text, View, FlatList,ImageBackground} from 'react-native';
import { styles } from '../../../styles/lista.js';
import json from '../../../src/recipes/pasta_asciutta.json';
import { ScrollView } from 'react-native-gesture-handler';

class listComponents extends React.Component {
  constructor(props)
  {
    super(props);
    var rice = JSON.parse(this.props.navigation.getParam('recipe', 'Ricetta'))
    this.state ={ data : json, data1:rice};
    //console.warn(this.state.rice.title);
  }

  static navigationOptions = ({navigation}) => {
    return{ 
      headerStyle: {
        backgroundColor:'#ff8100',
      },
      headerTitleStyle:{
        color: 'white',
        //alignContent: 'center',
      },

    title : navigation.getParam('titlee', 'A Nested Details Screen'),
    }
  };

  onPressButton = () => {
    this.props.navigation.navigate('Ricetta')
  }
  
  render() {
    return ( 
      //external
      <View style={{flex:1}}>
        
        {/*lista*/}
        <View>
          <View>
            <Text style={{fontSize: 23, paddingLeft:15, paddingTop:10}}>Ingredienti:</Text>
          </View>
          <SafeAreaView style={{paddingBottom: 200}}>
            <View>
              <FlatList
                data = {this.state.data1.ingredients}
                style={{top:25}}
                extraData = {this.state}
                renderItem ={ ({item}) =>
                <View style={{paddingLeft:15}}>
                  <Text style={styles.text}> ◊ {item.key}</Text>
                </View>
                  }    
                >
              </FlatList>
            </View>
          </SafeAreaView>
        </View>
        
        {/*end_lista*/}
          
        {/*bottone*/}
        <View style={{flex:1}}>
          <View style={{position:'absolute', bottom:0, alignSelf:'center'}}>
            <TouchableHighlight
              style={styles.buttonStyle}
              underlayColor='#e59400'
              onPress={() => {
                      this.props.navigation.navigate('Ricetta', {recipe : this.state.data1, title :this.state.data1.title});
                      }
              }>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize:20}}>Start</Text>
            </TouchableHighlight>
          </View>
        </View>
        {/*end_bottone*/}
      </View>
     
      //end_external
    );
  }
}

export default listComponents;


  