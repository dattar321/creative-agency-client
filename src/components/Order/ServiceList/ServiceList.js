
import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';
import ServiceListCard from './ServiceListCard'

const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [serviceInfo, setServiceInfo] = useState([]);

    const url = 'http://localhost:5000/userOrder/'+loggedInUser.email;

    fetch(url)
    .then(res => {
        if(res){
          return  res.json()
        }
    })
    .then(data => setServiceInfo(data))
    
    return (
        <div className="row m-5 p-5 service-list-root ">
            {
                serviceInfo.length > 0 ?
                serviceInfo.map(data => <ServiceListCard data={data}></ServiceListCard>)
                :
                <h3>You have no service yet.</h3>
            }
        </div>
    );
};

export default ServiceList;