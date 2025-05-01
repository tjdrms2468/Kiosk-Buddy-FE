import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// 기본 내보내기 (default export) 하나만 사용
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, Expo!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});
