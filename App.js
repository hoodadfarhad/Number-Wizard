import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
} from 'react-native';
import Welcome from "./components/welcome";
import Game from "./components/game";

export default function App() {
  const [started, setStarted] = useState(false);



  return (
    <View style={styles.container}>
        {started? <Game />: <Welcome clicked={setStarted}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    padding: 12,
    backgroundColor: 'lightblue',
    borderRadius: 8,
    marginBottom: 20,
  },

  buttonText: {
    fontSize: 18,
  },


  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  modalBox: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 12,
  },

  closeText: {
    marginTop: 20,
    color: 'blue',
  },
});