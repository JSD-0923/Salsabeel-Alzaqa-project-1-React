import React from 'react';
import styles from './Filter.module.css';
function Filter() {
    return (
        <div className={styles['filter-select']}>
            <label className={styles.filter} htmlFor="filter">Filter by:</label>
            <select name="filter" id="filter">
                <option value="default">Default</option>
            </select>
        </div>
    );
}
export default Filter;