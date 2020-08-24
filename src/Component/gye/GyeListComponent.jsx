import React from 'react';
import ResearchService from '../../services/ResearchService';
class GyeListComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            gyes : []
        };
    }

    componentDidMount() {
        ResearchService.getResearchList()
        .then(response => {
            this.setState({gyes: response.data});
        })
        .catch(error => {

        })
    }

    render() {
        let gyes = this.state.gyes;
        const listItem = gyes.map((gye) =>
            <li>{gye.title}</li>
        );


        return(
            <div>
                <h1>Gye List</h1>
                <ul>{listItem}</ul>
                
            </div>
        );
    }
}

export default GyeListComponent;