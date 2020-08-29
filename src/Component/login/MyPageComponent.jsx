import React, {Component} from 'react'

import AuthenticationService from '../../services/AuthenticationService.js'
import InfoService from '../../services/InfoService';
import ArmaTokenService from '../../services/ArmaTokenService';
class MyPageComponent extends Component {
    
    constructor(props) {
        super(props)
       
        this.state = {
            welcomeMessage : '',
            loggedInUser : AuthenticationService.getLoggedInUserEmail(),
            info : '',
            balance : '',
            amount : 0,
            chargingMessage : ''
        };

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
        ArmaTokenService.getBalance(this.state.loggedInUser)
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



    handleChange(e) {
        this.setState(
            {
                [e.target.name]
                  :e.target.value
            }
        )
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
