import React, {Component} from 'react';
import AuthenticationService from '../../services/AuthenticationService.js';
import '../../static/css/agree.css';
import '../../static/css/login.css';

class RegisterForm extends Component {

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
                    <div className="register_card">
                        <div className="d-flex justify-content-center">
                            
                            <div className="brand_logo_container">
                                <img src="/images/icon2.png" className="brand_logo" alt="Logo"/>
                            </div>
                        </div>
                        

                        <div className="d-flex justify-content-center form_container" class="static">
                            
                        {/* <h1><br></br> </h1> */}
                        <h3 className="text-black mb-5 border-bottom pb-2" >Your Information</h3>

                            <div class="family">

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupFileAddon01">
                                            Upload
                                        </span>
                                    </div>
                                    <div className="custom-file">
                                            <input
                                            type="file"
                                            className="custom-file-input"
                                            id="inputGroupFile01"
                                            aria-describedby="inputGroupFileAddon01"
                                            />
                                            <label className="custom-file-label" htmlFor="inputGroupFile01">
                                            Choose file
                                            </label>
                                    </div>
                                </div>


                                <div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-append" >
                                            <span className="input-group-text">
                                                <i className="fas fa-user"></i>
                                            </span>
                                        </div>
                                        
                                        <input type="email" name="email"
                                               className="form-control input_user"

                                               placeholder="you@yourdomain.com"
                                               value={this.state.email}
                                               onChange={this.handleChange}/>
                                            
                                    </div>
                                </div>
                            

                            
                                <div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-append" >
                                            <span className="input-group-text">
                                                <i className="fas fa-user"></i>
                                            </span>
                                        </div>
                                        
                                        <input type="text" name="name" className="form-control input_user"
                                               placeholder="Name" value={this.state.name} onChange={this.handleChange} />
                                    </div>
                                </div>
                            


                            
                           
                                <div >
                                <div className="input-group mb-2">
                                    <div className="input-group-append">
                                        <div className="input-group-text"><i className="fas fa-key"></i></div>
                                    </div>
                                    <input type="password" name="password" className="form-control input_pass"
                                           placeholder="비밀번호" value={this.state.password}  onChange={this.handleChange} />
                                </div>
                                </div>
                           

                           
                                <div>
                                    <div className="input-group mb-2">
                                        <div className="input-group-append">
                                            <div className="input-group-text"><i className="fas fa-key"></i></div>
                                        </div>
                                        <input type="password" name="passwordChecker" className="form-control input_pass"
                                               placeholder="비밀번호 확인" value={this.state.passwordChecker} style={passwordCheckerColor} onChange={this.handleChange} />
                                    </div>
                                </div>

                                <div >
                                    <input className="btn btn-block btn-primary btn-md" type="button" value="Submit" onClick={this.handleSubmit}/>
                                </div>
                            </div>
                           
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

export default RegisterForm;