import React, { useState } from 'react';
import { Text, View } from 'react-native';
import SearchBar from '../components/search-bar/search-bar.component';
import { Business, BusinessSearch } from '../types';
import Api from '../api';

const HomeScreen: React.FC = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState<Business[]>([]);

  const searchApi = async () => {
    Api.call<BusinessSearch>('/search', {
      params: {
        limit: 50,
        term
      }
    })
      .then((data) => {
        setResults(data.businesses);
        console.log('data?', data);
      })
      .catch(console.error);
  };

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      <Text>Search results: {results.length}</Text>
    </View>
  );
};

export default HomeScreen;
