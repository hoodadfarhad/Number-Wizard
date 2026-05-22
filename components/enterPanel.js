import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Keyboard
} from 'react-native';

export default function EnterPanel(props) {

  const [number, setNumber] = useState('');

  function registerNumber() {

    if (number === '') return;

    props.setChosen(number);

    setNumber('');
  }

  return (
    <View style={styles.container}>

      <View style={styles.card}>

        <Text style={styles.title}>
          Number Guessing Game
        </Text>

        <Text style={styles.subtitle}>
          Choose a number between 1 - 99
        </Text>

        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          maxLength={2}
          value={number}
          onChangeText={setNumber}
          placeholder="?"
          placeholderTextColor="#888"
          returnKeyType="done"
        onSubmitEditing={() => {
          Keyboard.dismiss();}}
        />

        <Pressable
          style={styles.button}
          onPress={registerNumber}
        >
          <Text style={styles.buttonText}>
            START GAME
          </Text>
        </Pressable>

      </View>

      <StatusBar style="light" />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },

  card: {
    width: '100%',
    backgroundColor: '#1e293b',
    padding: 30,
    borderRadius: 25,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 18,
    color: '#cbd5e1',
    marginBottom: 30,
    textAlign: 'center',
  },

  input: {
    width: 120,
    height: 70,

    borderWidth: 2,
    borderColor: '#38bdf8',

    borderRadius: 18,

    backgroundColor: '#0f172a',

    color: 'white',
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',

    marginBottom: 30,
  },

  button: {
    backgroundColor: '#38bdf8',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 16,
  },

  buttonText: {
    color: '#0f172a',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

});