import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NationalParks = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>National Parks</Text>
      <Text style={styles.text}>Información sobre los parques nacionales.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default NationalParks;
