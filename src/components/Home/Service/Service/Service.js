import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';



const Service = () => {
    const [serviceInfo, setServiceInfo] = useState([]);
    const url = 'http://localhost:5000/services';
    fetch(url)
    .then(res => {
        if(res){
          return  res.json()
        }
    })
    .then(data => setServiceInfo(data));
    
    return (
        <div id="service" className=" container" style={{
            marginTop:"200px"
        }}>
            <h2 className="text-center">Provide awesome <span style={{clolor:'#7ab259'}}>services</span></h2>
            <div className="row my-5 py-5">
                {
                    serviceInfo.length > 0? 
                    serviceInfo.map((service => <ServiceCard key={service._id} info = {service}></ServiceCard>))
                    :<h1 className="text-center">Loading...</h1>
                }
            </div>
        </div>
    );
};

export default Service;