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

import { MDBRow, MDBCol, MDBIcon } from "mdbreact";
import { MDBBtnGroup, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";


import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import AnimationComponent from '../Component/home/AnimationComponent';
import GyeListComponent from '../Component/gye/GyeListComponent';
import { Fragment } from "react";
import { MDBBtn } from "mdbreact";



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

                <div>
                        <section>
                        <div className="howtouse">
                        <h2 className="h1-responsive font-weight-bold text-center my-5">
                                How to Use Armagyeddon?
                                </h2>
                        <Timeline align="alternate">
                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent><h4>Sign Up</h4></TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent><h4>Charge you Token</h4></TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent><h4>Create Gye</h4></TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineDot />
                            </TimelineSeparator>
                            <TimelineContent><h4>Start Your Gye</h4></TimelineContent>
                        </TimelineItem>
                        </Timeline>
                        </div>
                        </section>

                        <section>
                        <div className="gyelist">
                        <h2 className="h1-responsive font-weight-bold text-center my-5">
                                현재 운영되고 있는 계모임
                                </h2>
                                <GyeListComponent></GyeListComponent>
                                
                                <div className="button_more">
                                <MDBRow>
                                <MDBCol md='12' className="mb-4">
                                <MDBBtnGroup size="lg">                                   
                                    <MDBBtn className="button_more" gradient="purple" href="/gye-list">더 알아보기</MDBBtn>                                    
                                </MDBBtnGroup>
                                </MDBCol>
                                </MDBRow>
                                </div>

                        </div>


                        </section>

                <section className="my-5">
                    <div className="whysogreat">
                    <h2 className="h1-responsive font-weight-bold text-center my-5">
                        Why is it so great?
                        </h2>
                    {/* <p className="lead grey-text w-responsive text-center mx-auto mb-5">
                        왜 아마곗돈을 사용할까요?
                        </p> */}

                    <div className="main_card">
                    <MDBRow>
                        <MDBCol md="3">
                        <MDBRow className="mb-3">
                            <MDBCol size="2">
                            <MDBIcon
                                icon="flag-checkered"
                                size="2x"
                                className="deep-purple-text"
                            />
                            </MDBCol>
                            <MDBCol size="10">
                            <h5 className="font-weight-bold mb-3">International</h5>
                            <p className="grey-text">
                                아마토큰 결제로 전세계 회원이 가능해요.
                                </p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className="mb-3">
                            <MDBCol size="2">
                            <MDBIcon icon="flask" size="2x" className="deep-purple-text" />
                            </MDBCol>
                            <MDBCol size="10">
                            <h5 className="font-weight-bold mb-3">Experimental</h5>
                            <p className="grey-text">
                                블록체인 신기술을 활용한 안전한 서비스.
                                </p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className="mb-3">
                            <MDBCol size="2">
                            <MDBIcon icon="glass-martini" size="2x" className="deep-purple-text" />
                            </MDBCol>
                            <MDBCol size="10">
                            <h5 className="font-weight-bold mb-3">Relaxing</h5>
                            <p className="grey-text">
                                사회적 거리두기에도 사람들과 커뮤니티가 가능해요.
                                </p>
                            </MDBCol>
                        </MDBRow>
                        </MDBCol>
                        
                        <MDBCol md="4" className="text-name">
                        <img
                            className="img-fluid"
                            src="images/icon.png"
                            alt=""
                        />
                        </MDBCol>
                      
                        <MDBCol md="4">
                        <MDBRow className="mb-3">
                            <MDBCol size="2">
                            <MDBIcon icon="heart" size="2x" className="deep-purple-text" />
                            </MDBCol>
                            <MDBCol size="10">
                            <h5 className="font-weight-bold mb-3">Beloved</h5>
                            <p className="grey-text">
                                모든 회원들이 사랑하는 아마곗돈 서비스.
                                </p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className="mb-3">
                            <MDBCol size="2">
                            <MDBIcon icon="bolt" size="3x" className="deep-purple-text" />
                            </MDBCol>
                            <MDBCol size="10">
                            <h5 className="font-weight-bold mb-3">Rapid</h5>
                            <p className="grey-text">
                                빠르게 성장하고 있는 아마곗돈 서비스.
                                </p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className="mb-3">
                            <MDBCol size="2">
                            <MDBIcon icon="magic" size="2x" className="deep-purple-text" />
                            </MDBCol>
                            <MDBCol size="10">
                            <h5 className="font-weight-bold mb-3">Magical</h5>
                            <p className="grey-text">
                                원하는 이자율과 순번 선택이 가능해요.
                                </p>
                            </MDBCol>
                        </MDBRow>
                        </MDBCol>
                       
                    </MDBRow>
                    </div>
                    </div>
                </section>


                </div>

                <section>
                        <div className="feedback_user">
                        <h3 className="h1-responsive font-weight-bold text-center my-5">
                                아마곗돈 이용 후기
                                </h3>
                            <AnimationComponent></AnimationComponent>                                
                        </div>
                </section>


                <div>
                <FriendsComponent></FriendsComponent>
                
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