import React, { useState } from 'react';
import './HeaderButton.module.css';
import FavouriteDrawer from '../FavouriteDrawer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from '../../ThemeContext';
function HeaderButton({ iconName, buttonName }) {
  const [isOpen, setIsOpen] = useState(false);
  const {theme ,toggleTheme } = useTheme(); 

  const toggle = () => {
    if (buttonName === 'favourite') {
        setIsOpen(!isOpen);
    } else if (buttonName === 'theme') {
      toggleTheme(); 
    }
  };
    return (
        <>
            <button id={buttonName} onClick={toggle}>
                <FontAwesomeIcon icon={iconName} />
                {buttonName === 'theme' ? <p>{`${theme} mode`}</p> : <p>{buttonName}</p>}
            </button>
            {isOpen ? <FavouriteDrawer /> : null}
        </>
    );
}
export default HeaderButton;
