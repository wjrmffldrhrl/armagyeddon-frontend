import React from 'react';
import Friends from '../Pages/Friends';

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

               
               
{/* 
                <section id="stats" className="py-3">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-5 col-sm-3 text-center">
                                <h1 className="text-voilet"><b>3M</b></h1>
                                <div className="mb-3"></div>
                                <h5>Users</h5>
                            </div>
                            <div className="col-5 col-sm-3 text-center">
                                <h1 className="text-voilet"><b>3M</b></h1>
                                <div className="mb-3"></div>
                                <h5>Users</h5>
                            </div>
                            <div className="col-5 col-sm-3 text-center">
                                <h1 className="text-voilet"><b>3M</b></h1>
                                <div className="mb-3"></div>
                                <h5>Users</h5>
                            </div>
                            <div className="col-5 col-sm-3 text-center">
                                <h1 className="text-voilet"><b>3M</b></h1>
                                <div className="mb-3"></div>
                                <h5>Users</h5>
                            </div>

                        </div>
                    </div>
                </section>
                <section id="features" className="py-5 ">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-12 col-md-10 col-lg-7 section-heading text-center">
                                <h5 className="text-voilet mb-4">Premium Features</h5>
                                <h2>What Makes sApp Different?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                            </div>

                        </div>

                        <div className="row justify-content-center text-center">
                            <div className="col-12 col-md-6 col-lg-4">
                                <i className="fa fa-bicycle fa-4x text-voilet"></i>
                                <h3 className="mb-2">Fully functional</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.</p>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <i className="fa fa-phone fa-4x text-success"></i>
                                <h3 className="mb-2">Fully functional</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.</p>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <i className="fa fa-coffee fa-4x text-voilet"></i>
                                <h3 className="mb-2">Fully functional</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.</p>
                            </div>
                        </div>
                    </div>
                </section> */}
                <section id="services" className=" ">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-12 col-lg-6 ">
                                <h2 className="mb-4">블록체인 기반의 계모임 플랫폼</h2>
                                <ul className="list-unstyled">
                                    <li><p>아마곗돈 회원들이 결제한 자산은</p></li>
                                    <li><p>아마곗돈이 ERC20을 활용해 만든 ‘아마토큰’ 으로 전환되며</p></li>
                                    <li><p>계 참여와 동시에 곗돈 납부 및 수량 정보가 블록체인에 등록</p></li>
                                    
                                </ul>
                            </div>
                            <div className="col-12 col-lg-4 order-1 order-lg-2 d-none d-lg-block">
                                <div className="home-thumb mx-auto">
                                    <img src="/images/blockchain1.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="info" className=" py-5 ">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-12 col-lg-6 ">
                                <div className="mx-auto">
                                    <img src="/images/rates.png" alt="" />
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 ">
                                <h2 className="mb-4">원하는 이자율과 순번 선택으로 </h2>
                                <h2 className="mb-4">목적에 맞는 목표액 수령이 가능</h2>
                                
                               
                                <ul>
                                    <li><p>1. 앞 순번 : 금융기관의 이자율보다 낮기 때문에 급전이 필요한 경우에 선택</p></li>
                                    <li><p>2. 중간 순번 : 핀테크 서비스인 만큼 세금 지출로 목표 금액이 낮아지지 않음</p></li>
                                    <li><p>3. 뒷 순번 : 높은 이자율로 앞 순번의 회원들보다 높은 목표액 수령</p></li>                                    
                                </ul>
                            </div>

                        </div>
                    </div>
                </section>
                {/* <section id="features" className="py-5 bg-voilet text-white">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-12 col-md-10 col-lg-7 section-heading text-center">
                                <h5 className="text-voilet mb-4">Premium Features</h5>
                                <h2>What Makes sApp Different?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                            </div>

                        </div>

                        <div className="row justify-content-center text-center">
                            <div className="col-12 col-md-6 col-lg-4">
                                <i className="fa fa-bicycle fa-4x text-white"></i>
                                <h3 className="mb-2">Fully functional</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.</p>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <i className="fa fa-phone fa-4x text-white"></i>
                                <h3 className="mb-2">Fully functional</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.</p>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <i className="fa fa-coffee fa-4x text-white"></i>
                                <h3 className="mb-2">Fully functional</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.</p>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* <section id="features" className="py-5">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-12 col-md-10 col-lg-7 section-heading text-center">
                            <h5 className="text-voilet mb-4">Premium Features</h5>
                            <h2>Frequently Asked Questions</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                        </div>

                    </div>
                    <div className="row mb-5">
                        <div className="col-12 col-md-6">
                            <div className="faq-items">
                                <h4> How to install sApp?</h4>
                                <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
                            </div>
                            <div className="faq-items">
                                <h4> How to install sApp?</h4>
                                <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
                            </div>
                            <div className="faq-items">
                                <h4> How to install sApp?</h4>
                                <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 justify-content-center">
                            <div className="faq-items">
                                <h4> How to install sApp?</h4>
                                <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
                            </div>
                            <div className="faq-items">
                                <h4> How to install sApp?</h4>
                                <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
                            </div>
                            <div className="faq-items">
                                <h4> How to install sApp?</h4>
                                <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
                            </div>
                        </div>

                    </div>


                </div>
            </section> */}
          
            
            </div>
        );
    }
}

export default Index;