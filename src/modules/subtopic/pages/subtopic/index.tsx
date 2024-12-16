import { FC } from "react";
import { View, ActivityIndicator } from '@ant-design/react-native';
import { ScrollView, useWindowDimensions } from 'react-native';
import { useGetSubtopicQuery } from "@modules/subtopic/api";
import RenderHTML from "react-native-render-html";

interface ISubtopicProps {
  subtopicId: string;
}

const Subtopic: FC<ISubtopicProps> = ({ subtopicId }) => {
  const { width } = useWindowDimensions();
  const { data, isLoading } = useGetSubtopicQuery({ subtopicId });

  console.log(data);

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <View>
        {isLoading ? (
          <ActivityIndicator size="large" color="#007bff" />
        ) : (
          <RenderHTML
            contentWidth={width - 40}
            source={{ html: data?.material || '' }}
            tagsStyles={tagsStyles}
          />
        )}

      </View>
    </ScrollView>
  );
};

export default Subtopic;

const tagsStyles = {
  h1: {
    fontSize: 28,
    fontWeight: '700' as const,
    color: '#2A2A2A',
    marginBottom: 16,
    paddingBottom: 8,
    textAlign: 'center' as const,
  },
  h2: {
    fontSize: 24,
    fontWeight: '700' as const,
    color: '#3B3B3B',
    marginBottom: 14,
    paddingBottom: 6,
    textAlign: 'center' as const,
  },
  h3: {
    fontSize: 20,
    fontWeight: '600' as const,
    color: '#555555',
    marginBottom: 12,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#D1D1D1',
    textAlign: 'center' as const,
  },
  p: {
    fontSize: 16,
    lineHeight: 26,
    color: '#333333',
    marginBottom: 16,
    padding: 16,
    borderRadius: 6,
    backgroundColor: '#c6e99f',
  },
  strong: {
    fontWeight: '700' as const,
    color: '#2A2A2A',
  },
  quote: {
    color: '#4C9A2A',
    padding: 16,
    backgroundColor: '#F8F4E3',
    borderLeftWidth: 4,
    borderLeftColor: '#FFB84D',
    marginVertical: 16,
    borderRadius: 8,
  },
};