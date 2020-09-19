import React, {Component} from 'react';
import AuthenticationService from '../../services/AuthenticationService.js';


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

                <div style={divStyle} className="col-lg-12">

                    <div >
                        <h1>Register</h1>
                        <h3 className="text-black mb-5 border-bottom pb-2" >Your Information</h3>


                    </div>
                    <form>
                    
                    
                        <div>
                        <label>
                            Email: 
                            <input type="email" name="email" placeholder="you@yourdomain.com" value={this.state.email} 
                                onChange={this.handleChange}/>
                        </label>
                        </div>

                        <div>
                        <label>
                            name: 
                            <input type="text" name="name" placeholder="Name" value={this.state.name} 
                                onChange={this.handleChange}/>
                        </label>
                        </div>

                        <div>
                        <label>
                            password
                            <input type="password" name="password" placeholder="비밀번호" value={this.state.password} 
                                onChange={this.handleChange}/>
                        </label>
                        </div>

                        <div>
                        <label>
                            password check
                            <input type="password" name="passwordChecker"  placeholder="비밀번호 확인" value={this.state.passwordChecker}
                                onChange={this.handleChange} style={passwordCheckerColor}></input>
                        </label>

                        <div style={divStyle} className="col-1">
                            <input type="button" className="btn btn-block btn-primary btn-md" value="Submit" onClick={this.handleSubmit}/>
                        </div>

                    </div>
                    </form>
                <div>

                <form className="p-4 p-md-5 border rounded" method="post">
                   
               </form>
            </div>

            </div>
            </div>


        );
    }
}

export default RegisterForm;