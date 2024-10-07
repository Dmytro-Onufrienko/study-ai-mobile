import { FC, useEffect, useState } from 'react';
import { Text, View, ActivityIndicator } from '@ant-design/react-native';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useGetCoursesQuery } from '@modules/course/api';
import AntDesign from '@expo/vector-icons/AntDesign';
import CreateCourseModal from '@modules/course/components/CreateCourseModal';

const Dashboard: FC = () => {
  const { data, isLoading } = useGetCoursesQuery();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const handleCreateCourse = () => {
    console.log('Create new course');
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#007bff" />
      ) : (
        <>
          <Text style={styles.title}>Your Courses</Text>
          {data && data.length > 0 ? (
            data.map(({ name }: any, index: number) => (
              <View key={index} style={styles.courseContainer}>
                <Text style={styles.courseName}>{name}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.noCourses}>No courses available</Text>
          )}
        </>
      )}
      <TouchableOpacity style={styles.fab} onPress={() => setIsModalVisible(true)}>
        <AntDesign name="pluscircleo" size={24} color="black" />
      </TouchableOpacity>
      <CreateCourseModal visible={isModalVisible} onClose={() => setIsModalVisible(false)} />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  courseContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 15,
    marginVertical: 8,
    width: '90%',
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
    backgroundColor: '#007bff',
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
