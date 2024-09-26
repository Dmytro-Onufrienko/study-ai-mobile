import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Button, Input } from '@ant-design/react-native';
import { useRouter } from 'expo-router';
import { Routes } from '@constants/Routes';
import { useSignInMutation } from '@modules/auth/api';

export default function SignIn() {
  const router = useRouter();
  const { control, handleSubmit } = useForm();
  const [signUp, { data }] = useSignInMutation();

  const onSubmit = async (data: any) => {
    signUp(data);
    router.push(Routes.DASHBOARD)
  };

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Sign In</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Email"
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Password"
            secureTextEntry
          />
        )}
      />
      <Button type="primary" style={styles.button} onPress={handleSubmit(onSubmit)}>
        Sign In
      </Button>
      <Text>
        Don't hane an account?
        <Pressable onPress={() => router.push(Routes.SIGN_UP)}>
          <Text>Sign Up</Text>
      </Pressable>
      </Text>
    </View>
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
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#000',
    padding: 5
  }
})