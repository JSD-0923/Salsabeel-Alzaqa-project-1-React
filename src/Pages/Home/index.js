import React from 'react';
import './Home.module.css';
import DataManipulationPanel from '../../components/DataManipulationPanel';
import TopicsCards from '../../components/TopicsCards';
// import FavouriteDrawer from '../../components/FavouriteDrawer';
const Home = () => {
    return (
        <main>
            <DataManipulationPanel />
            <TopicsCards />
            {/* <FavouriteDrawer  /> */}
        </main>
    );
}
export default Home;