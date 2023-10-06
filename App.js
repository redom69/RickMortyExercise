import React from 'react';
import { View, StyleSheet } from 'react-native';
import CharacterSearch from './CharacterSearch';

export default function App() {
  return (
    <View style={styles.container}>
      <CharacterSearch />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
