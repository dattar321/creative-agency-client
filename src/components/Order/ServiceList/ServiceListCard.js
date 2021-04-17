import React from 'react';
import img from '../../../images/icons/service1.png'

const ServiceListCard = ({data}) => {

    const url = 'http://localhost:5000/';

    return (
        <div className="col-md-5">
            <div className="m-3 p-3 bg-white rounded">
                <div>
                    <div className="d-flex justify-content-between">
                        <img src={`${url}${data.serviceIcon}`} alt=""/>
                        <div style={{
                            padding: '0',
                            width: '100px',
                            display:'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius:'10px'
                        }} className={`${data.status === 'Pending' && 'alert-danger' ||
                         data.status === 'Ongoing' && 'alert-warning' ||
                          data.status === 'Done' && 'alert-success'}`}>{data.status}</div>
                    </div>
                    <h5 className="pt-3">{data.service}</h5>
                    <p><small>{data.details}</small></p>
                </div>
            </div>
        </div>
    );
};

export default ServiceListCard;