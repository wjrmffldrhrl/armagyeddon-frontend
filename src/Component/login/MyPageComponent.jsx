import React, {Component} from 'react'
import AuthenticationService from '../../services/AuthenticationService.js'
import InfoService from '../../services/InfoService';
import ArmaTokenService from '../../services/ArmaTokenService';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import style from '../../static/css/mypage.css';

class MyPageComponent extends Component {
    
    constructor(props) {
        super(props)
       
        this.state = {
            welcomeMessage : '',
            loggedInUser : AuthenticationService.getLoggedInUserEmail(),
            info : '',
            balance : '',
            amount : 0,
            chargingMessage : '',
            myGyeList: []
        };

        this.getBalance = this.getBalance.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.chargeToken = this.chargeToken.bind(this);
    }


    componentDidMount() {
        InfoService.getUserInfo(this.state.loggedInUser)
        .then(response => {
            console.log(response.data);
            this.setState({info : response.data});
        }).catch(error => {
            console.log(error);
        });

        
        this.getBalance();
        this.getMyGyeList();

    }

    getMyGyeList() {
        InfoService.getMyGyeList(this.state.loggedInUser)
        .then(response => {
            console.log("response: ",response.data);
            this.setState({myGyeList : response.data});
        }).catch(error => {
            console.log(error);
        });
    }

    getBalance() {
        ArmaTokenService.getUserBalance(this.state.loggedInUser)
        .then(response => {
            console.log('response.data :>> ', response.data);
            this.setState({balance: response.data});
        }).catch(error => {
            console.log(error);
        })
    }

    chargeToken() {
        this.setState({
            chargingMessage: 'charging...',
            amount: 0
        });
        ArmaTokenService.chargeToken(this.state.amount)
        .then(response => {
            this.getBalance();
            this.setState({
                chargingMessage: 'Done!'
            });
        }).catch(error => {
            console.log(error);
            this.setState({
                chargingMessage: 'ERROR!!'
            });
        })
    }



    handleChange(e) {
        this.setState(
            {
                [e.target.name]
                  :e.target.value
            }
        )
    }

    
    render() {
        let userInfo = this.state.info;
        let myGyeList = this.state.myGyeList;

        const listItem = myGyeList.map((gye) =>
            <div className="col-md-6 col-lg-4 mb-5" key={gye.id}>
                <a href={'/gye/' + gye.id}><img src="images/cute.jpg" alt="Image" className="img-fluid rounded mb-4"/></a>
                <p>Type : {gye.type}</p>
                    <p>Target Money : {gye.targetMoney}</p>
                    <p>Total Member : {gye.totalMember}</p>
                    <p>Period : {gye.period} month</p>

                <h3><a href={'/gye/' + gye.id} className="text-black">{gye.title}</a></h3>
            </div> 
        );
        console.log(myGyeList);


        return (
            
            <div className="mypage_card">

               <div className="myInfo">
                    <img src="images/cute.jpg" alt="Image placeholder" class="img-fluid mb-4 w-50 rounded-circle"/>
                    <div className="edit_button">
                    <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupFileAddon01">
                                            Edit
                                        </span>
                                        </div>
                                    <div className="custom-file">
                                            <input
                                            type="file"
                                            className="custom-file-input"
                                            id="inputGroupFile01"
                                            aria-describedby="inputGroupFileAddon01"
                                            />
                                            <label className="custom-file-label" htmlFor="inputGroupFile01">
                                            Choose file
                                            </label>
                                    </div>
                                    
                                </div>

                    </div>
                    <h1>My Page</h1>
                    
                        {
                            userInfo && <div>
                                <p>name : {userInfo.name}</p>
                                <p>email : {userInfo.email}</p>
                                
                            </div>

                        }
                        {
                            !userInfo && <div>
                                Loading....
                            </div>
                        }
                    
                
                    <div>
                        Balance : {this.state.balance}
                        <button onClick={this.getBalance}
                            className="btn btn-success">Get Balance</button>
                    </div>
                    <div>
                        Charge Token : <input type="number" name="amount" 
                        value={this.state.amount} onChange={this.handleChange}/>
                        <button onClick={this.chargeToken}
                            className="btn btn-success">Charge</button>
                        {this.state.chargingMessage}
                    </div>
                    
                    My Gye List : 

                    <MDBDropdown>
                    <MDBDropdownToggle caret color="primary">
                        참여중인 계 목록
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic>
                        <MDBDropdownItem>{listItem}</MDBDropdownItem>
                        
                    </MDBDropdownMenu>
                    </MDBDropdown>
                   
                </div> 
            </div>    
            
        )        
    }
}


export default MyPageComponent;
