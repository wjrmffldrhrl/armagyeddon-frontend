import React from 'react';
import axios from 'axios';
import AuthenticationService from '../../services/AuthenticationService';
import styles from '../../static/css/login.css';

class PWSearchComponent extends React.Component {


    executeJwtAuthenticationService(email, password) {

        return axios.post('/authenticate', {
            email,
            password
        })
    }

    constructor(props) {
        super(props)
        
        this.state = {
            email: localStorage.getItem("authenticatedUser") || '',
            password: '',
            token: localStorage.getItem("token") || '',
            hasSearchFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.searchClicked = this.searchClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                :event.target.value
            }
        )
    }

    searchClicked() {

        AuthenticationService
        // get email, password at the form
        .executeJwtAuthenticationService(this.state.email, this.state.password)
        .then((response) => {
            console.log(response);
            this.setState({
                token: response.data.token
            });

        AuthenticationService.registerSuccessfulLoginForJwt(this.state.email,this.state.token);
        this.props.history.push(`/pwsearch`);
        this.props.userStateChange(AuthenticationService.isUserLoggedIn());
        }).catch( () =>{
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        
        }) 
    }
    

    render() {
        return(

            <div className="container h-100">
                <div className="d-flex justify-content-center h-100">
                    <div className="user_card">
                        <div className="d-flex justify-content-center">
                            <div className="brand_logo_container">
                                <img src="/images/icon2.png" className="brand_logo" alt="Logo"/>
                            </div>
                        </div>

                            {/* 이메일 입력창 */}
                            <div>
                                Email
                            <input type="email" name="email" className="form-control input_user" 
                                value={this.state.email} onChange={this.handleChange} placeholder="Email address"/>
                               
                                {/* 조회하기 버튼 */}
                                <div className="d-flex justify-content-center mt-3 login_container">
                                    <button className="btn login_btn" onClick={this.searchClicked}>조회하기</button>
                                </div>
                            </div>


                            {/* 비밀번호 입력창 */}

                            <div>
                                비밀번호
                            <input type="password" name="password" className="form-control input_pass" 
                                value={this.state.password} onChange={this.handleChange} placeholder="password"/>
                            </div>

                        

                    </div>
                </div>
            </div>
         
        );
    }
}

export default PWSearchComponent;