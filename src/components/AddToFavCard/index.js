import React from 'react';
import styles from './AddToFavCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons'
const AddToFavCard = ({name , topic , image}) => {
    return (
        <div className={styles["add-to-fav-card"]}>
            <div className={styles["img-container"]}>
                <img className={styles["card-img"]} src={require('../../assets/' + image)} alt={`${topic} card`} />
                <p className={styles.link}><b>{topic}</b> by <a href="#" className={styles["author-link"]}>{name}</a></p>
            </div>
            <div className={styles["add-to-fav"]}>
                <p>Intrested about this topic ?</p>
                <button className={styles["add-to-fav-btn"]}>
                    <p>Add To Favourite</p>
                    <FontAwesomeIcon icon={faHeart} />
                </button>
                <p className={styles.credits}>Unlimited Credits</p>
            </div>
        </div>
    );
}
export default AddToFavCard;