import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '@ant-design/react-native';
import { useRouter } from '@modules/common/hooks';
import { NoAuthProvider } from '@modules/auth/providers';
import { Routes } from '@config/Routes';

export default function Homepage() {
  const router = useRouter();

  return (
    <NoAuthProvider>
      <View style={styles.container}>
        <Text style={{ fontSize: 24, marginBottom: 16 }}>Welcome</Text>
        <Button type="primary" style={styles.button} onPress={() => router.push(Routes.SIGN_IN)}>
          Sign In
        </Button>
        <Button type="primary" style={styles.button} onPress={() => router.push(Routes.SIGN_UP)}>
          Sign Up
        </Button>
      </View>
    </NoAuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  },
  button: {
    width: 100
  }
})