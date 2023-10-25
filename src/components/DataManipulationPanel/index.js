import React, { useEffect, useState } from 'react';
import styles from './DataManipulationPanel.module.css';
import useApi from '../../hooks/useApi';
import useSearch from '../../hooks/useSearch';
import Select from '../Select';
import Search from '../Search';
import TopicsCards from '../TopicsCards';
import Loading from '../Loading';
const DataManipulationPanel = () => {
    const [filterData, setFilterData] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [sortValue, setSortValue] = useState('default');
    const [filterValue, setFilterValue] = useState('default');
    const [displayedData, setDisplayedData] = useState([]);
    const { data, apiLoading } = useApi('https://tap-web-1.herokuapp.com/topics/list');
    const { filteredData, loading } = useSearch(searchValue);
    useEffect(() => {
        if (!apiLoading && data) {
            data.forEach((item) => {
                setFilterData((prevSet) => new Set([...prevSet, item.category]));
            });
        }
    }, [apiLoading, data]);
    useEffect(() => {
        let filteredAndSortedData = [...filteredData];
        if (filterValue !== 'default') {
            filteredAndSortedData = filteredAndSortedData.filter(item => item.category.toLowerCase() === filterValue.toLowerCase());
        }
        if (sortValue === 'Topic Title') {
            filteredAndSortedData.sort((a, b) => a.topic.toLowerCase() > b.topic.toLowerCase() ? 1 : -1);
        } else if (sortValue === 'Author Name') {
            filteredAndSortedData.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
        }
        setDisplayedData(filteredAndSortedData);
    }, [filterValue, sortValue, filteredData]);
    const handleValueChange = newValue => setSearchValue(newValue);
    const handleSortChange = newValue => setSortValue(newValue);
    const handleFilterChange = newValue => setFilterValue(newValue);
    return (
        <>
            <form>
                <Search searchValue={searchValue} onSearchValueChange={handleValueChange} />
                <div className={styles['select-btns']}>
                    <Select name="Sort" data={['Topic Title', 'Author Name']} value={sortValue} selected={handleSortChange} />
                    <Select name="Filter" data={[...filterData]} value={filterValue} selected={handleFilterChange} />
                </div>
            </form>
            {loading ? (<Loading />) :
                (
                    displayedData.length > 0 ? (
                        <TopicsCards cardData={displayedData} />
                    ) : (<h2>Nothing Found</h2>)
                )}
        </>
    );
};
export default DataManipulationPanel;