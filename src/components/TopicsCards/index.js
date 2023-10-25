import React from 'react';
import TopicsResult from '../TopicsResult';
import styles from './TopicsCards.module.css';
import Card from '../Card';
const TopicsCards = ({cardData}) => {
  return (       
    <>
      <TopicsResult result={cardData.length} />
      <section className={styles['topics-found']}>
        {cardData.map(item => (
          <Card key={item.id} {...item} />
        ))}
      </section>
    </>    
  );
};
export default TopicsCards;