import React from 'react';
import styles from './Welcoming.module.css'
import Triangles from '../Triangles';
function Welcoming() {
    return (
        <section className={styles.welcoming}>
            <Triangles />
            <div className={styles['welcom-content']} aria-label="Welcom content">
                <p className={styles['first-text']}>Welcome to our website!</p>
                <p className={styles['second-text']}>We have a new design that's fresh, modern, and easy to use.</p>
            </div>
        </section>
    );
}
export default Welcoming;