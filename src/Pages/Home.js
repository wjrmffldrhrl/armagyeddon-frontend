import React from 'react';
import Friends from '../Pages/Friends';
import styles from '../static/css/index.css';

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

                <div class="col-12 text-center mt-4 mb-5">
                    <div class="row justify-content-center">
                        <div class="company">               
                            <h2 class="section-title mb-2">아마곗돈 제휴업체</h2>
                            <p class="lead">아마곗돈 회원이라면 아마토큰으로 특가를 누리세요 </p>
                        </div>
                    </div>
                    <div class="container_logo">
                        <div class="col-6 col-lg-3 col-md-6">
                        <img src="images/logo_mailchimp.svg" alt="Image" class="img-fluid logo-1"/>
                    
                        <img src="images/logo_paypal.svg" alt="Image" class="img-fluid logo-2"/>
                        </div>
                    </div>
                    
                </div>        
                           
                              
                               
                           
                      
                    
               

     
          
            
            </div>
        );
    }
}

export default Index;