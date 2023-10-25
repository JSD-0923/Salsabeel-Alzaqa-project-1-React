import { useState, useEffect } from 'react';
import useApi from './useApi';

function useSearch(inputValue) {
  const [filteredData, setFilteredData] = useState([]);
  const { data, apiLoading } = useApi('https://tap-web-1.herokuapp.com/topics/list');
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    function filterData() {
      if (!apiLoading) {
        const filteredData = data.filter(item =>
          item.topic.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFilteredData(filteredData);
        setInitialLoad(false); 
      }
    }

    const debounce = setTimeout(filterData, 300);

    return () => {
      clearTimeout(debounce);
    };
  }, [inputValue, data, apiLoading]);

  return { filteredData, loading: initialLoad && apiLoading };
}

export default useSearch;
