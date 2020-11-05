import React from 'react';
import GyeService from '../../services/GyeService';
import AuthenticationService from '../../services/AuthenticationService.js'
import ArmaTokenService from '../../services/ArmaTokenService';

class GyeManagementComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loggedInUser: AuthenticationService.getLoggedInUserEmail(),
            gye         : [],
            members     : [],
            gyeBalance  : ''
        };

        this.getBalance = this.getBalance.bind(this);
        this.handleSendToken = this.handleSendToken.bind(this);
    }


    componentDidMount() {
        this.getBalance();
    }

    getBalance() {
        let memberArray = [];
        GyeService.getGyeDetails(this.props.id)
            .then(response => {

                this.setState({gye: response.data});

                this.state.gye.members.forEach(member => {
                    let balance;
                    ArmaTokenService.getUserBalance(member.email).then(response => {
                        balance = response.data;

                        memberArray.push({
                            name   : member.name,
                            email  : member.email,
                            balance: balance
                        });
                        this.setState({members: memberArray});
                    });

                });

                console.log(this.state.gye);
                console.log(memberArray);

            })
            .catch(error => {

            });

        ArmaTokenService.getGyeBalance(this.props.id)
            .then(response => {
                this.setState({gyeBalance: response.data})
            })
            .catch(error => {

            });
    }
    

    handleSendToken(e) {
        console.log(e);
        ArmaTokenService.sendTokenToUser(e, this.state.gye.id, this.state.gyeBalance)
            .then(response => {
                console.log('send to ' + e);
            })
            .catch(error => {

            });
    }

    render() {
        let loggedinUser = this.state.loggedInUser;
        let gye = this.state.gye;
        let gyeBalance = this.state.gyeBalance;
        let memberBalance = this.state.members.map((member, index) =>
            <li key={index}> {member.name} : {member.balance}
                <button className="btn btn-success" value={member.email}
                        onClick={() => this.handleSendToken(member.email)}>send
                </button>
            </li>)
        return (
            <div>
                {loggedinUser !== gye.master && 'your not gye master'}
                {loggedinUser === gye.master &&
                <div>
                    <h2>Gye Balance</h2>
                    {gyeBalance}
                    <h2>User Balance</h2>
                    {memberBalance}
                    <button className="btn btn-success" onClick={this.handleCollect}>Collect</button>

                </div>

                }

            </div>
        );
    }
}

export default GyeManagementComponent;