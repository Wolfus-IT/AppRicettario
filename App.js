import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from './styles/styles.js'


const App = () => {
  const handlePress = () => false
  return (
     <view style={styles.container}>
     <Button
        onPress = {handlePress}
        title = "Red button!"
        color = "red" 
     />
     </view>
  );
}
export default App