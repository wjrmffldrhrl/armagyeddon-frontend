import React from 'react';
import { Link } from "react-router-dom";
import AuthenticationService from '../services/AuthenticationService';
import styles from '../static/css/header.css';
import SidebarComponent from '../Component/home/SidebarComponent';
import { BrowserRouter as Router } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask,
MDBRow, MDBCol, MDBIcon, MDBBtn, MDBView, MDBContainer } from "mdbreact";
import MyProfile from './home/MyProfile';


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
   
    }

    state = {
        collapseID: ""
        };
        
        toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
        collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));


    handleLogout(e) {
        AuthenticationService.logout();
        this.props.userStateChange(AuthenticationService.isUserLoggedIn());
    }

    render() {

        const isLoggedIn = this.props.isLoggedIn;
        const overlay = (
            <div id="sidenav-overlay" style={{ backgroundColor: "transparent" }} onClick={this.toggleCollapse("navbarCollapse")} />
            );     
                        

        return (

            <div id="videobackground">
            <section id="home" >

                <div class="btn_armagyeddon">
                    <Link to="/" className="text-white font-weight-bold">                           
                            {/* <h1> Armagyeddon </h1> */}
                            {/* <h1><SidebarComponent></SidebarComponent>  </h1> */}
                            
                    </Link>
                </div>                
            
                <div className="container">                   
                           
                    {/* {
                        !this.props.isLoggedIn &&
                        <div className="button-group store-buttons d-flex">
                            <div>


                                <a><Link to="/home" className="text-white font-weight-bold">
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

                                <a><Link to="/contactus" className="text-white font-weight-bold">
                                    Contact
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

                        
                        
                    } */}

                    {
                    
                    //     this.props.isLoggedIn &&
                       
                    //    <div className="button-group store-buttons d-flex">
                    //         <div>
                    //             <a><Link to="/home" className="text-white font-weight-bold">
                    //                 Home
                    //             </Link></a><a></a><a></a>

                    //             <a><Link to="/about" className="text-white font-weight-bold">
                    //                 About 
                    //             </Link></a><a></a><a></a>

                    //             <a><Link to="/gye-list" className="text-white font-weight-bold">
                    //                 Gye
                    //             </Link></a><a></a><a></a>

                    //             {/* <a><Link to="/search" className="text-white font-weight-bold">
                    //                 Search
                    //              </Link></a><a></a><a></a><a></a>      */}

                    //             <a><Link to="/board" className="text-white font-weight-bold">
                    //                 Board
                    //             </Link></a><a></a><a></a>  

                    //             <a><Link to="/contactus" className="text-white font-weight-bold">
                    //                 Contact
                    //             </Link></a><a></a><a></a>                        
                                                       
                    //         </div> 
                            
                    //         <div class="btn_sign">

                    //             <a><Link to="/mypage" className="text-white font-weight-bold">
                    //                  My Page
                    //             </Link></a><a></a><a></a>

                    //             <a><Link to="/logout" className="text-white font-weight-bold"
                    //              onClick={this.handleLogout}>Logout
                    //             </Link></a><a></a><a></a>

                    //          </div>     
                                                                            
                    //     </div> 

                        
                    }                       
                    
                </div>     
                               
            </section>           
            
                <div>
                <MDBNavbar dark expand="md" fixed="top">
                    <MDBContainer>
                    <MDBNavbarBrand>
                        <span className="white-text"><h1><SidebarComponent></SidebarComponent>  </h1></span>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse")} />
                    <MDBCollapse id="navbarCollapse" isOpen={this.state.collapseID} navbar>
                        <MDBNavbarNav right>
                        <MyProfile></MyProfile>
                        </MDBNavbarNav>

                    </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>
                {this.state.collapseID && overlay}
                </div>
            
          
            </div> 
           
        );
    }
    
}

export default Header;