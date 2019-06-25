import { StyleSheet } from 'react-native';
import { withOrientation } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },

  buttonStyle: {
    paddingLeft: 70,
    paddingRight: 70,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 15,
    backgroundColor: '#ff8100',
    alignItems: 'center',
  },

  text:{
    color: 'white',
    fontSize: 25,
    fontWeight:'bold',
  },

});


export { styles } 