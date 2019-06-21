import React from 'react';
import { TouchableHighlight, Text, View, StyleSheet, Button, Image ,FlatList, List, ListItem} from 'react-native';
import { styles } from '../../styles/styles';
import json from '../../src/recipes/pasta_asciutta.json';


class home extends React.Component {
  constructor(props){
    super(props);
    var NIET= 'suus';
    this.state = { data1: [{ key: 'muori'},{key:'DIo cane'}],
                    data: json,  }; 
  }
  static navigationOptions = {
    title: 'Home',
  };
  
  onPressButton = () => {
    this.props.navigation.navigate('List')
  }
    render() {
      return (
        <View >

            <FlatList
            extraData={this.state}
            //keyExtractor = {()=>{}}
            data = {this.state.data.steps}
            renderItem = {({item})=> 
            <Text> {item} </Text> 
            }
            />
            <FlatList
  data={[{key: 'a'}, {key: 'b'}]}
  renderItem={({item}) => <Text>{item.key}</Text>}
/>
    <Text>{this.state.data1[0].key}</Text>
    <Button title = "suus"  onPress = {() => {this.onPressButton()}}/>
        </View>
        );
    }
}

export default home;
  