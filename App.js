
import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
   const increment = () => {
     setCount(count + 5);
   }
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.box ,styles.box1]}/>
      <View style={[styles.box, styles.box2]}/>
      <View style={[styles.box, styles.box3]}/>
      <View style={[styles.box ,styles.box1 , { backgroundColor: 'red'}]}/>
      <View style={[styles.box, styles.box2]}/>
      <View style={[styles.box, styles.box3]}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    padding: 10,
    // justifyContent: 'center',
    flexDirection: 'row',
    // alignItems: 'flex-end',
    flexWrap: 'wrap',
  
  },
  box : {
    // width: 100,
    // height: 200,
    marginBottom: 10,

  }, 
 box1:{
  width: 100,
  height: 100,
  backgroundColor: 'green',
 },
 box2:{
  width: 100,
  height: 100,
  backgroundColor: 'purple',

 },  box3:{
  width: 100,
  height: 100,
  backgroundColor: 'yellow',
  alignSelf: 'flex-end',
  
 }
});
