import React from 'react';
import styles from './Navbar.module.css';
import HeaderButton from '../HeaderButton';
import { faHeart , faMoon } from '@fortawesome/free-regular-svg-icons'
function Navbar() {
    const buttonsData = [
        {
            id: 1,
            buttonName:"Dark mood",
            className: "theme-btn",
            iconName:faMoon
        }, {
            id: 2,
            buttonName:"Favourite",
            className: "favourite-btn",
            iconName: faHeart
        }]
    return (
        <nav>
            <a href="/" className={styles.name} aria-label="the website name">Web Topics</a>
            <div className={styles['nav-btns']}>
                {buttonsData.map( item => {
                    return <HeaderButton key={item.id} classname={item.className} iconName={item.iconName} buttonName={item.buttonName} />
                })}
            </div>
        </nav>
    );
}
export default Navbar;