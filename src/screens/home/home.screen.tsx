import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import SearchBar from '../../components/search-bar/search-bar.component';
import useApiSearch from '../../hooks/use-api-search.hook';
import ResultsList from '../../components/results-list/results-list.components';
import { BusinessPriceMap } from '../../types';

const HomeScreen: React.FC = () => {
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
        <ResultsList title="Cost Effective" results={resultsMap['$']} />
        <ResultsList title="Bit Pricier" results={resultsMap['$$']} />
        <ResultsList title="Big Spender" results={resultsMap['$$$']} />
        <ResultsList title="Not defined price" results={resultsMap['unknown']} />
      </ScrollView>
    </>
  );
};

export default HomeScreen;
