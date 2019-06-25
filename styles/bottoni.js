import { StyleSheet } from 'react-native';
import { withOrientation } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },

  buttonStyle: {
    borderRadius: 15,
    backgroundColor: '#FFA500',
    alignItems: 'center',
  },

  text:{
    color: 'white',
    fontSize: 25,
    fontWeight:'bold',
  },

});


export { styles } 