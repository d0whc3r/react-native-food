import React from 'react';
import { FlatListStyled, ResultContainer, ResultTitle, Subtitle } from './results-list.styles';
import { Business, BusinessSearch, NavigationRoute, RootStackParamList } from '../../types';
import BusinessDetail from '../business-detail/business-detail.component';
import { TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

interface ResultsListProps {
  title: string;
  results: Business[];
}

const ResultsList: React.FC<ResultsListProps> = ({ title, results }) => {
  if (!results?.length) {
    return null;
  }

  const navigation = useNavigation<StackNavigationProp<RootStackParamList, NavigationRoute.HOME>>();
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
          <TouchableOpacity onPress={() => navigation.navigate(NavigationRoute.DETAIL, { id: item.id })}>
            <BusinessDetail detail={item} />
          </TouchableOpacity>
        )}
      />
    </ResultContainer>
  );
};

export default ResultsList;
