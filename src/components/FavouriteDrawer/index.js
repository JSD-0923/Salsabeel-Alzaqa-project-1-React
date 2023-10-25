import React from 'react';
import styles from './FavouriteDrawer.module.css';
import FavouriteCards from '../FavouriteCards';
const FavouriteDrawer = () => {
    return (
        <section className={styles.drawer} id="drawer">
            <div className={["drawer-content"]}>
                <h2 className={["drawer-title"]}>My Favourite Topics</h2>
                <div className={["favourite-cards"]}>
                    <FavouriteCards />
                </div>
            </div>
        </section>
    );
};

export default FavouriteDrawer;