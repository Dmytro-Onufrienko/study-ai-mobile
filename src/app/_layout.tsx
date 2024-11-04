import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import 'react-native-reanimated';
import { setupStore } from 'store';
import CustomHeader from '@modules/common/components/customHeader';
import { Provider as AntDesignProvider } from '@ant-design/react-native'

const store = setupStore();


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <AntDesignProvider>
        <ReduxProvider store={store}>
          <Stack
            screenOptions={{
              header: () => (
                <CustomHeader />
              ),
            }}
          >
            <Stack.Screen name="sign-in" options={{ title: 'Sign In' }} />
            <Stack.Screen name="sign-up" options={{ title: 'Sign Up' }} />
            <Stack.Screen name="course" options={{ title: 'Dashboard' }} />
            <Stack.Screen name="course/[course]" options={{ title: 'Course' }} />
            <Stack.Screen name="topic/[topic]" options={{ title: 'Topic' }} />
            <Stack.Screen name="subtopic/[subtopic]" options={{ title: 'Topic' }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </ReduxProvider>
      </AntDesignProvider>
    </ThemeProvider>
  );
}
