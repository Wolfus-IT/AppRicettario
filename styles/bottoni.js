import { StyleSheet } from 'react-native';
import { withOrientation } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },

  buttonStyle: {
    
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 17,
    borderColor: '#ff8100',
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