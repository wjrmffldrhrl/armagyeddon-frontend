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
                 <h2>{this.props.id}</h2>
                 <p>{gye.body}</p>
             </div>
        );
    }
}

export default GyeDetailsComponent;