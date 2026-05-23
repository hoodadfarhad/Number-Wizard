import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
  TextInput,
  Keyboard,
} from 'react-native';

export default function YourTurn(prop) {

  const [myGuess, setMyGuess] = useState('');
  const [judge, setJudge] = useState('');
  const [number, setNumber] = useState('');
  const [compChosen, setCompChosen] = useState(0);

  const [summary, setSummary] = useState({
    attempts: 1,
    found: false,
  });

  useEffect(() => {

    const chosen =
      Math.floor(Math.random() * 99) + 1;

    setCompChosen(chosen);

  }, []);

  function guide() {

    if (myGuess < compChosen) {
      return 'Try Higher';
    }

    if (myGuess > compChosen) {
      return 'Try Lower';
    }

    return 'Correct!';
  }

  function registerNumber() {

    if (number === '') return;

    Keyboard.dismiss();

    setMyGuess(Number(number));

    setSummary((prev) => ({
      ...prev,
      attempts: prev.attempts + 1,
    }));

    if (Number(number) === compChosen) {

      setSummary((prev) => ({
        ...prev,
        found: true,
      }));

      if (summary.attempts < prop.compAttempts) {
        setJudge("WON")
      }
      if (summary.attempts > prop.compAttempts) {
        setJudge("LOST")
      }
      if (summary.attempts === prop.compAttempts) {
        setJudge("TIE")
      }
    }

    setNumber('');
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
              You won in {summary.attempts - 1} attempts! which means that you {judge} computer with {prop.compAttempts}
            </Text>

            <Pressable
              style={styles.button}
              onPress={tryAgain}
            >
              <Text style={styles.buttonText}>
                Try Again
              </Text>
            </Pressable>

          </View>

        </View>

      </Modal>

      <View style={styles.card}>

        <Text style={styles.label}>

          {summary.attempts === 1
            ? 'Pick a Number'
            : guide()}

        </Text>

        {summary.attempts > 1 && (

          <Text style={styles.number}>
            You Picked {myGuess}
          </Text>

        )}

        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          maxLength={2}
          value={number}
          onChangeText={setNumber}
          placeholder="?"
          placeholderTextColor="#888"
          returnKeyType="done"
          onSubmitEditing={registerNumber}
        />

        <Pressable
          style={styles.button}
          onPress={registerNumber}
        >
          <Text style={styles.buttonText}>
            Crush It!
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
  
      paddingVertical: 32,
      paddingHorizontal: 24,
  
      borderRadius: 28,
  
      alignItems: 'center',
  
      borderWidth: 1,
      borderColor: '#334155',
  
      shadowColor: '#000',
      shadowOpacity: 0.28,
      shadowRadius: 14,
      elevation: 10,
    },
  
    label: {
      color: '#cbd5e1',
      fontSize: 22,
      fontWeight: '600',
      marginBottom: 18,
      textAlign: 'center',
      letterSpacing: 0.5,
    },
  
    number: {
      fontSize: 48,
      fontWeight: 'bold',
      color: '#38bdf8',
      marginBottom: 24,
    },
  
    input: {
      width: 130,
      height: 78,
  
      borderWidth: 2,
      borderColor: '#38bdf8',
  
      borderRadius: 20,
  
      backgroundColor: '#0f172a',
  
      color: 'white',
  
      fontSize: 38,
      fontWeight: 'bold',
  
      textAlign: 'center',
  
      marginBottom: 30,
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
  
      paddingVertical: 16,
      paddingHorizontal: 30,
  
      borderRadius: 18,
  
      shadowColor: '#38bdf8',
      shadowOpacity: 0.25,
      shadowRadius: 8,
      elevation: 5,
    },
  
    buttonError: {
      backgroundColor: '#ef4444',
      shadowColor: '#ef4444',
    },
  
    buttonText: {
      color: '#0f172a',
  
      fontSize: 17,
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
  
      paddingVertical: 38,
      paddingHorizontal: 30,
  
      borderRadius: 30,
  
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
  
      marginBottom: 30,
    },
  
  });