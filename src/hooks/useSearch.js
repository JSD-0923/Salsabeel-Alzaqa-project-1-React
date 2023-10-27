import { useState, useEffect } from 'react';
import useApi from './useApi';

function useSearch(inputValue, filterValue, sortValue) {
  const [filteredData, setFilteredData] = useState([]);
  const { data, apiLoading } = useApi('https://tap-web-1.herokuapp.com/topics/list');
  const [initialLoad, setInitialLoad] = useState(true);
  useEffect(() => {
    function filterAndSortData() {
      if (!apiLoading) {
        let searchData = data.filter(item =>
          item.topic.toLowerCase().includes(inputValue.toLowerCase())
        );

        if (filterValue !== 'default') {
          searchData = searchData.filter(item => item.category.toLowerCase() === filterValue.toLowerCase());
        }

        if (sortValue === 'Topic Title') {
          searchData.sort((a, b) => a.topic.toLowerCase() > b.topic.toLowerCase() ? 1 : -1);
        } else if (sortValue === 'Author Name') {
          searchData.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
        }
        setFilteredData(searchData);
        setInitialLoad(false);
      }
    }
    const debounce = setTimeout(filterAndSortData, 300);
    return () => {
      clearTimeout(debounce);
    };
  }, [inputValue, data, apiLoading, filterValue, sortValue]);

  return { filteredData, loading: initialLoad && apiLoading };
}

export default useSearch;