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

  useEffect(() => {
   
        if (guessed == prop.chosen) {
            setSummary((prev)=> ({...prev, found: true}))
        }

  }, [guessed]);
 

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


      </View>

      <StatusBar style="light" />

    </View>
  );
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#0f172a',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 24,
    },
  
    title: {
      fontSize: 36,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 35,
      letterSpacing: 1,
    },
  
    card: {
      width: '100%',
      backgroundColor: '#1e293b',
  
      paddingVertical: 28,
      paddingHorizontal: 20,
  
      borderRadius: 24,
  
      alignItems: 'center',
  
      marginBottom: 22,
  
      shadowColor: '#000',
      shadowOpacity: 0.25,
      shadowRadius: 12,
      elevation: 8,
    },
  
    label: {
      color: '#cbd5e1',
      fontSize: 18,
      marginBottom: 12,
      letterSpacing: 0.5,
    },
  
    number: {
      fontSize: 46,
      fontWeight: 'bold',
      color: '#38bdf8',
    },
  
    guess: {
      fontSize: 60,
      fontWeight: 'bold',
      color: '#818cf8',
    },
  
    buttonContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: 25,
      gap: 14,
    },
  
    button: {
      backgroundColor: '#38bdf8',
  
      paddingVertical: 15,
      paddingHorizontal: 26,
  
      borderRadius: 16,
  
      shadowColor: '#38bdf8',
      shadowOpacity: 0.25,
      shadowRadius: 8,
      elevation: 5,
    },
  
    buttonText: {
      color: '#0f172a',
      fontSize: 16,
      fontWeight: 'bold',
      letterSpacing: 1,
    },
  
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(2,6,23,0.82)',
      padding: 24,
    },
  
    modalCard: {
      width: '100%',
  
      backgroundColor: '#1e293b',
  
      paddingVertical: 35,
      paddingHorizontal: 28,
  
      borderRadius: 28,
  
      alignItems: 'center',
  
      borderWidth: 1,
      borderColor: '#334155',
  
      shadowColor: '#000',
      shadowOpacity: 0.35,
      shadowRadius: 14,
      elevation: 10,
    },
  
    modalText: {
      fontSize: 28,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      marginBottom: 28,
    },
  
  });