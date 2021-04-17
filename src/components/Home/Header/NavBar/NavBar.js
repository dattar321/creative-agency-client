import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logos/logo.png'
import {UserContext} from '../../../../App'
import './NavBar.css'

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [selected, setSelected] = useState('home');
    const url = `http://localhost:5000/checkAdmin/${loggedInUser.email}`;
    
    if(loggedInUser.email){
        fetch(url)
        .then(response => response.json())
        .then(result => {
            console.log(result.length , result);
            if(result.length && result[0].email){
                setIsAdmin(true)
            }
            else{
                setIsAdmin(false)
            }
        })
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light container mx-auto">
        <a className="navbar-brand" href="#">
            <Link to="/">
                <img height="50px" src={logo} alt=""/>
            </Link>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className={`nav-item mr-5 ${selected === 'home' && 'select'}`}>
                    <a onClick={() => {setSelected('home')}} className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className={`nav-item mr-5 ${selected === 'portfolio' && 'select'}`}>
                    <a onClick={() => {setSelected('portfolio')}} className="nav-link" href="#portfolio">Our Portfolio</a>
                </li>
                <li className={`nav-item mr-5 ${selected === 'team' && 'select'}`}>
                    <a onClick={() => {setSelected('team')}} className="nav-link" href="#">Our Team</a>
                </li>
                <li className={`nav-item mr-5 ${selected === 'contact' && 'select'}`}>
                    <a onClick={() => {setSelected('contact')}} className="nav-link" href="#contact">Contact Us</a>
                </li>
                <li className="nav-item mr-5">  
                        {
                            isAdmin && loggedInUser.email && 
                                <Link to="/admin">
                                    <button className="btn btn-dark px-4">Admin</button>
                                </Link>
                        }
                        {
                            !isAdmin && !loggedInUser.email &&
                            <Link to="/login">
                                <button className="btn landing-dark-btn px-4">Login</button>
                            </Link>
                        }                       
                        {
                            !isAdmin && loggedInUser.email && 
                            <Link to="/place-order">
                                <img src={loggedInUser.photoURL} style={{borderRadius: '50px', height: '50px'}} alt=""/>
                            </Link>
                        }
                </li>
            </ul>
        </div>
        </nav>
    );
};

export default Navbar;