import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import InfoCard from '../../components/InfoCard';
import Loading from '../../components/Loading';
import SubTopics from '../../components/SubTopics';
const Details = () => {
    const [cardDetails, setCardDetails] = useState(null); 
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://tap-web-1.herokuapp.com/topics/details/${id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setCardDetails(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [id]);
    return (
        <>
            {cardDetails !== null ? (
                <>
                    <InfoCard {...cardDetails} />
                    <SubTopics subtopics={cardDetails.subtopics} topic={cardDetails.topic} />
                </>
            ) : (
                <Loading />
            )}
        </>
    );
}
export default Details;