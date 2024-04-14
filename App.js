import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView  >
      <Text style={{color: 'red'}}>Open up App.js to start working on your app!</Text>
      <Text style={{color: 'white' ,backgroundColor:'red',  width: 200, height: 200, textAlign: 'center', fontSize: 80}}>Hello World</Text>
      <StatusBar style="auto" />
      <Image source={{uri: "https://reactnative.dev/docs/assets/p_cat2.png"}} style={{width: 300, height: 300}} />
      <Image source={{uri: "https://scontent.fjsr17-1.fna.fbcdn.net/v/t39.30808-6/435516938_1485945335655981_3391962969296622729_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF8dM6eub4h7X8jvsS9cMbkomPz1H5KBViiY_PUfkoFWA-FUR7Wx1c5XfC6Hf-roKx6pr1WGHtmAq-ZMDQvW3bM&_nc_ohc=eXl8_Z22RRYAb4AoYZ7&_nc_oc=AdivfuLeObfpRCaWj0aN8yQ038mbzOvsx0wxLGnlOEXLoWhPFx5Bh5dXv_ATx6IY3nc&_nc_ht=scontent.fjsr17-1.fna&oh=00_AfAuncxWfxubIrOiVOcdgP3b7DZfuBc6x4Ihd8k5IcKvag&oe=6621040E"}} style={{width: 300, height: 300}} />
      <Text style={{color: 'red'}}>Open up App.js to start working on your app!</Text>
      <Text style={{color: 'white' ,backgroundColor:'red',  width: 200, height: 200, textAlign: 'center', fontSize: 80}}>Hello World</Text>
      <StatusBar style="auto" />
      <Image source={{uri: "https://reactnative.dev/docs/assets/p_cat2.png"}} style={{width: 300, height: 300}} />
      <Image source={{uri: "https://scontent.fjsr17-1.fna.fbcdn.net/v/t39.30808-6/435516938_1485945335655981_3391962969296622729_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF8dM6eub4h7X8jvsS9cMbkomPz1H5KBViiY_PUfkoFWA-FUR7Wx1c5XfC6Hf-roKx6pr1WGHtmAq-ZMDQvW3bM&_nc_ohc=eXl8_Z22RRYAb4AoYZ7&_nc_oc=AdivfuLeObfpRCaWj0aN8yQ038mbzOvsx0wxLGnlOEXLoWhPFx5Bh5dXv_ATx6IY3nc&_nc_ht=scontent.fjsr17-1.fna&oh=00_AfAuncxWfxubIrOiVOcdgP3b7DZfuBc6x4Ihd8k5IcKvag&oe=6621040E"}} style={{width: 300, height: 300}} />
      <Text style={styles.text}>Footer</Text>
      </ScrollView>
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
