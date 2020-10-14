import React from 'react';
import Friends from '../Pages/Friends';
import styles from '../static/css/index.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom';
import FriendsComponent from '../Component/home/FriendsComponet';
import MainpageComponent from '../Component/home/MainpageComponent';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css'



class Index extends React.Component {
    render() {
        return(
            <div>
               
                <div id="home" className="section bg-voilet bg-overlay overflow-hidden d-flex align-items-center">
                    <div className="container">
                    
                        <div className="row align-items-center">
                            
                            <div className="col-12 col-md-7 col-lg-6">
                                <div className="home-intro">
                                    
                                    <h1 className="text-white">당신의 계모임을 만들어봐요!</h1>
                                    <p className="text-white my-4">블록체인 기반 계모임 플렛폼 Aramagyeddon에서 당신의 안전한 계모임을 생성하고 사람들을 모아보세요 변경 불가능한 장부를 자동으로 생성하여 여러분의 곗돈을 안전하게 지켜드립니다.</p>
        
                                    
                                    <span className="d-inline-block text-white fw-3 font-italic mt-3"></span>
                                </div>
                            </div>
                            <div className="col-12 col-md-5 col-lg-6">
                                
                                <div className="home-thumb mx-auto" >

                                    <img src="/images/asteroid.svg" id="armagyeddon" alt=""/>
                
                                </div>

                            </div>
                        </div>
                    </div>
 
                 
                </div> 

                <div className="container">

                    <div className="content">
                        <h3> 아마곗돈은요</h3>

                       
                        <figure className="figure">
                        <img src="/images/id.png" className="figure-img img-fluid z-depth-1"
                        alt="" style={{width: '300px'}} />
                        <figcaption className="figure-caption">
                         <h4>계주와 계원의 신원보증</h4>
                        </figcaption>
                        </figure>
                                            
                        <figure className="figure">
                        <img src="/images/rates.png" className="figure-img img-fluid z-depth-1"
                        alt="" style={{width: '300px'}} />
                        <figcaption className="figure-caption">
                        <h4>금융기관보다 높은 이자율</h4>
                        </figcaption>
                        </figure>

                        <figure className="figure">
                        <img src="/images/tokenchange.png" className="figure-img img-fluid z-depth-1"
                        alt="" style={{width: '300px'}} />
                        <figcaption className="figure-caption">
                        <h4>간편한 토큰 결제</h4> 
                        </figcaption>
                        </figure>


                    </div>


                </div>

                <div className="middlebox">


                </div>
{/* 
                <div>
                       
                    
                </div>

                <div>
                    <MainpageComponent></MainpageComponent>    
                </div>  

                <div>

                    <FriendsComponent>메롱메롱</FriendsComponent>

                </div>                                   */}
             

       
 
                {/* <div class="logoplustext">
                    <div class="text-center">               
                                <h2 class="section-title mb-2">아마곗돈 제휴업체</h2>
                                <p class="lead">아마곗돈 회원이라면 아마토큰으로 특가를 누리세요 </p>
                    </div>

                    <div class="container_logo">                  
                            
                    
                            <div>
                                <img src="images/logo_paypal.svg" alt="Image" class="logo 1"/>
                                <img src="images/logo_stripe.svg" alt="Image" class="logo 2"/>
                                <img src="images/logo_apple.svg" alt="Image" class="logo 3"/>
                                
                            </div>
                            <div>
                                <img src="images/logo_tinder.svg" alt="Image" class="logo 4"/>
                                <img src="images/fninnoedu.png" alt="Image" class="logo 5"/>
                                <img src="images/logo_airbnb.svg" alt="Image" class="logo 6"/>
                                
                            </div>
                            
                        
                        
                    </div>                       
                </div>               */}
                
            </div>
        );
    }
}

export default Index;