import React from 'react';
import GyeCreateComponent from '../../Component/gye/GyeCreateComponent';
class GyeCreate extends React.Component {
    render() {
        return (
             <div>
                 <h1>Create Gye</h1>
                 <GyeCreateComponent history={this.props.history}/>
             </div>
        );
    }
}

export default GyeCreate;