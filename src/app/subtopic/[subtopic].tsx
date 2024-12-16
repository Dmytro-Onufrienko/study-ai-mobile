import { Subtopic } from '@modules/subtopic/pages';
import { useLocalSearchParams } from 'expo-router';
import React, { FC } from 'react';

const SubtopicPage: FC = () => {
  const { subtopic } = useLocalSearchParams();
  const subtopicId: string = typeof subtopic === 'string' ? subtopic : subtopic[0];

  return <Subtopic subtopicId={subtopicId} />
};

export default SubtopicPage;
