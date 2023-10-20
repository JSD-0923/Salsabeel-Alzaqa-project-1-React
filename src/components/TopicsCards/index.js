import React, { useEffect, useState } from 'react';
import TopicsResult from '../TopicsResult';
import styles from './TopicsCards.module.css';
import Card from '../Card';
import Loading from '../Loading';

const TopicsCards = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://tap-web-1.herokuapp.com/topics/list");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCardData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
    return (
        <>
            {cardData.length > 0 ? (
                <>
                    <TopicsResult result={cardData.length} />
                    <section className={styles['topics-found']}>
                        {cardData.map(item => (
                            <Card key={item.id} {...item} />
                        ))}
                    </section>
                </>
            ) : (
                <Loading />
            )}
        </>
    );
};

export default TopicsCards;