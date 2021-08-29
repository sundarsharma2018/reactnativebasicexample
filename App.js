import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Johan');
  const onPressTitle = () => {
    setName("Bird's Nest [pressed]");
  };

  return (
    <View style={styles.container}>
          <StatusBar style="auto" />
      <Text>Hello { name }</Text>

      <Button
        onPress = { onPressTitle }
        title='Click me'
        style= {styles.nameText}
        color='#000'>
      </Button>

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

  nameText: {
    fontSize: 50,
    padding: 105,
  }
});
