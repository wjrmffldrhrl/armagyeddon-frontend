import React from 'react';
import GyeService from '../../services/GyeService';

class GyeJoinComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            turn: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState(
            {
                [e.target.name]
                  :e.target.value
            }
        )
    }

    handleSubmit(e) {
        
        GyeService
        .joinGye(this.props.gyeId, this.state.turn)
        .then( response => {
            
            alert('join!');
            

        }).catch( error =>{
            
            alert('fail!');
        });


        e.preventDefault();
    }

    render() {
        return (
            <div>
                turn <input type="number" name="turn"
                    value={this.state.turn} onChange={this.handleChange}/>
                <input type="button" value="Submit" onClick={this.handleSubmit}/>
            </div>
        );
    }
}

export default GyeJoinComponent;