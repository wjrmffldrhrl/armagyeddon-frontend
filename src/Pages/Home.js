import React from 'react';
import Friends from '../Pages/Friends';
import styles from '../static/css/index.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom';

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

                
                <div class="container">
                    <div class="row">
                        <div id="demo" class="carousel slide" data-ride="carousel">

                {/* <!-- Indicators --> */}
                <ul class="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" class="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>

                {/* <!-- The slideshow --> */}
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="images/cute.jpg" width="100%" alt="Los Angeles"/>
                    </div>
                    <div class="carousel-item">
                        <img src="images/soju.jpg" width="100%" alt="Chicago"/> 
                    </div>
                    <div class="carousel-item">
                        <img src="images/chippo.jpg" width="100%" alt="New York"/>
                    </div>
                </div>

                {/* <!-- Left and right controls --> */}
                <a class="carousel-control-prev" href="#demo" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#demo" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>

                </div>
                    </div>
                </div> 

             

                {/* <div className="container">
                    <div className="row"> 
                        <div className="col-lg-6 align-self-center text-center text-lg-left">
                            <blockquote>
                            <p>아마곗돈을 통해서 목돈 마련했어요! 여행자금으로 모으고 있는데 코로나19 끝나면 유럽갈거에요.</p>
                            <p><cite> JuHyun Lee</cite></p>
                            </blockquote>
                        </div>
                        <div className="col-lg-6 align-self-end text-center text-lg-right">
                            <img src="images/cute.jpg" alt="Image" className="img-fluid mb-0"/>
                        </div>
                    </div>
                    
                </div>  
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 align-self-center text-center text-lg-left">
                            <blockquote>
                            <p>&ldquo;돈 모으는 재미로 취준생활 이겨내고 있습니다. 취뽀해서 놀러갈거에요 ^__^&rdquo;</p>
                            <p><cite> &mdash; MinHyeok</cite></p>
                            </blockquote>
                        </div>
                    <div class="col-lg-6 align-self-end text-center text-lg-right">
                        <img src="images/chippo.jpg" alt="Image" class="img-fluid mb-0"/>
                    </div>
                    </div>
                </div> */}
 

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
                           
                              
                               
                           
                      
                    
               

     
          
            
            </div>
        );
    }
}

export default Index;