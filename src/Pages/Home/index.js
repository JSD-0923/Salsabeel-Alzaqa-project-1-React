import React, { useState, useEffect } from 'react';
import useSearch from '../../hooks/useSearch';
import Select from '../../components/Select';
import Search from '../../components/Search';
import TopicsCards from '../../components/TopicsCards';
import Loading from '../../components/Loading';
import useApi from '../../hooks/useApi';
import styles from'./Home.module.css';
const Home = () => {
    const params = new URLSearchParams(window.location.search);
    const initialSearchValue = params.get('search') || '';
    const initialFilterValue = params.get('filter') || 'default';
    const initialSortValue = params.get('sort') || 'default';
    const [category, setCategory] = useState([]);
    const [searchValue, setSearchValue] = useState(initialSearchValue);
    const [sortValue, setSortValue] = useState(initialSortValue);
    const [filterValue, setFilterValue] = useState(initialFilterValue);
    const { data, apiLoading } = useApi('https://tap-web-1.herokuapp.com/topics/list');
    const { filteredData, loading } = useSearch(searchValue, filterValue, sortValue);

    //update URL
    useEffect(() => {
        const newURL = new URL(window.location);
        const params = newURL.searchParams;
        params.set('search', searchValue);
        params.set('filter', filterValue);
        params.set('sort', sortValue);
        window.history.pushState({}, '', newURL);
    }, [searchValue, filterValue, sortValue]);
    
    //put the categories data in the filter
    useEffect(() => {
        if (!apiLoading && data) {
            data.forEach((item) => {
                setCategory((prevSet) => new Set([...prevSet, item.category]));
            });
        }
    }, [apiLoading, data]);

    const handleValueChange = newValue => setSearchValue(newValue);
    const handleSortChange = newValue => setSortValue(newValue);
    const handleFilterChange = newValue => setFilterValue(newValue);
    return (
        <main>
            <form>
                <Search searchValue={searchValue} onSearchValueChange={handleValueChange} />
                <div className={styles['select-btns']}>
                    <Select name="Sort" data={['Topic Title', 'Author Name']} value={sortValue} selected={handleSortChange} />
                    <Select name="Filter" data={[...category]} value={filterValue} selected={handleFilterChange} />
                </div>
            </form>
            {loading ? <Loading /> : (
                filteredData.length > 0 ? (
                    <TopicsCards cardData={filteredData} />
                ) : (
                    <h2>Nothing Found</h2>
                )
            )}
        </main>
    );
}
export default Home;