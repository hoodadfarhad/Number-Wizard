import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Button,
} from 'react-native';

import EnterPanel from "./enterPanel";
import Guesser from "./guesser";

export default function Game(props) {

  
    const [chosen, setChosen] = useState('');


  return (
    <>
    {chosen==''? <EnterPanel setChosen={setChosen} /> : <Guesser chosen={chosen} />}
    </>
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
    marginBottom: 20,
  },


  input: {
    borderWidth: 2,
    borderColor: 'black',
    width: 100,
    fontSize: 30,
    textAlign: 'center',
    padding: 10,
    borderRadius: 10,
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