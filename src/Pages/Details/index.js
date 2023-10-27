import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import InfoCard from '../../components/InfoCard';
import Loading from '../../components/Loading';
import SubTopics from '../../components/SubTopics';
import useApi from '../../hooks/useApi';
import styles from './Details.module.css'
const Details = () => {
    const [cardDetails, setCardDetails] = useState(null); 
    const { id } = useParams();
    const { data, apiLoading } = useApi(`https://tap-web-1.herokuapp.com/topics/details/${id}`);
    useEffect(() => {
        if (data) {
            setCardDetails(data);
        }
    }, [data]);
    return (
        <main className={styles['details-page-main']}>
            {apiLoading ? <Loading /> : 
            cardDetails &&
                (<>
                    <InfoCard {...cardDetails} />
                    <SubTopics subtopics={cardDetails.subtopics} topic={cardDetails.topic} />
                </>)
            }
        </main>
    );
}
export default Details;