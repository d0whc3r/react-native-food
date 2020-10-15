import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import SearchBar from '../../components/search-bar/search-bar.component';
import useApiSearch from '../../hooks/use-api-search.hook';
import ResultsList from '../../components/results-list/results-list.components';
import { BusinessPriceMap, NavigationRoute, RootStackParamList } from '../../types';
import { StackScreenProps } from '@react-navigation/stack';

const HomeScreen: React.FC<StackScreenProps<RootStackParamList, NavigationRoute.HOME>> = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useApiSearch();

  const resultsMap: BusinessPriceMap = {
    $: [],
    $$: [],
    $$$: [],
    unknown: []
  };

  results.forEach((result) => {
    let price = result.price as keyof BusinessPriceMap;
    if (!price) {
      price = 'unknown';
    }
    resultsMap[price].push(result);
  });

  return (
    <>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView showsVerticalScrollIndicator={false}>
        <ResultsList title="Cost Effective" results={resultsMap['$']} navigation={navigation} />
        <ResultsList title="Bit Pricier" results={resultsMap['$$']} navigation={navigation} />
        <ResultsList title="Big Spender" results={resultsMap['$$$']} navigation={navigation} />
        <ResultsList title="Not defined price" results={resultsMap['unknown']} navigation={navigation} />
      </ScrollView>
    </>
  );
};

export default HomeScreen;
