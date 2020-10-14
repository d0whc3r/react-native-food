import React from 'react';
import { FlatListStyled, ResultContainer, ResultTitle, Subtitle } from './results-list.styles';
import { Business } from '../../types';
import BusinessDetail from '../business-detail/business-detail.component';

interface ResultsListProps {
  title: string;
  results: Business[];
}

const ResultsList: React.FC<ResultsListProps> = ({ title, results }) => {
  if (!results?.length) {
    return null;
  }
  return (
    <ResultContainer>
      <ResultTitle>
        {title} <Subtitle>({results.length})</Subtitle>
      </ResultTitle>
      <FlatListStyled
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(result) => result.id}
        data={results}
        renderItem={({ item }) => <BusinessDetail detail={item} />}
      />
    </ResultContainer>
  );
};

export default ResultsList;
