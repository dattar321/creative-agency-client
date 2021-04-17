import React, { useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import FeedBackCard from '../FeedbackCard/FeedBackCard';
import Slider from "react-slick";


const FeedBack = () => {
    const [info, setInfo] = useState([]);
    const url = 'http://localhost:5000/reviews';
    fetch(url)
    .then(res => res.json())
    .then(data => setInfo(data))
    

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoPlaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <div className="container p-5 my-5 order-root" style={{height:'100%'}}>
            <h2 className="text-center pb-5">Clients <span className="landing-text">Feedback</span></h2>

          {
            info.length > 0 ?
         
           <Slider  {...settings}>
                {
                      info.map(customar => 
                          <div className="div" key={customar._id}>
                            <FeedBackCard data = {customar}></FeedBackCard>
                          </div>
                        )
                }
          </Slider>
          :
          <h1>Loading...</h1>
          }
        </div>
    );
};

export default FeedBack;