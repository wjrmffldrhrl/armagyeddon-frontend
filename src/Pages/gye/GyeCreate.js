import React from 'react';
import GyeCreateComponent from '../../Component/gye/GyeCreateComponent';
import styles from '../../static/css/gye.css';

class GyeCreate extends React.Component {
    render() {
        return (
             <div className="gyecreate">
                 <div className="gyetitle">
                 <h1>Create Gye</h1>

                 </div>
                 <hr></hr>
                 <GyeCreateComponent history={this.props.history}/>
             </div>
        );
    }
}

export default GyeCreate;