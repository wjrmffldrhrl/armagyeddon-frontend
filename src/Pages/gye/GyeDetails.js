import React from 'react';
import GyeDetailsComponent from '../../Component/gye/GyeDetailsComponent';
import { Link } from "react-router-dom";
class GyeDetails extends React.Component {



    render() {
        
        return (
             <div>
                 <h1>Gye Details</h1>
                 <Link to={"/management-gye/" + this.props.match.params.id} 
                    className="btn btn-success">Management</Link>
                 <GyeDetailsComponent id={this.props.match.params.id}/>

             </div>
        );
    }
}

export default GyeDetails;
