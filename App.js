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
      <Header title="Hello Rabbi" />
      <Text style={styles.text}>{count}</Text>
      <Button title="Click me" onPress={() => alert('Hello')}  />
      <Button title="Click me" onPress={increment} />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
    backgroundColor: 'blue',
    fontSize: 30
  }
});
