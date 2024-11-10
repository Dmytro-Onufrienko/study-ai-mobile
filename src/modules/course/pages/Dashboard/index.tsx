import { FC, useState } from 'react';
import { Text, View, ActivityIndicator, Button } from '@ant-design/react-native';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useGetCoursesQuery } from '@modules/course/api';
import Icon from '@expo/vector-icons/AntDesign';
import CreateCourseModal from '@modules/course/components/CreateCourseModal';
import { useRouter } from '@modules/common/hooks';
import { Routes } from '@config/Routes';

const Courses: FC = () => {
  const router = useRouter();
  const { data, isLoading } = useGetCoursesQuery();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const handlePress = (id: string) => {
    router.push({ path: Routes.COURSE, params: id })
  }

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#007bff" />
      ) : (
        <>
          <Text style={styles.title}>Your Courses</Text>
          {data && data.length > 0 ? (
            data.map(({ name, id }, index: number) => (
              <Button key={index} style={styles.courseContainer} onPress={() => handlePress(id)} >
                <Text style={styles.courseName}>{name}</Text>
              </Button>
            ))
          ) : (
            <Text style={styles.noCourses}>No courses available</Text>
          )}
        </>
      )}
      <TouchableOpacity style={styles.fab} onPress={() => setIsModalVisible(true)}>
        <Icon name="pluscircleo" size={24} color="black" />
      </TouchableOpacity>
      <CreateCourseModal visible={isModalVisible} onClose={() => setIsModalVisible(false)} />
    </View>
  );
};

export default Courses;

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
  courseContainer: {
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
  courseName: {
    fontSize: 18,
    color: '#555',
  },
  noCourses: {
    fontSize: 16,
    color: '#888',
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#4C9A2A',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});
