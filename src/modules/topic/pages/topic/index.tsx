import { FC } from "react";
import { Text, View, ActivityIndicator, Button } from '@ant-design/react-native';
import { useGetCourseQuery } from "@modules/course/api";
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from '@modules/common/hooks';
import { Routes } from "@config/Routes";
import { useGetTopicQuery } from "@modules/topic/api";

interface ITopicProps {
  topicId: string;
}

const Topic: FC<ITopicProps> = ({ topicId }) => {
  const router = useRouter();
  const { data, isLoading } = useGetTopicQuery({topicId});

  const handlePress = (id: string) => {
    router.push({ path: Routes.SUBTOPIC, params: id })
  }
  
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#007bff" />
      ) : (
        <>
          <Text style={styles.title}>Subtopics</Text>
          {data?.subtopics && data.subtopics.length > 0 ? (
            data.subtopics.map(({ name, id }, index: number) => (
              <Button key={index} style={styles.topicContainer} onPress={() => handlePress(id)} >
                <Text style={styles.topicName}>{name}</Text>
              </Button>
            ))
          ) : (
            <Text style={styles.noCourses}>No topics available</Text>
          )}
        </>
      )}
    </View>
  );
};

export default Topic;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  topicContainer: {
    backgroundColor: '#c6e99f',
    borderRadius: 8,
    padding: 15,
    marginVertical: 8,
    width: '90%',
    height: 'auto',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  topicName: {
    fontSize: 18,
    color: '#555',
  },
  noCourses: {
    fontSize: 16,
    color: '#888',
  },
});