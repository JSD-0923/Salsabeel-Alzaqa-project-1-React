import React from 'react';
import styles from './Sort.module.css';
function Sort() {
    return (
        <div className={styles['sort-select']}>
            <label className={styles.sort} htmlFor="sort">Sort by:</label>
            <select name="sort" id="sort">
                <option value="default">Default</option>
                <option value="name">Topic Title</option>
                <option value="author">Author Name</option>
            </select>
        </div>
    );
}
export default Sort;