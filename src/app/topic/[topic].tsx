import Topic from '@modules/topic/pages/topic';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';

const TopicPage: React.FC = () => {
  const { topic } = useLocalSearchParams();
  const topicId: string = typeof topic === 'string' ? topic : topic[0];

  return (
    <Topic topicId={topicId} />
  )
};

export default TopicPage;
