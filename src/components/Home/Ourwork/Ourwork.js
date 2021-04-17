import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import carousel1 from '../../../images/carousel-1.png'
import carousel2 from '../../../images/carousel-2.png'
import carousel3 from '../../../images/carousel3.1.png'
import carousel4 from '../../../images/carousel-4.png'

const OurWork = () => {
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
        <div className=" landing-dark-bg py-5 w-100" id="portfolio" style={{
            height:'auto',
            backgroundColor:'#111430',
            color:'white'
        }}>
        <h2 className="text-center pt-3 pb-2">Here are some of our works</h2>
  
        <div>
        <Slider {...settings} className="py-5 m-0">
          <div className=" w-100">
            <img src={carousel1} height="250px" className="mx-auto" alt=""/>
          </div>
          <div className=" w-100">
            <img src={carousel2} height="250px" className="mx-auto" alt=""/>
          </div>
          <div className=" w-100">
            <img src={carousel3} height="250px" className="mx-auto" alt=""/>
          </div>
          <div className=" w-100">
            <img src={carousel4} height="250px" className="mx-auto" alt=""/>
          </div>
        
        </Slider>
      </div>

        </div>
    );
};

export default OurWork;