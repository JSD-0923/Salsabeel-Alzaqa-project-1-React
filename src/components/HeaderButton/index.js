import React, { useState, useEffect } from 'react';
import styles from './HeaderButton.module.css';
import FavouriteDrawer from '../FavouriteDrawer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function HeaderButton({ classname, iconName, buttonName }) {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMood, setDarkMood] = useState('false');

    const toggle = (event) => {
        if (event.target.id === 'favourite-btn') {
            setIsOpen(!isOpen);
        }
        else if (event.target.id === 'theme-btn') { 
            setDarkMood(!darkMood);
        }
    };
    const closeDrawer = (event) => {
    if (!event.target.closest('.drawer') && event.target.id !== 'favourite-btn') {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.body.addEventListener('click', closeDrawer);
    return () => {
      document.body.removeEventListener('click', closeDrawer);
    };
  }, []);
    return (
        <>
            <button className={styles[classname]} id={classname} onClick={toggle}>
                <FontAwesomeIcon icon={iconName} />
                <p>{buttonName}</p>
            </button>
            {isOpen ? <FavouriteDrawer /> : null}
        </>
    );
}
export default HeaderButton;