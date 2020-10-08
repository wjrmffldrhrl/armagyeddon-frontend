import React from 'react';
import GyeService from '../../services/GyeService';
import styles from '../../static/css/gye.css';
import classnames from "classnames";

import {
    Card,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane
  } from "reactstrap";
  

class GyeCreateComponent extends React.Component {


    state = {
        tabs: 1
      };
      toggleNavs = (e, state, index) => {
        e.preventDefault();
        this.setState({
          [state]: index
        });
      };
      render() {
        return (
          <>
            
          </>
        );
      }
    

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
        //토탈멤버랑 기간이랑 같이 올라가게
        if(e.target.name === 'totalMember'){
            this.state.period = e.target.value;
            console.log(e.target.value)
        }

        if(e.target.name === 'period'){
            this.state.totalMember = e.target.value;
            console.log(e.target.value)
        }


    }

    handleSubmit(e) {
        console.log(this.state.title, this.state.period, 
            this.state.state, this.state.targetMoney, 
            this.state.totalMember, this.state.interest, this.state.type, this.state.turn);


        GyeService
        .createGye(this.state.title, this.state.period,
            this.state.state, this.state.targetMoney, 
            this.state.totalMember, this.state.interest, this.state.type, this.state.turn)
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
            <div className="gyeform">


                <div className="nav-wrapper">
                    <Nav
                        className="nav-fill flex-column flex-md-row"
                        id="tabs-icons-text"
                        pills
                        role="tablist"
                    >
                        <NavItem>
                            <NavLink
                                aria-selected={this.state.tabs === 1}
                                className={classnames("mb-sm-3 mb-md-0", {
                                active: this.state.tabs === 1
                                })}
                                onClick={e => this.toggleNavs(e, "tabs", 1)}
                                href="#pablo"
                                role="tab"
                            >
                                <i className="ni ni-cloud-upload-96 mr-2" />
                                낙찰계
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                aria-selected={this.state.tabs === 2}
                                className={classnames("mb-sm-3 mb-md-0", {
                                active: this.state.tabs === 2
                                })}
                                onClick={e => this.toggleNavs(e, "tabs", 2)}
                                href="#pablo"
                                role="tab"
                            >
                                <i className="ni ni-bell-55 mr-2" />
                                저축계
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink 
                                aria-selected={this.state.tabs === 3}
                                className={classnames("mb-sm-3 mb-md-0", {
                                active: this.state.tabs === 3
                                })}
                                onClick={e => this.toggleNavs(e, "tabs", 3)}
                                href="#pablo"
                                role="tab"
                            >
                                <i className="ni ni-calendar-grid-58 mr-2" />
                                기부계
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>

                <Card className="shadow">
                    <CardBody className="cardbody">
                        <TabContent activeTab={"tabs" + this.state.tabs}>
                        <TabPane tabId="tabs1">
                            <p className="description">
                            <form>

                                <label>
                                    Type : 낙찰계                            
                                </label>

                                <div>

                                <label>
                                    Title : 
                                    <input type="text" name="title" value={this.state.title} 
                                        onChange={this.handleChange}/>
                                </label>

                                <br></br>

                                

                            
                                    <label>
                                        Interest : {this.state.interest}
                                    </label>

                                    {/* 낙찰계를 고르면 이율을 보여줌 */}
                                    {/* {this.state.type === "낙찰계" &&

                                        <label type="number" name="interest">
                                            
                                            Interest: {this.state.interest}
                                        

                                        </label>

                                    } */}
                                <br></br>

                                <label>
                                    Period : 
                                    <input type="number" name="period" value={this.state.period} 
                                        onChange={this.handleChange}/>
                                </label>

                                <label>
                                    Target Money : 
                                    <input type="number" name="targetMoney" value={this.state.targetMoney} 
                                        onChange={this.handleChange}/>
                                </label>

                                <label>
                                    Member : 
                                    <input type="number" name="totalMember" value={this.state.totalMember} 
                                        onChange={this.handleChange}/>
                                </label>

                                <label>
                                    Turn : 
                                    <input type="number" name="turn" value={this.state.turn} 
                                        onChange={this.handleChange}/>
                                </label>

                                </div>
                            </form>
                               
                            </p>
                        </TabPane>
                        <TabPane tabId="tabs2">
                            <p className="description">
                            <form>

                                <label>
                                    Type : 저축계                            
                                </label>

                                <div>

                                <label>
                                    Title : 
                                    <input type="text" name="title" value={this.state.title} 
                                        onChange={this.handleChange}/>
                                </label>

                                <br></br>


                                <label>
                                    Period : 
                                    <input type="number" name="period" value={this.state.period} 
                                        onChange={this.handleChange}/>
                                </label>

                                <label>
                                    Target Money : 
                                    <input type="number" name="targetMoney" value={this.state.targetMoney} 
                                        onChange={this.handleChange}/>
                                </label>

                                <label>
                                    Member : 
                                    <input type="number" name="totalMember" value={this.state.totalMember} 
                                        onChange={this.handleChange}/>
                                </label>

                                <label>
                                    Turn : 
                                    <input type="number" name="turn" value={this.state.turn} 
                                        onChange={this.handleChange}/>
                                </label>

                                </div>
                                </form>
                                
                            </p>
                        </TabPane>
                        <TabPane tabId="tabs3">
                            <p className="description">
                            <form>

                                <label>
                                    Type : 기부계                            
                                </label>

                                <div>

                                <label>
                                    Title : 
                                    <input type="text" name="title" value={this.state.title} 
                                        onChange={this.handleChange}/>
                                </label>

                                <br></br>


                                <label>
                                    Period : 
                                    <input type="number" name="period" value={this.state.period} 
                                        onChange={this.handleChange}/>
                                </label>

                                <label>
                                    Target Money : 
                                    <input type="number" name="targetMoney" value={this.state.targetMoney} 
                                        onChange={this.handleChange}/>
                                </label>

                                <label>
                                    Member : 
                                    <input type="number" name="totalMember" value={this.state.totalMember} 
                                        onChange={this.handleChange}/>
                                </label>

                                <label>
                                    Turn : 
                                    <input type="number" name="turn" value={this.state.turn} 
                                        onChange={this.handleChange}/>
                                </label>

                                </div>
                                </form>
                            </p>
                        </TabPane>
                        </TabContent>
                    </CardBody>
                </Card>

                <div>

                    <form className="button_type">    


                        <input className="buttontype" type="button" value="Submit" onClick={this.handleSubmit}/>

                    </form>

                </div>
            </div>
        );
    }
}

export default GyeCreateComponent;

