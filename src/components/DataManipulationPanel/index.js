import React from 'react';
import styles from './DataManipulationPanel.module.css';
import Search from '../Search';
import Filter from '../Filter';
import Sort from '../Sort';
const DataManipulationPanel = () => {
    return (
        <form>
            <Search />
            <div className={styles['select-btns']}>
                <Sort />
                <Filter />
            </div>
        </form>
    );
}
export default DataManipulationPanel;