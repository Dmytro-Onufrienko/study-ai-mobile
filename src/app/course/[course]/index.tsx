import Course from '@modules/course/pages/Course';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';

const CoursePage: React.FC = () => {
  const { course } = useLocalSearchParams();
  const courseId: string = typeof course === 'string' ? course : course[0];

  return <Course courseId={courseId} />;
};

export default CoursePage;
