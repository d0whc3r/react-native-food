import React from 'react';
import { FlatListStyled, ResultContainer, ResultTitle, Subtitle } from './results-list.styles';
import { Business, NavigationRoute, RootStackParamList } from '../../types';
import BusinessDetail from '../business-detail/business-detail.component';
import { StackNavigationProp } from '@react-navigation/stack/src/types';
import { TouchableOpacity } from 'react-native';

interface ResultsListProps {
  title: string;
  results: Business[];
  navigation: StackNavigationProp<RootStackParamList, NavigationRoute.HOME>;
}

const ResultsList: React.FC<ResultsListProps> = ({ title, results, navigation }) => {
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
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate(NavigationRoute.DETAIL)}>
            <BusinessDetail detail={item} />
          </TouchableOpacity>
        )}
      />
    </ResultContainer>
  );
};

export default ResultsList;
