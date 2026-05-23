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
  Platform,
} from 'react-native';

export default function YourTurn(prop) {

  const [myGuess, setMyGuess] = useState('');
  const [judge, setJudge] = useState('');
  const [number, setNumber] = useState('');
  const [compChosen, setCompChosen] = useState(0);

  const [focused, setFocused] = useState(false);

  const [summary, setSummary] = useState({
    attempts: 0,
    found: false,
  });

  useEffect(() => {

    const chosen =
      Math.floor(Math.random() * 99) + 1;

    setCompChosen(chosen);

  }, []);

  function guide() {

    if (myGuess < compChosen) {
      return 'Try Higher ↑';
    }

    if (myGuess > compChosen) {
      return 'Try Lower ↓';
    }

    return 'Correct!';
  }

  function registerNumber() {

    if (number === '') return;

    Keyboard.dismiss();

    const parsed = Number(number);

    const currentAttempts =
      summary.attempts + 1;

    setMyGuess(parsed);

    setSummary({
      attempts: currentAttempts,
      found: parsed === compChosen,
    });

    if (parsed === compChosen) {

      if (currentAttempts < prop.compAttempts) {
        setJudge('WON');
      }
      else if (currentAttempts > prop.compAttempts) {
        setJudge('LOST');
      }
      else {
        setJudge('TIE');
      }
    }

    setNumber('');
  }

  function tryAgain() {
    prop.setChosen('');
  }

  return (

    <View style={styles.container}>

      <Modal
        visible={summary.found}
        transparent={true}
        animationType="fade"
      >

        <View style={styles.modalContainer}>

          <View style={styles.modalCard}>

            <Text style={styles.modalTitle}>
              {judge}
            </Text>

            <Text style={styles.modalSubtitle}>
              You guessed the number in{' '}
              {summary.attempts} attempts.
            </Text>

            <Text style={styles.modalSmall}>
              Computer attempts: {prop.compAttempts}
            </Text>

            <Pressable
              style={styles.button}
              onPress={tryAgain}
            >
              <Text style={styles.buttonText}>
                PLAY AGAIN
              </Text>
            </Pressable>

          </View>

        </View>

      </Modal>

      <View style={styles.card}>

        <Text style={styles.label}>

          {summary.attempts === 0
            ? 'Pick a Number'
            : guide()}

        </Text>

        {summary.attempts > 0 && (

          <Text style={styles.number}>
            {myGuess}
          </Text>

        )}

        <TextInput
          style={[
            styles.input,
            focused && styles.inputFocused,
          ]}

          keyboardType="number-pad"
          maxLength={2}

          value={number}
          onChangeText={setNumber}

          placeholder="?"
          placeholderTextColor="#64748b"

          returnKeyType="done"

          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}

          onSubmitEditing={registerNumber}
        />

        {Platform.OS === 'android' && (

          <Pressable
            style={styles.button}
            onPress={registerNumber}
          >
            <Text style={styles.buttonText}>
              SUBMIT
            </Text>
          </Pressable>

        )}

      </View>

      <StatusBar style="light" />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#111827',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },

  card: {
    width: '100%',

    backgroundColor: 'rgba(30,41,59,0.92)',

    borderRadius: 30,

    paddingVertical: 36,
    paddingHorizontal: 24,

    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#334155',

    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 10,
  },

  label: {
    color: '#cbd5e1',

    fontSize: 24,
    fontWeight: '600',

    marginBottom: 22,

    textAlign: 'center',
  },

  number: {
    fontSize: 58,
    fontWeight: 'bold',

    color: '#38bdf8',

    marginBottom: 26,
  },

  input: {
    width: 140,
    height: 84,

    backgroundColor: '#0f172a',

    borderWidth: 2,
    borderColor: '#334155',

    borderRadius: 24,

    color: 'white',

    fontSize: 42,
    fontWeight: 'bold',

    textAlign: 'center',

    marginBottom: 24,
  },

  inputFocused: {
    borderColor: '#38bdf8',

    shadowColor: '#38bdf8',
    shadowOpacity: 0.35,
    shadowRadius: 10,
  },

  button: {
    backgroundColor: '#38bdf8',

    paddingVertical: 16,
    paddingHorizontal: 34,

    borderRadius: 20,

    shadowColor: '#38bdf8',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 6,
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

    backgroundColor: 'rgba(2,6,23,0.84)',

    padding: 24,
  },

  modalCard: {
    width: '100%',

    backgroundColor: '#1e293b',

    borderRadius: 34,

    paddingVertical: 40,
    paddingHorizontal: 28,

    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#334155',
  },

  modalTitle: {
    fontSize: 44,
    fontWeight: '800',

    color: '#38bdf8',

    marginBottom: 14,
  },

  modalSubtitle: {
    fontSize: 22,

    color: 'white',

    textAlign: 'center',

    lineHeight: 32,

    marginBottom: 12,
  },

  modalSmall: {
    fontSize: 16,

    color: '#94a3b8',

    marginBottom: 30,
  },

});