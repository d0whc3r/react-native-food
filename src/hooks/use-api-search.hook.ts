import { useEffect, useState } from 'react';
import { Business, BusinessSearch } from '../types';
import Api from '../api';

const useApiSearch = (): [(term: string) => Promise<void>, Business[], string] => {
  const [results, setResults] = useState<Business[]>([]);
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
      })
      .catch((err) => {
        if ('error' in err) {
          setErrorMessage(err.error.description);
        } else {
          setErrorMessage(err.toString());
        }
      });
  };

  return [searchApi, results, errorMessage];
};

export default useApiSearch;
