import React from 'react';
import { useContext } from 'react';
import {  useHistory } from 'react-router-dom';
import { UserContext } from '../../../../App';
import './ServiceCard.css';


const ServiceCard = ({info}) => {
    const history = useHistory();
    const [loggedInUser, setLoggedInUser, selectedService, setSelectedService] = useContext(UserContext);
    const handleOnClick = () =>{
        setSelectedService(info);
        history.push('/place-order')
    }
    return (
        <div className="col-md-4 col-sm-12 ">
            <div onClick={handleOnClick} className="m-5 p-2 rounded text-center pt-3 service-card">
                <img height="80px" src={`http://localhost:5000${info.path}`} alt=""/>
                <h4 className="mt-4">{info.title}</h4>
                <p>{info.desc}</p>
            </div>
        </div>
    );
};

export default ServiceCard;