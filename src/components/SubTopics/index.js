import React from 'react';
import styles from './SubTopics.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
const SubTopics = ({subtopics , topic}) => {
    return (
        <section className={styles["topic-list"]}>
            <h2 className={styles["topic-title"]}>{topic} Sub Topics</h2>
            {subtopics.map((subtopic, index) => (
                <div key={index} className={styles["topic-item"]}>
                    <FontAwesomeIcon className={styles["marked-icon"]} icon={faCircleCheck} />
                    {subtopic}
                </div>
            ))}
        </section>
    );
}
export default SubTopics;