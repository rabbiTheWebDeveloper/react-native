import { StatusBar } from 'expo-status-bar';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './component/Header';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
   const increment = () => {
     setCount(count + 5);
   }
  return (
    <View style={styles.container}>
      <View style={[styles.box1, styles.box]}/>
      <View style={[ styles.box, styles.box2]}/>
      <View style={[styles.box3, styles.box]}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    width: 200,
    height: 200,
    // backgroundColor: 'red',
    padding: 10,
    marginTop: 50,
    alignItems: 'center',

  },
  box : {
    width: 100,
    height: 200,
    marginBottom: 10,

  }, 
 box1:{
  backgroundColor: 'green',
 },
 box2:{
  backgroundColor: 'purple',
  width: 200,
 },  box3:{
  backgroundColor: 'yellow',
 }
});
