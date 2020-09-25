import React from 'react';
import GyeService from '../../services/GyeService';

class GyeCreateComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            period: 0,
            targetMoney: 0,
            totalMember: 0,
            type: '저축계',
            interest:0,
            state: 'wait',
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
        if(e.target.name === 'totalMember'){
            this.state.interest = e.target.value;
            console.log(e.target.value)

        }
    }

    handleSubmit(e) {
        console.log(this.state.title, this.state.period, 
            this.state.state, this.state.targetMoney, 
            this.state.totalMember, this.state.type, this.state.turn);
            
        GyeService
        .createGye(this.state.title, this.state.period, 
            this.state.state, this.state.targetMoney, 
            this.state.totalMember, this.state.type, this.state.turn)
        .then( response => {
            console.log(response.data);
            let id = response.data;
            this.props.history.push(`/gye/` + id);
            
        }).catch( error =>{
            
            console.log('register fail');
        });


        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        Title: 
                        <input type="text" name="title" value={this.state.title} 
                            onChange={this.handleChange}/>
                    </label>

                    <label>
                        Type:
                        <select name="type" value={this.state.type} onChange={this.handleChange}>

                            <option value="저축계">저축계</option>
                            <option value="낙찰계">낙찰계</option>

                        </select>

                    </label>
                    {/* 낙찰계를 고르면 이율을 보여줌 */}
                    {this.state.type === "낙찰계" &&

                    <label type="number" name="interest">

                        Interest: {this.state.interest}

                    </label>

                    }


                    <label>
                        Period: 
                        <input type="number" name="period" value={this.state.period} 
                            onChange={this.handleChange}/>
                    </label>
                    <label>
                        Target Money: 
                        <input type="number" name="targetMoney" value={this.state.targetMoney} 
                            onChange={this.handleChange}/>
                    </label>
                    <label>
                        Member: 
                        <input type="number" name="totalMember" value={this.state.totalMember} 
                            onChange={this.handleChange}/>
                    </label>
                    <label>
                        Turn: 
                        <input type="number" name="turn" value={this.state.turn} 
                            onChange={this.handleChange}/>
                    </label>

                    <input type="button" value="Submit" onClick={this.handleSubmit}/>
                </form>
            </div>
        );
    }
}

export default GyeCreateComponent;

