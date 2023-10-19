import React from 'react';
import { Outlet } from "react-router-dom";
import Header from '../../components/Header';
import Welcoming from '../../components/Welcoming';
import Footer from '../../components/Footer';
const Layout = () => {
    return (
        <>
            <Header />
            <Welcoming />
            <Outlet />
            <Footer />
        </>
    );
}
export default Layout;