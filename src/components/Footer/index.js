import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <footer>
            <p>Developed with <FontAwesomeIcon className={styles['footer-icon']} icon={faHeart} /> &#169; 2023 </p>
        </footer>
    );
}
export default Footer;