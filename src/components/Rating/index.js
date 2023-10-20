import React from 'react';
import styles from './Rating.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';

const Rating = ({ rating }) => {
  const StarIcons = (ratingstr) => {
    const rating = parseFloat(ratingstr);
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    let starIcons = [];
    
    for (let i = 0; i < fullStars; i++) {
      starIcons.push(<FontAwesomeIcon key={`full-${i}`} icon={faStar} />);
    }

    if (halfStar) {
      starIcons.push(<FontAwesomeIcon key="half" icon={faStarHalfAlt} />);
    }

    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      starIcons.push(<FontAwesomeIcon key={`empty-${i}`} icon={faRegularStar} />);
    }

    return starIcons;
  };

  const starIcons = StarIcons(rating);

  return (
    <div className={styles['rating-stars']}>
      {starIcons}
    </div>
  );
};

export default Rating;