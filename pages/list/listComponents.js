import React from 'react';
import { SafeAreaView, AsyncStorage, TouchableHighlight, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from '../../styles/styles';

class listComponents extends React.Component {
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
          <SafeAreaView style={{ flex: 6.7, backgroundColor: '#fff'}}>
            <View>
              <ScrollView>
          
                <Text >
                  hello
                </Text>
                <Text>
                  ciao
                </Text>
          
              </ScrollView>
            </View>
          </SafeAreaView>
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


  