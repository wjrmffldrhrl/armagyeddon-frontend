import React from 'react';
import GyeListComponent from '../../Component/gye/GyeListComponent';
import { Link } from "react-router-dom";
class GyeList extends React.Component {
    render() {
        return (
             <div>

                 <h1>Gye List</h1>
                 <Link to="/create-gye" className="btn btn-success">create gye</Link>
                 <GyeListComponent/>
             </div>
        );
    }
}

export default GyeList;