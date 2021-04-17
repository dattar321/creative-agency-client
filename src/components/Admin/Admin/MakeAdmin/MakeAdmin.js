import React from 'react';
import { useState } from 'react';

const MakeAdmin = () => {
    const [newAdmin, setNewAdmin] = useState('');
    const handleOnBlur = (e) => {
        setNewAdmin(e.target.value)
    }
    const handleOnClick = () => {
        const url = `http://localhost:5000/addAdmin/${newAdmin}`;
        fetch(url)
        .then(response => response.json())
        .then(result => {
            if(result){
                alert('New Admin added successfully!')
            }
        })
    }
    return (
        <div>
            <input type="email" name="email" onBlur={handleOnBlur} className="form-control w-50 order-root" placeholder="Enter new admin email"/>
            <button onClick={handleOnClick} className="btn btn-dark px-4 mt-3">Add</button>
        </div>
    );
};

export default MakeAdmin;