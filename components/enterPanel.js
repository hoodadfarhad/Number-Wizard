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

export default function EnterPanel(props) {

    const [number, setNumber] = useState('');

    function registerNumber() {
        props.setChosen(number);
    
        console.log(number);
    
        setNumber('');
      }

  return (
    <View style={styles.container}>

     
<Text style={styles.text}>
        Welcome to the app! Choose a Number between 1 - 99.
      </Text>

      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        maxLength={2}
        value={number}
        onChangeText={setNumber}
      />
      <Button title='register' onPress={registerNumber}></Button>

       
 

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