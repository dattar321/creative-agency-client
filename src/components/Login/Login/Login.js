import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import logo from '../../../images/logos/logo.png';
import google from '../../../images/icons/google.svg'
import { UserContext } from '../../../App';
import firebaseConfig from './firebase.config';

firebase.initializeApp(firebaseConfig);


const Login = () => {
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(result => {
            
        const newLoggedInUser={
            displayName:result.user.displayName,
            email:result.user.email,
            photoURL:result.user.photoURL,
        }
            setLoggedInUser(newLoggedInUser)
            storeToken();

          }).catch(function(error) {

          });
    }
    const storeToken = ()=> {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(idToken => {
            sessionStorage.setItem('idToken',idToken);
            history.push(from)
        }).catch(function(error) {
            // Handle error
        });
    }

    return (
        <div className="text-center w-100" style={{
            height:'110vh',
            width:'100%'
        }}>
            <Link to="/">
                <img className="mx-auto mt-5"  src={logo} alt="" style={{
                    height:'50px',
                    textAlign:'center'
                }}/>
            </Link>
           <div className="shadow mx-auto mt-5 p-5 h-50" style={{width:'45%',cursor:'pointer'}}>
               <h3 className="mb-5">Login With</h3>
               <div className="d-flex align-items-center" style={{
                   border:'1px solid gray',
                   margin:'5px',
                   borderRadius:'50px',
               }}>
                   <img src={google} alt="" style={{padding:'10px',marginRight:'10px',height:'50px'}}/>
                   <p onClick={handleGoogleSignIn} style={{
                       
                   }}>Continue with Google</p>
               </div>
                   <p className="mt-3">Don't have an account? <a href="#" onClick={handleGoogleSignIn}>Create an account</a></p>
           </div>
        </div>
    );
};

export default Login;