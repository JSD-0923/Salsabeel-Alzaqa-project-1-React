import React from 'react';
import styles from './Welcoming.module.css';

function Triangles() {
    return (
        <>
            <div className={styles['first-shape']}></div>
            <div className={styles['second-shape']}></div>
        </>
    );
}

function Welcoming() {
    return (
        <section className={styles.welcoming}>
            <Triangles />
            <div className={styles['welcom-content']} aria-label="Welcome content">
                <p className={styles['first-text']}>Welcome to our website!</p>
                <p className={styles['second-text']}>We have a new design that's fresh, modern, and easy to use.</p>
            </div>
        </section>
    );
}

export default Welcoming;
