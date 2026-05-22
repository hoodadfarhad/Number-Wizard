import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
} from 'react-native';

import EnterPanel from './enterPanel';
import Guesser from './guesser';

export default function Game() {

  const [chosen, setChosen] = useState('');

  return (
    <SafeAreaView style={styles.safeContainer}>

      <StatusBar style="light" />

      <View style={styles.backgroundGlowTop} />
      <View style={styles.backgroundGlowBottom} />

      <View style={styles.container}>

        {chosen === ''
          ? <EnterPanel setChosen={setChosen} />
          : <Guesser chosen={chosen} setChosen={setChosen} />
        }

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  safeContainer: {
    flex: 1,
    backgroundColor: '#0f172a',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },

  backgroundGlowTop: {
    position: 'absolute',
    top: -120,
    right: -80,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: '#2563eb',
    opacity: 0.25,
  },

  backgroundGlowBottom: {
    position: 'absolute',
    bottom: -140,
    left: -100,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: '#7c3aed',
    opacity: 0.2,
  },

});