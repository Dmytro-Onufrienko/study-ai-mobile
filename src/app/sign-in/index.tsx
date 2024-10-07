import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { ActivityIndicator, Button, Input } from '@ant-design/react-native';
import { useRouter } from 'expo-router';
import { Routes } from '@constants/Routes';
import { useSignInMutation } from '@modules/auth/api';
import { storageService } from '@services/Storage';

export default function SignIn() {
  const router = useRouter();
  const { control, handleSubmit } = useForm();
  const [signIn, { isLoading, data, error }] = useSignInMutation();

  const onSubmit = async (data: any) => {
    try {
      console.log(data)
      const authTokens = await signIn(data).unwrap();
      console.log(authTokens)
  
      if (authTokens) {
        storageService.setTokens(authTokens)
        router.push(Routes.DASHBOARD)
      }
    } catch(e: any)  {
      console.log(e)
      console.log(error)
    }
  };

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
      {isLoading ? (<ActivityIndicator />) : (<Button type="primary" style={styles.button} onPress={handleSubmit(onSubmit)}>
        Sign In
      </Button>)}

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