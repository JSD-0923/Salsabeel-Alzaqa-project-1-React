import React from 'react';
import styles from './Search.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const Search = ({searchValue , onSearchValueChange}) => {
    const handleInputChange = (e) => {
        onSearchValueChange(e.target.value);
    };
    return (
        <div className={styles.search}>
            <FontAwesomeIcon className={styles['search-icon']} icon={faMagnifyingGlass} />
            <input type="search" className={styles['search-input']} placeholder="Search the website..." value={searchValue} onChange={handleInputChange} />
        </div>
    );
}
export default Search;