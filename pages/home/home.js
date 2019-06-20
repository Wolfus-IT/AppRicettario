import React from 'react';
import { TouchableHighlight, Text, View, StyleSheet, Button, Image } from 'react-native';
import { styles } from '../../styles/styles';


class home extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  
  onPressButton = () => {
    this.props.navigation.navigate('List')
  }
    render() {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <TouchableHighlight
                style={styles.buttonStyle}
                underlayColor='#008ae6'
                onPress={this.onPressButton}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>Enter</Text>
            </TouchableHighlight>
        </View>
        );
    }
}

export default home;
  