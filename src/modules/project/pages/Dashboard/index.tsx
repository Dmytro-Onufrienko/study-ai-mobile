import {FC, useEffect} from 'react';
import { Text, View, Button } from '@ant-design/react-native'
import { useLazyGetCurrentUserQuery } from '@modules/user/api/endpoints';
import { StyleSheet } from 'react-native';

const Dashboard: FC = (props) => {
  const [trigger, res] = useLazyGetCurrentUserQuery();

  useEffect(() => {
    console.log('change', res)
  }, [res])

  return (
    <View style={styles.container}>
      <Text>
        Hello
      </Text>
      <Button onPress={() => trigger({})}>
        Get User
      </Button>
    </View>
  );
};

export default Dashboard;

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