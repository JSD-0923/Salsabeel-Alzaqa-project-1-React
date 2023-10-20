import React from 'react';
import styles from './TopicsResult.module.css';
function TopicsResult({result}) {
    return (
        <section className={styles.result}>
           "{result}" Web Topics Found
        </section>
    );
}
export default TopicsResult;