import { FC, useEffect } from "react";
import { Text } from '@ant-design/react-native';
import { useGetCourseQuery } from "@modules/course/api";

interface ICourseProps {
  courseId: string;
}

const Course: FC<ICourseProps> = ({ courseId }) => {
  const { data } = useGetCourseQuery({courseId});

  useEffect(() => {
    console.log(data)
  }, [data])
  
  return (
    <>
      <Text>{courseId}</Text>
    </>
  );
};

export default Course;
