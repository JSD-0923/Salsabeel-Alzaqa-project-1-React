import React, { useEffect, useState } from 'react';
import styles from './AddToFavCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons'
const AddToFavCard = ({name , topic , image,rating ,id}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favourites')) || [];
    setFavorites(storedFavorites);
    const isTopicFavorite = storedFavorites.some((favorite) => favorite.id === id);
    setIsFavorite(isTopicFavorite);
  }, [isFavorite, id]);
  
  // Function to add a topic to favorites
  const addToFavorites = () => {
    const newFavorite = {
      id: id,
      image: image,
      topic: topic,
      rating: rating,
    };
    const updatedFavorites = [...favorites, newFavorite];
    setFavorites(updatedFavorites);
    updateLocalStorage(updatedFavorites);
    setIsFavorite(true);
  };

  // Function to remove a topic from favorites
  const removeFromFavorites = () => {
    const index = favorites.findIndex((favorite) => favorite.id === id);
    if (index !== -1) {
      const updatedFavorites = [...favorites];
      updatedFavorites.splice(index, 1);
      setFavorites(updatedFavorites);
      updateLocalStorage(updatedFavorites);
      setIsFavorite(false);
    }
  };
  
  // Function to update local storage with the updated favorites
  const updateLocalStorage = (updatedFavorites) => {
    localStorage.setItem('favourites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className={styles["add-to-fav-card"]}>
      <div className={styles["img-container"]}>
        <img className={styles["card-img"]} src={require('../../assets/' + image)} alt={`${topic} card`} />
        <p className={styles.link}><b>{topic}</b> by <a href="/" className={styles["author-link"]}>{name}</a></p>
      </div>
      <div className={styles["add-to-fav"]}>
        <p>Intrested about this topic ?</p>
        <button className={styles["add-to-fav-btn"]} onClick={() => {
          if (isFavorite) {
            removeFromFavorites();
          } else {
            addToFavorites();
          }
        }}>
          <p>{isFavorite ? 'Remove from Favorites' : 'Add To Favorites'}</p>
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <p className={styles.credits}>Unlimited Credits</p>
      </div>
    </div>
  );
}
export default AddToFavCard;