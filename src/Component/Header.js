import React from 'react';
import { Link } from "react-router-dom";
import AuthenticationService from '../services/AuthenticationService';
import styles from '../static/css/header.css';



class Header extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
   
    }


    handleLogout(e) {
        AuthenticationService.logout();
        this.props.userStateChange(AuthenticationService.isUserLoggedIn());
    }

    render() {

        const isLoggedIn = this.props.isLoggedIn;

        return (
            
            <section id="home" className="section bg-voilet bg-overlay overflow-hidden d-flex align-items-center">
                <div className="container">
                    {
                        !this.props.isLoggedIn &&
                        <div className="button-group store-buttons d-flex">
                        
                            <Link to="/" className="btn btn-primary slide_right_alt">
                                Home
                            </Link>
                            
                            <Link to="/login" className="btn btn-primary slide_right_alt">
                                Sign In 
                            </Link>
                            
                            <Link to="/sign-up" className="btn btn-primary slide_left_alt">
                                Sign Up
                            </Link>

                            <Link to="/about" className="btn btn-primary slide_left_alt">
                                About
                            </Link>

                            
                        </div>  
                    }
                    {
                        this.props.isLoggedIn &&
                        <div className="button-group store-buttons d-flex">
                            
                            <Link to="/" className="btn btn-primary slide_right_alt">
                                Home
                            </Link>
                            
                            <Link to="/mypage" className="btn btn-primary slide_left_alt">
                                My Page
                            </Link>

                            <Link to="/gye-list" className="btn btn-primary slide_left_alt">
                                Gye List
                            </Link>


                            <Link to="/logout" className="btn btn-primary slide_left_alt"  
                                    onClick={this.handleLogout}>Logout
                            </Link>
                        </div> 
                    }
                        
                    
                
                </div>
                
                
                
            </section>
            
           
           
        );
    }
    
}

export default Header;