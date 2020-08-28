import React from 'react';
import GyeService from '../../services/GyeService';
class GyeDetailsComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            gye : []
        };
    }

    componentDidMount() {
        GyeService.getGyeDetails(this.props.id)
        .then(response => {
            this.setState({gye: response.data});
        })
        .catch(error => {

        })
    }

    render() {
        let gye = this.state.gye;
        
        return (
             <div>
                 <h1>{gye.title}</h1>
                 <h2>Gye Mater : {gye.master}</h2>
                 <p>Type : {gye.type}</p>
                 <p>Target Money : {gye.targetMoney}</p>
                 <p>Total Member : {gye.totalMember}</p>
                 <p>Period : {gye.period}month</p>
                 
             </div>
        );
    }
}

export default GyeDetailsComponent;