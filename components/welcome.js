import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';

export default function Welcome(props) {

  function startGame() {
    props.clicked(true);
  }

  return (
    <View style={styles.container}>

     
          <Text style={styles.text}>
            Welcome to the app! Wanna start the game?
          </Text>

          <Pressable onPress={startGame} style={styles.button}>
            <Text style={styles.buttonText}>
              Let's Go!
            </Text>
          </Pressable>
       
 

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  text: {
    fontSize: 22,
    textAlign: 'center',
    color: 'white',
    marginBottom: 20,
  },

  button: {
    backgroundColor: 'lightblue',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});