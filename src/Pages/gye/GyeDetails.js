import React from 'react';
import GyeDetailsComponent from '../../Component/gye/GyeDetailsComponent';
import { Link } from "react-router-dom";
import styles from '../../static/css/gye.css';


class GyeDetails extends React.Component {


    render() {
        
        return (
             <div className="gyedetails">

                 <div className="gyetitle">
                 <h1>Gye Details</h1>

                 </div>
                 <GyeDetailsComponent id={this.props.match.params.id}/>

                <div>
                 <Link to={"/management-gye/" + this.props.match.params.id} 
                    className="btn btn-success">Management</Link>
                </div>
             </div>
        );
    }
}

export default GyeDetails;
