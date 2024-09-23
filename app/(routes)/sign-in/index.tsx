import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Button, Input } from '@ant-design/react-native';
import { useRouter } from 'expo-router';

export default function SignIn() {
  const router = useRouter();
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Sign In</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Email"
            style={{ marginBottom: 16 }}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Password"
            secureTextEntry
            style={{ marginBottom: 16 }}
          />
        )}
      />
      <Button type="primary" style={styles.button} onPress={handleSubmit(onSubmit)}>
        Sign In
      </Button>
      <Text>
        Don't hane an account?
        <Pressable onPress={() => router.push('/sign-up')}>
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
  }
})