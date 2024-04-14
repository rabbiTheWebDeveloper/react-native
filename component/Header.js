import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Header({title}) {
  return (
    <View>
      <Text style={{color: 'red', fontSize: 30}}>{title}!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'red',
    backgroundColor: 'blue',
    fontSize: 30
  }
});
