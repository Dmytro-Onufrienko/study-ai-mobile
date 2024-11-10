import { View } from '@ant-design/react-native';
import React, { FC } from 'react';
import { ScrollView, useWindowDimensions } from 'react-native';
import RenderHTML from 'react-native-render-html';

const content = `
  <h1>Strategic Marketing</h1>
  <h2>Market Analysis</h2>
  <h3>SWOT Analysis</h3>
  <p>SWOT Analysis is a strategic planning tool used to identify the internal and external factors that can impact a business. SWOT stands for <strong>Strengths</strong>, <strong>Weaknesses</strong>, <strong>Opportunities</strong>, and <strong>Threats</strong>. This framework helps organizations understand their competitive position and develop strategies that leverage strengths, mitigate weaknesses, capitalize on opportunities, and avoid threats.</p> <p>In the context of market analysis, SWOT analysis is crucial because it allows businesses to assess their internal environment (strengths and weaknesses) and external environment (opportunities and threats). By doing so, companies can make informed decisions about market positioning, target audiences, and future strategies.</p>
  <quote>"SWOT Analysis enables businesses to evaluate both internal capabilities and external market factors, helping them to create effective strategies."</quote> <h3>Components of SWOT Analysis</h3> <p><strong>1. Strengths:</strong> These are the internal attributes that give a business a competitive advantage. Strengths can include a strong brand, loyal customer base, unique products, or operational efficiency.</p> <p><strong>Example:</strong> A company with a well-known brand and a loyal customer base can use these strengths to expand into new markets or introduce new products with less marketing effort.</p> <p><strong>2. Weaknesses:</strong> Weaknesses are internal factors that may hinder a business's success. These could be anything from high operating costs to a lack of skilled staff or outdated technology. Identifying weaknesses helps businesses address areas that need improvement.</p> <p><strong>Example:</strong> A company with inefficient supply chain management may face higher costs, reducing profitability. Recognizing this weakness can prompt the company to invest in supply chain improvements.</p> <p><strong>3. Opportunities:</strong> These are external factors that the business can exploit for growth. Opportunities can arise from market trends, changes in consumer behavior, technological advancements, or regulatory changes.</p> <p><strong>Example:</strong> An increase in demand for eco-friendly products can provide an opportunity for a company to develop sustainable product lines and appeal to environmentally-conscious consumers.</p> <p><strong>4. Threats:</strong> Threats are external factors that could pose risks to the business. These could include economic downturns, increased competition, or changes in regulations. Identifying potential threats helps companies prepare for challenges and develop strategies to mitigate risks.</p> <p><strong>Example:</strong> A new competitor entering the market with a lower-priced product could threaten a company’s market share. Understanding this threat allows the business to adjust its pricing or improve its product offering to maintain competitiveness.</p> <quote>"SWOT Analysis helps businesses align their strategies with their strengths and opportunities while addressing weaknesses and mitigating threats."</quote> <h3>Steps to Conduct a SWOT Analysis</h3> <p><strong>Step 1: Identify Strengths</strong> – Begin by listing the internal factors that give your business an advantage in the market. These could include unique selling propositions (USPs), strong brand equity, or proprietary technology.</p> <p><strong>Step 2: Identify Weaknesses</strong> – Acknowledge the areas where your business may be lacking. This might include limited resources, poor customer retention, or outdated equipment. Being honest about weaknesses is key to making improvements.</p> <p><strong>Step 3: Identify Opportunities</strong> – Look at the external market and identify trends or changes that could benefit your business. This could include emerging markets, changes in consumer preferences, or technological innovations.</p> <p><strong>Step 4: Identify Threats</strong> – Consider the external risks that could negatively impact your business. Competitors, economic downturns, and new regulations are examples of common threats that businesses must prepare for.</p> <p><strong>Step 5: Develop a Strategy</strong> – Once you have identified strengths, weaknesses, opportunities, and threats, create a strategy that leverages your strengths to seize opportunities, addresses weaknesses, and mitigates potential threats.</p>
  <quote>"A well-executed SWOT Analysis provides a clear picture of where a business stands and helps shape strategic decisions for future growth."</quote>`;

const SubtopicPage: FC = () => {
  const { width } = useWindowDimensions();

  const tagsStyles = {
    h1: {
      fontSize: 28,
      fontWeight: '700' as const,
      color: '#2A2A2A',
      marginBottom: 16,
      paddingBottom: 8,
      textAlign: 'center',
    },
    h2: {
      fontSize: 24,
      fontWeight: '700' as const,
      color: '#3B3B3B',
      marginBottom: 14,
      paddingBottom: 6,
      textAlign: 'center'
    },
    h3: {
      fontSize: 20,
      fontWeight: '600' as const,
      color: '#555555',
      marginBottom: 12,
      paddingBottom: 4,
      borderBottomWidth: 1,
      borderBottomColor: '#D1D1D1',
      textAlign: 'center'
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
  

  return (
    <ScrollView contentContainerStyle={{ padding: 20, backgroundColor: '#EFEAD8' }}>
      <View>
        <RenderHTML
          contentWidth={width - 40}
          source={{ html: content }}
          tagsStyles={tagsStyles}
        />
      </View>
    </ScrollView>
  );
};

export default SubtopicPage;
