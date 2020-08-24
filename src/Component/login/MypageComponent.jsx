import React, {Component} from 'react'

import AuthenticationService from '../../services/AuthenticationService.js'
import InfoService from '../../services/InfoService';
import ArmaTokenService from '../../services/ArmaTokenService';
class MyPageComponent extends Component {
    
    constructor(props) {
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.state = {
            welcomeMessage : '',
            loggedInUser : AuthenticationService.getLoggedInUserEmail(),
            info : '',
            balance : '',
            amount : 0,
            chargingMessage : ''
        };
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
        this.handleError = this.handleError.bind(this);
        this.getBalance = this.getBalance.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.chargeToken = this.chargeToken.bind(this);
    }

    componentDidMount() {
        InfoService.getUserInfo(this.state.loggedInUser)
        .then(response => {
            console.log(response.data);
            this.setState({info : response.data});
        }).catch(error => {
            console.log(error);
        });

        this.getBalance();

    }

    getBalance() {
        ArmaTokenService.getBalance()
        .then(response => {
            console.log('response.data :>> ', response.data);
            this.setState({balance: response.data});
        }).catch(error => {
            console.log(error);
        })
    }

    chargeToken() {
        this.setState({
            chargingMessage: 'charging...',
            amount: 0
        });
        ArmaTokenService.chargeToken(this.state.amount)
        .then(response => {
            this.getBalance();
            this.setState({
                chargingMessage: 'Done!'
            });
        }).catch(error => {
            console.log(error);
            this.setState({
                chargingMessage: 'ERROR!!'
            });
        })
    }


    retrieveWelcomeMessage() {
        
        AuthenticationService.executeHelloService()
        .then( response => this.handleSuccessfulResponse(response) )
        .catch( error => this.handleError(error) )
    }

    handleChange(e) {
        this.setState(
            {
                [e.target.name]
                  :e.target.value
            }
        )
    }


    handleSuccessfulResponse(response) {
        console.log(response)
        this.setState({welcomeMessage: response.data})
    }

    handleError(error) {
        console.log(error.response)
        let errorMessage = '';
        
        if(error.message) 
            errorMessage += error.message

        if(error.response && error.response.data) {
            errorMessage += error.response.data.message
        }

        this.setState({welcomeMessage: errorMessage})
    }

    
    render() {
        let userInfo = this.state.info;
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome
                </div>
                    {
                        userInfo && <div>
                            <p>name : {userInfo.name}</p>
                            <p>email : {userInfo.email}</p>
                            
                        </div>

                    }
                    {
                        !userInfo && <div>
                            Loading....
                        </div>
                    }
                <div className="container">
                    Check if axiosInterceptors is working well!<br></br>
                    <button onClick={this.retrieveWelcomeMessage} 
                        className="btn btn-success">Get Message</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
                <div>
                    Balance : {this.state.balance}
                    <button onClick={this.getBalance}
                        className="btn btn-success">Get Balance</button>
                </div>
                <div>
                    Charge Token <input type="number" name="amount" 
                    value={this.state.amount} onChange={this.handleChange}/>
                    <button onClick={this.chargeToken}
                        className="btn btn-success">Charge</button>
                    {this.state.chargingMessage}
                </div>
                
            </>
        )        
    }
}


export default MyPageComponent;