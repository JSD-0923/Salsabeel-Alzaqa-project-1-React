import React from 'react';
import styles from './Loading.module.css';
function Loading() {
    return (
        <section className={styles["loading-section"]}>
            <div id="loading" className={styles.loading}></div>
        </section>
    );
}
export default Loading;