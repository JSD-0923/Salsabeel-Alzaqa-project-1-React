import React from 'react';
import styles from './HeaderButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function HeaderButton({classname , iconName , buttonName}) {
    return (
        <>
            <button className={styles.classname} id={classname} >
                <FontAwesomeIcon icon={iconName} />
                <p>{buttonName}</p>
            </button>
        </>
    );
}
export default HeaderButton;