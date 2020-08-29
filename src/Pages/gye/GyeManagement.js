import React from 'react';
import GyeManagementComponent from '../../Component/gye/GyeManagementComponent';
class GyeManagement extends React.Component {
    render() {
        return (
            <div>
                <h1>Gye Management</h1>      
                <GyeManagementComponent id={this.props.match.params.id}/>
            </div>
        );
    }
}

export default GyeManagement;