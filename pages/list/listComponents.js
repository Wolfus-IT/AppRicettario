import React from 'react';
import { SafeAreaView, AsyncStorage, TouchableHighlight, Text, View, FlatList, SectionList} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from '../../styles/styles';
import json from '../../src/recipes/pasta_asciutta.json';
import rice from '../../assets/recipes.json'
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
  
          {/*testo*/}
            <View>
          <SafeAreaView>
              {/*<ScrollView>*/}
              <ScrollView>
              <FlatList
                  data = {this.state.data1.ingredients}
                  extraData = {this.state}
                  renderItem ={ ({item}) =>
                     <Text> {item.key} </Text>
                 
                  }
                  
              >
                </FlatList>
       
                
               <Text> {this.state.data1.title} </Text>
                  </ScrollView>
            {/* </ScrollView>*/}
            </SafeAreaView>
            </View>
 
          
          {/*end_testo*/}
         
          {/*bottone*/}
          <View style={{flex:1}}>
            <View style={{position:'absolute',bottom:0,alignSelf:'center'}}>
              <TouchableHighlight
                  style={styles.buttonStyle}
                  underlayColor='#008ae6'
                  onPress={//this.onPressButton
                   () => {
                      this.props.navigation.navigate('Ricetta', {recipe : this.state.data1, title :this.state.data1.title});
                        }
                  }
                  >
                <Text style={{color: 'white', fontWeight: 'bold'}}>Start</Text>
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


  