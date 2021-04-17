import React from 'react';
import Header from '../Header/Header/Header';
import '../../Responsive/Responsive.css'
import Sponsor from '../Sponsor/Sponsor';
import Service from '../Service/Service/Service';
import OurWork from '../Ourwork/Ourwork';
import FeedBack from '../FeedBack/FeedBack/FeedBack';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Sponsor></Sponsor>
            <Service></Service>
            <OurWork></OurWork>
            <FeedBack></FeedBack>
            <Footer></Footer>
        </div>
    );
};

export default Home;