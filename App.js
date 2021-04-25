import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowView}>
        {/* <Text style={styles.text}></Text> */}
        <Text> ㅎㅇ</Text>
      </View>
      <View style={styles.blueView}>
        {/* <Text style={styles.text}></Text> */}
        <Text> ㅎㅇ</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
  },
  yellowView: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  blueView: {
    flex: 2,
    backgroundColor: 'blue',
  },
});
