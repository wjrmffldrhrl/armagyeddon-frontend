import React from 'react';
import GyeService from '../../services/GyeService';
import AuthenticationService from '../../services/AuthenticationService.js'
import ArmaTokenService from '../../services/ArmaTokenService';
class GyeManagementComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loggedInUser : AuthenticationService.getLoggedInUserEmail(),
            gye : [],
            members : []
        };
    }

    componentDidMount() {
        let memberArray = [];
        GyeService.getGyeDetails(this.props.id)
        .then(response => {
            
            this.setState({gye: response.data});
            
            this.state.gye.members.forEach(member => {
                let balance;
                ArmaTokenService.getBalance(member.email).then( response => {
                    balance = response.data;
                    
                    memberArray.push({name : member.name, 
                        email : member.email,
                        balance : balance});
                    this.setState({members: memberArray});
                });
                
            });
 
            console.log(this.state.gye);
            console.log(this.state.members);
            console.log(memberArray);
            
        })
        .catch(error => {

        });

    }

    render() {
        let loggedinUser = this.state.loggedInUser;
        let gye = this.state.gye;
        let memberBalance = this.state.members.map( (member, index) => 
            <li key={index}> {member.name} : {member.balance}</li>)
        return (
            <div>
                { loggedinUser !== gye.master && 'your not gye master'}
                { loggedinUser === gye.master && 
                    <div>{memberBalance}</div>
                }
                
            </div>
        );
    }
}

export default GyeManagementComponent;