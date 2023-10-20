import React from 'react';
import styles from './Search.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const Search = () => {
    return (
        <div className={styles.search}>
            <FontAwesomeIcon className={styles['search-icon']} icon={faMagnifyingGlass} />
            <input type="search" className={styles['search-input']} id="search-input" placeholder="Search the website..." />
        </div>
    );
}
export default Search;