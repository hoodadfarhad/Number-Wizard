import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
} from 'react-native';

export default function Guesser(prop) {

  const [guessed, setGuessed] = useState(0);
  const [rematch, setRematch] = useState(true);
  const [summary, setSummary] = useState({
    attempts: 1,
    found: false,
  });
 
  const [range, setRange] = useState({
    min: 1,
    max: 99,
  });

  useEffect(() => {

    const firstGuess =
      Math.floor(Math.random() * 99) + 1;
  
    setGuessed(firstGuess);
  
  }, [rematch]);

  function nextGuess(isHigher) {

    let newMin = range.min;
    let newMax = range.max;

    if (isHigher) {
      newMin = guessed + 1;
    } else {
      newMax = guessed - 1;
    }

    setRange({
      min: newMin,
      max: newMax,
    });

    const randomNum =
      Math.floor(Math.random() * (newMax - newMin + 1)) + newMin;

    setGuessed(randomNum);

    if (randomNum == prop.chosen) {
      console.log('Guessed correctly!');
    }

    setSummary((prev) => ({
        ...prev,
        attempts: prev.attempts + 1,
      }));
  }

  function checker() {
    if (guessed == prop.chosen) {
        setSummary((prev)=> ({...prev, found: true}))
    }
  }

  function tryAgain() {

    prop.setChosen('');

  }

  return (
    <View style={styles.container}>

        <Modal visible={summary.found} transparent={true}>
        <View style={styles.modalContainer}>
            <View style={styles.modalCard}>
            <Text style={styles.modalText}>
                Total # of attempts: {summary.attempts}
            </Text>

            <Pressable
          style={styles.button}
          onPress={tryAgain}
        >
          <Text style={styles.buttonText}>
          tryAgain
          </Text>
        </Pressable>
            </View>
        </View>
        </Modal>

      <Text style={styles.title}>
        Number Guesser
      </Text>

      <View style={styles.card}>

        <Text style={styles.label}>
          Your Number
        </Text>

        <Text style={styles.number}>
          {prop.chosen}
        </Text>

      </View>

      <View style={styles.card}>

        <Text style={styles.label}>
          Computer Guess
        </Text>

        <Text style={styles.guess}>
          {guessed}
        </Text>

      </View>

      <View style={styles.buttonContainer}>

        <Pressable
          style={styles.button}
          onPress={() => nextGuess(true)}
        >
          <Text style={styles.buttonText}>
            HIGHER
          </Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => nextGuess(false)}
        >
          <Text style={styles.buttonText}>
            LOWER
          </Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={checker}
        >
          <Text style={styles.buttonText}>
            Correct?
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
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },

  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 40,
  },

  card: {
    width: '100%',
    backgroundColor: '#1e1e1e',
    padding: 25,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },

  label: {
    color: '#bbbbbb',
    fontSize: 18,
    marginBottom: 10,
  },

  number: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#4fc3f7',
  },

  guess: {
    fontSize: 55,
    fontWeight: 'bold',
    color: '#81c784',
  },

  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 15,
  },

  button: {
    backgroundColor: '#4fc3f7',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 14,
  },

  buttonText: {
    color: '#121212',
    fontSize: 16,
    fontWeight: 'bold',
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  
  modalCard: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
  },
  
  modalText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },

});