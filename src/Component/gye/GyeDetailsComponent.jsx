import React from 'react';
import GyeService from '../../services/GyeService';
import GyeJoinComponent from './GyeJoinComponent';
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
                <div>
                    <button className="btn btn-success">Join!</button>
                    <GyeJoinComponent gyeId={gye.id} />
                </div>
            </div>
             
        );
    }
}

export default GyeDetailsComponent;