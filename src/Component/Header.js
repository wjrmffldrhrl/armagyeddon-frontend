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
                <div class="btn_armagyeddon">
                    <Link to="/" className="text-white font-weight-bold">                           
                            <h1> Armagyeddon</h1> 
                    </Link>
                </div>
                
            
                <div className="container">                   
                           
                    {
                        !this.props.isLoggedIn &&
                        <div className="button-group store-buttons d-flex">
                            <div>


                                <a><Link to="/" className="text-white font-weight-bold">
                                    Home
                                </Link></a><a></a><a></a>
                                
                                <a><Link to="/about" className="text-white font-weight-bold">
                                    About 
                                </Link></a><a></a><a></a>
                                
                                <a><Link to="/gye-list" className="text-white font-weight-bold">
                                    Gye
                                </Link></a><a></a><a></a>

                                <a><Link to="/board" className="text-white font-weight-bold">
                                    Board
                                </Link></a><a></a><a></a>    

                                <a><Link to="/contact" className="text-white font-weight-bold">
                                    Contact Us
                                </Link></a><a></a><a></a>                              
                                                              
                                                 
                            </div> 

                           
                             <div class="btn_sign">

                                 <a><Link to="/login" className="text-white font-weight-bold">
                                    Sign In 
                                </Link></a><a></a><a></a>

                                <a><Link to="/sign-up" className="text-white font-weight-bold">
                                    Sign Up
                                </Link></a><a></a><a></a>

                             </div>     

                        </div>

                        
                        
                    }

                    {
                    
                        this.props.isLoggedIn &&
                       
                       <div className="button-group store-buttons d-flex">
                            <div>
                                <a><Link to="/" className="text-white font-weight-bold">
                                    Home
                                </Link></a><a></a><a></a>

                                <a><Link to="/about" className="text-white font-weight-bold">
                                    About 
                                </Link></a><a></a><a></a>

                                <a><Link to="/gye-list" className="text-white font-weight-bold">
                                    Gye
                                </Link></a><a></a><a></a>

                                <a><Link to="/search" className="text-white font-weight-bold">
                                    Search
                                 </Link></a><a></a><a></a><a></a>     

                                <a><Link to="/contact" className="text-white font-weight-bold">
                                    Contact Us
                                </Link></a><a></a><a></a>                        
                                                       
                            </div> 
                            
                            <div class="btn_sign">

                                <a><Link to="/mypage" className="text-white font-weight-bold">
                                     My Page
                                </Link></a><a></a><a></a>

                                <a><Link to="/logout" className="text-white font-weight-bold"
                                 onClick={this.handleLogout}>Logout
                                </Link></a><a></a><a></a>

                             </div>     
                                                                            
                        </div> 

                        
                    }                       
                    
                </div>     
                               
            </section>           
           
           
        );
    }
    
}

export default Header;