import React from 'react';
import GyeDetailsComponent from '../../Component/gye/GyeDetailsComponent';

class GyeDetails extends React.Component {



    render() {
        
        return (
             <div>
                 <h1>Gye Details</h1>
                 <GyeDetailsComponent id={this.props.match.params.id}/>
             </div>
        );
    }
}

export default GyeDetails;
