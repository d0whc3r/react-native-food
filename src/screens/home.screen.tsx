import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import SearchBar from '../components/search-bar/search-bar.component';
import { Business, BusinessSearch } from '../types';
import Api from '../api';

const HomeScreen: React.FC = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState<Business[]>([]);
  const [total, setTotal] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    void searchApi('pasta');
  }, []);

  const searchApi = async (term: string) => {
    console.log('search api!', term);
    Api.get<BusinessSearch>('/search', {
      params: {
        limit: 50,
        term,
        location: 'san jose'
      }
    })
      .then((data) => {
        setResults(data.businesses);
        setTotal(data.total);
      })
      .catch(({ error }) => {
        setErrorMessage(error.description);
      });
  };

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>
        Search results: {results.length}
        {total ? `/${total}` : null}
      </Text>
    </View>
  );
};

export default HomeScreen;
