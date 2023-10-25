import { useState, useEffect } from 'react';

function useApi(url) {
  const [data, setData] = useState(null);
  const [apiLoading, setApiLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setApiLoading(true);
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      } finally {
        setApiLoading(false);
      }
    }
    fetchData();
  }, [url]);
  return {
    data,
    apiLoading,
  };
}
export default useApi;