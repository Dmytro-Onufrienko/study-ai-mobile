import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CustomHeader() {
  return (
    <>
      <View style={styles.header}>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  },
});
