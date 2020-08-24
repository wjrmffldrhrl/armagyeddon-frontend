import React from 'react';
import GyeService from '../../services/GyeService';

class GyeListComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            gyes : []
        };
    }

    componentDidMount() {
        GyeService.getGyeList()
        .then(response => {
            this.setState({gyes: response.data});
        })
        .catch(error => {

        })
    }

    render() {
        let gyes = this.state.gyes;
        const listItem = gyes.map((gye) =>
            <li><a href={'/gye/' + gye.id}>{gye.title}</a></li>
        );


        return(
            <div>
                
                <ul>{listItem}</ul>
                
            </div>
        );
    }
}

export default GyeListComponent;