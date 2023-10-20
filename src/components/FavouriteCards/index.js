import React from 'react';
import Rating from '../Rating';
import { Link } from 'react-router-dom';
import styles from './FavouriteCards.module.css';
const FavouriteCards = ({ image, topic, rating, id }) => {
    return (
        <Link to={`/details/${id}`} className={styles['favourite-card']}>
            <img className={styles["favourite-img"]}  src={require('../../assets/' + image)} alt={`${topic} card`} />
            <h4 className={styles["favourite-title"]}>{topic}</h4>
            <div className={styles["favourite-rate"]}>
                <Rating rating={rating} />
            </div>
        </Link>
    );
};
export default FavouriteCards;