import React, {useState , useEffect} from 'react';
import styles from './FavouriteDrawer.module.css';
import FavouriteCards from '../FavouriteCards';
const FavouriteDrawer = () => {
    const [favouriteData, setFavouriteData] = useState([]);
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favourites'));
        setFavouriteData(storedFavorites);
    }, []);
    return (
        <section className={styles.drawer} id="drawer">
            <div className={styles["drawer-content"]}>
                <h2 className={styles["drawer-title"]}>My Favourite Topics</h2>
                <div className={styles["favourite-cards"]}>
                    {favouriteData ?
                        favouriteData.map((item) =>
                            <FavouriteCards key={item.id} image={item.image} topic={item.topic} rating={item.rating} id={item.id} />
                    ):<>There is nothing to show, go add some !</>}
                </div>
            </div>
        </section>
    );
};
export default FavouriteDrawer;