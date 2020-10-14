import { useEffect, useState } from 'react';
import { Business, BusinessSearch } from '../types';
import Api from '../api';

const useApiSearch = (): [(term: string) => Promise<void>, Business[], number, string] => {
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

  return [searchApi, results, total, errorMessage];
};

export default useApiSearch;
