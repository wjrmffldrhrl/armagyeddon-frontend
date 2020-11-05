import React from 'react';
import GyeService from '../../services/GyeService';
import GyeJoinComponent from './GyeJoinComponent';
import styles from '../../static/css/gye.css'
import { Component } from "react";
import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";


class GyeDetailsComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            gye : [],
            members : []
        };
    }

    state = {
        activeItem: "1"
      };
  
      toggle = tab => e => {
        if (this.state.activeItem !== tab) {
          this.setState({
            activeItem: tab
          });
        }
      };
  

    componentDidMount() {

       
        GyeService.getGyeDetails(this.props.id)
        .then(response => {
            
            this.setState({gye: response.data});
            this.setState({members: this.state.gye.members});
  
            console.log(this.state.gye);
            console.log(this.state.members);
        })
        .catch(error => {

        });
    }

    render() {
        let gye = this.state.gye;
        const memberList = this.state.members.map((member, index) =>
            <p><li key={index}>순서 {member.turn}번 : {member.email} : {member.name} </li></p>)
        return (

            <div>
                <hr></hr>

                <div class="mb-5 text-center">
                <div class="detail">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-12">
                            <div class="mb-5 text-center">
                                <h1 class="text-black font-weight-bold">아마곗돈 계모임</h1>                                
                                <p></p>
                                <p>원하시는 계에 원하는 turn으로 참여해보세요</p>
                                <p>변경 불가능한 장부를 자동으로 생성하여 여러분의 곗돈을 안전하게 지켜드립니다.</p>

                            </div>

                            <hr></hr>

                            <MDBContainer>
                            <MDBNav className="nav-tabs mt-5">
                            <MDBNavItem>
                                <MDBNavLink link to="#" active={this.state.activeItem === "1"} onClick={this.toggle("1")} role="tab" >
                                계 정보
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink link to="#" active={this.state.activeItem === "2"} onClick={this.toggle("2")} role="tab" >
                                계원 정보
                                </MDBNavLink>
                            </MDBNavItem>
                           
                            </MDBNav>
                            <MDBTabContent activeItem={this.state.activeItem} >
                            <MDBTabPane tabId="1" role="tabpanel">
                                <p className="mt-2">
                                 <div>
                                    
                                    <h2>Gye Master : {gye.master}</h2>
                                    <p>Type : {gye.type}</p>
                                    <p>Target Money : {gye.targetMoney}</p>
                                    <p>Total Member : {gye.totalMember}</p>
                                    <p>Period : {gye.period} month</p>

                                     {/*낙찰계일 때 이율 보여줌 */}
                                    {gye.type === "낙찰계" &&
                                    <p>Interest : {gye.interest} %</p>
                                    }

                                 </div>

                                </p>
                            </MDBTabPane>
                            <MDBTabPane tabId="2" role="tabpanel">
                                <p className="mt-2">
                               
                                    <div>

                                    <h2>Member List</h2>
                                    <p>{memberList}</p> 
                                    
                                   
                                    </div>

                                
                                </p>
                            </MDBTabPane>
                            
                            </MDBTabContent>
                        </MDBContainer>
                  

                            {/* <div class="mb-5 text-center">
                            <h2 class="text-black font-weight-bold">{gye.title}</h2>
                            <h2>Gye Master : {gye.master}</h2>
                            <p>Type : {gye.type}</p>
                            <p>Target Money : {gye.targetMoney}</p>
                            <p>Total Member : {gye.totalMember}</p>
                            <p>Period : {gye.period} month</p> */}

                            {/*낙찰계일 때 이율 보여줌 */}
                            {/* {gye.type === "낙찰계" &&
                            <p>Interest : {gye.interest} %</p>
                            }

                            <h2>Member List</h2>
                            <ul>{memberList}</ul> 
                             */}
                            <div>
                                <button className="btn btn-success">Join!</button>
                                <GyeJoinComponent gyeId={gye.id} />
                            </div>

                            </div>
                            <hr></hr>

                     
                    </div>
                </div>
                </div>
            </div>

            
            // <div>
            //     <div className="gyedetailform">
            //         <h1>{gye.title}</h1>
            //         <h2>Gye Master : {gye.master}</h2>
            //         <p>Type : {gye.type}</p>
            //         <p>Target Money : {gye.targetMoney}</p>
            //         <p>Total Member : {gye.totalMember}</p>
            //         <p>Period : {gye.period} month</p>

            //         {/*낙찰계일 때 이율 보여줌 */}
            //         {gye.type === "낙찰계" &&
            //         <p>Interest : {gye.interest} %</p>
            //         }

            //         <h2>Member List</h2>
            //         <ul>{memberList}</ul> 
                    
            //         <div>
            //             <button className="btn btn-success">Join!</button>
            //             <GyeJoinComponent gyeId={gye.id} />
            //         </div>
            //     </div>
            // </div>
             
        );
    }
}

export default GyeDetailsComponent;