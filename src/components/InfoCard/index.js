import React from 'react';
import styles from './InfoCard.module.css';
import Rating from '../Rating';
import AddToFavCard from '../AddToFavCard';
const InfoCard = ({name , topic , category ,description , rating , image , id }) => {
    return (
        <section className={styles["card-details"]}>
            <div className={styles["details-container"]}>
                <div className={styles["card-content"]}>
                    <p className={styles["card-title"]}>{category}</p>
                    <h2 className={styles["card-name"]}>{topic}</h2>
                    <div className={styles.rate}>
                        <Rating rating={rating} />
                    </div>
                    <p className={styles["card-description"]}>{description}</p>
                </div>
                <AddToFavCard image={image} topic={topic} name={name} rating={rating} id={id} />
            </div>
        </section>
    );
}
export default InfoCard;