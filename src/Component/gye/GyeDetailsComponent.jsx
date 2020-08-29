import React from 'react';
import GyeService from '../../services/GyeService';
class GyeDetailsComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            gye : [],
            members : []
        };
    }

    componentDidMount() {
        GyeService.getGyeDetails(this.props.id)
        .then(response => {
            
            this.setState({gye: response.data});
            this.setState({members: this.state.gye.members});
  
            console.log(this.state.gye);
            console.log(this.state.members);
        })
        .catch(error => {

        });
    }

    render() {
        let gye = this.state.gye;
        const memberList = this.state.members.map((member, index) =>
            <li key={index}>{member.email} : {member.name} </li>)
        return (
             <div>
                <h1>{gye.title}</h1>
                <h2>Gye Mater : {gye.master}</h2>
                <p>Type : {gye.type}</p>
                <p>Target Money : {gye.targetMoney}</p>
                <p>Total Member : {gye.totalMember}</p>
                <p>Period : {gye.period}month</p>

                <h2>Member List</h2>
                <ul>{memberList}</ul> 
                 
             </div>
        );
    }
}

export default GyeDetailsComponent;