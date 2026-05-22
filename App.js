import { useState } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
} from 'react-native';

import Welcome from './components/welcome';
import Game from './components/game';

export default function App() {

  const [started, setStarted] = useState(false);

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.backgroundGlowTop} />
      <View style={styles.backgroundGlowBottom} />

      {started
        ? <Game />
        : <Welcome clicked={setStarted} />
      }

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },

  backgroundGlowTop: {
    position: 'absolute',
    top: -120,
    right: -80,

    width: 260,
    height: 260,

    borderRadius: 130,

    backgroundColor: '#2563eb',
    opacity: 0.22,
  },

  backgroundGlowBottom: {
    position: 'absolute',
    bottom: -140,
    left: -100,

    width: 320,
    height: 320,

    borderRadius: 160,

    backgroundColor: '#7c3aed',
    opacity: 0.18,
  },

});