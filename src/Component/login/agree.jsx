import React, {Component} from 'react';
import AuthenticationService from '../../services/AuthenticationService.js';
import '../../static/css/agree.css';
import { Link } from "react-router-dom";

class agree extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            passwordChecker: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e) {
        this.setState(
            {
                [e.target.name]
                  :e.target.value
            }
        )
    }

    handleSubmit(e) {
        
        if(this.passwordIsSame()){
            AuthenticationService
            // get email, password at the form
            .executeUserRegister(this.state.email, this.state.password, 
                this.state.name)
            .then((response) => {
                console.log("register response: " + response.status);
                
                this.props.history.push(`/login`);
                
            }).catch( () =>{
                
                console.log('register fail');
            });

        } else {
            alert("password didn't match!");
        }

       

        e.preventDefault();
    }

    passwordIsSame() {
        if(this.state.password === this.state.passwordChecker) return true;
        else return false;
    }
    goToRegister(){
        console.log("fffff")
        window.location.href = '/RegisterForm'
        
    }
    render() {
        let divStyle = {
            textAlign: "center",
            color: "black"
        }
        let passwordCheckerColor;

        if(this.state.passwordChecker === '') 
            passwordCheckerColor =  {}
        else if(this.state.password === this.state.passwordChecker)
            passwordCheckerColor = {backgroundColor: '#33FF66'};
        else passwordCheckerColor = {backgroundColor: '#FF0000'};

        return(

            
            <div className="row mb-5">

                <div className="container h-100">
                    <div className="d-flex justify-content-center h-100">
                    <div className="agree_card">
                        <div className="d-flex justify-content-center">
                            
                            <div className="brand_logo_container">
                                <img src="/images/icon2.png" className="brand_logo" alt="Logo"/>
                            </div>
                        </div>
                        

                        <div className="d-flex justify-content-center form_container" class="static">                           
                
                        <h3 className="text-black mb-5 border-bottom pb-2" >Armagyeddon</h3>

                
                            <label class="agree">
                                <div>
                                <form action="" id="joinForm">
                                        <ul class="join_box">
                                            <li class="checkBox check01">
                                                <ul class="clearfix">
                                                    <li>이용약관, 개인정보 수집 및 이용,
                                                        위치정보 이용약관(선택), 프로모션 안내
                                                        메일 수신(선택)에 모두 동의합니다.</li>
                                                    <li class="checkAllBtn">
                                                        <input type="checkbox" name="chkAll" id="chk" class="chkAll"/>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="checkBox check02">
                                                <ul class="clearfix">
                                                    <li>이용약관 동의(필수)</li>
                                                    <li class="checkBtn">
                                                        <input type="checkbox" name="chk"/> 
                                                    </li>
                                                </ul>
                                                <textarea name="" id="">여러분을 환영합니다.
                                네이버 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를 제공하는 네이버 주식회사(이하 ‘네이버’)와 이를 이용하는 네이버 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 네이버 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
                                </textarea>
                                            </li>
                                            <li class="checkBox check03">
                                                <ul class="clearfix">
                                                    <li>개인정보 수집 및 이용에 대한 안내(필수)</li>
                                                    <li class="checkBtn">
                                                        <input type="checkbox" name="chk"/>
                                                    </li>
                                                </ul>
                            
                                                <textarea name="" id="">여러분을 환영합니다.
                                네이버 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를 제공하는 네이버 주식회사(이하 ‘네이버’)와 이를 이용하는 네이버 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 네이버 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
                                </textarea>
                                            </li>
                                            <li class="checkBox check03">
                                                <ul class="clearfix">
                                                    <li>위치정보 이용약관 동의(선택)</li>
                                                    <li class="checkBtn">
                                                        <input type="checkbox" name="chk"/>
                                                    </li>
                                                </ul>
                            
                                                <textarea name="" id="">여러분을 환영합니다.
                                 네이버 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를 제공하는 네이버 주식회사(이하 ‘네이버’)와 이를 이용하는 네이버 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 네이버 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
                                </textarea>
                                            </li>
                                            <li class="checkBox check04">
                                                <ul class="clearfix">
                                                    <li>이벤트 등 프로모션 알림 메일 수신(선택)</li>
                                                    <li class="checkBtn">
                                                        <input type="checkbox" name="chk"/>
                                                    </li>
                                                </ul>
                            
                                            </li>
                                        </ul>
                                        <ul class="footBtwrap clearfix">
                                            <li><button onClick='#' class="fpmgBt1">비동의</button></li>

                                            <li><button class="fpmgBt2" >동의</button></li>
                                           <li><Link to="/RegisterForm" className="btn btn-primary slide_left_alt">
                                                동의
                                            </Link></li> 
                                        </ul>
                                    </form>


                                
                
                                </div>
                            
                            </label>
                        </div>
                
                      
                    </div>
                    </div>
                </div>


                <div style={divStyle} className="col-lg-12">

                <div>

            </div>

            </div>
            </div>


        );
    }
}

export default agree;