import React from 'react';
import GyeListComponent from '../../Component/gye/GyeListComponent';
import GyeSearchComponent from '../../Component/gye/GyeSearchComponent';

import { Link } from "react-router-dom";
import style from '../../static/css/gye.css';


class GyeList extends React.Component {
    render() {
        return (
             <div class='gyelist'>

                
                <GyeSearchComponent></GyeSearchComponent>

                <hr></hr>
                <div class='gyetitle'>

                    <h1>Armagyeddon Gye List                    
                    <Link to="/create-gye" className="btn btn-success">create gye</Link></h1>
                </div>
                
                <GyeListComponent/>


             </div>
        );
    }
}

export default GyeList;