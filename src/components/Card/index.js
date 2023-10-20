import React from 'react';
import Rating from '../Rating';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';
const Card = ({ image, category, topic, rating, name, id }) => {
    return (
       <Link to={`/details/${id}`} className={styles.card}>
            <div className={styles['img-container']}>
                <img className={styles['card-img']} src={require('../../assets/' + image)} alt={`${topic} card`} />
            </div>
            <div className={styles['card-info']}>
                <h2 className={styles['card-title']}>{category}</h2>
                <p className={styles['card-name']}>{topic}</p>
                <div className={styles['card-rating']}>
                    <Rating rating={rating} />
                </div>
                <p className={styles.author}>{name}</p>
            </div>
        </Link>
    );
};

export default Card;