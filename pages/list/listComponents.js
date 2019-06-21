import React from 'react';
import { SafeAreaView, AsyncStorage, TouchableHighlight, Text, View, FlatList, SectionList} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from '../../styles/styles';
import json from '../../src/recipes/pasta_asciutta.json';

class listComponents extends React.Component {
  constructor(props)
  {
    super(props);
    this.state ={ data : json};
  }
  static navigationOptions = {
    title: 'Lista',
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
                  data = {this.state.data.ingredients}
                  extraData = {this.state}
                  renderItem ={ ({item}) =>
                     <Text> {item} </Text>
                 
                  }
                  
              >
                </FlatList>
       
                <Text >
                  hello
                </Text>
                <Text>
                  ciao
                </Text>
              
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
                  onPress={this.onPressButton}>
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


  