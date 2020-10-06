import React from 'react';
import GyeService from '../../services/GyeService';
import AuthenticationService from '../../services/AuthenticationService.js'
import ArmaTokenService from '../../services/ArmaTokenService';

class GyeManagementComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loggedInUser: AuthenticationService.getLoggedInUserEmail(),
            gye         : [],
            members     : [],
            gyeBalance  : ''
        };

        this.handleCollect = this.handleCollect.bind(this);
        this.getBalance = this.getBalance.bind(this);
        this.handleSendToken = this.handleSendToken.bind(this);
    }


    componentDidMount() {
        this.getBalance();
    }

    getBalance() {
        let memberArray = [];
        GyeService.getGyeDetails(this.props.id)
            .then(response => {

                this.setState({gye: response.data});

                this.state.gye.members.forEach(member => {
                    let balance;
                    ArmaTokenService.getUserBalance(member.email).then(response => {
                        balance = response.data;

                        memberArray.push({
                            name   : member.name,
                            email  : member.email,
                            balance: balance
                        });
                        this.setState({members: memberArray});
                    });

                });

                console.log(this.state.gye);
                console.log(memberArray);

            })
            .catch(error => {

            });

        ArmaTokenService.getGyeBalance(this.props.id)
            .then(response => {
                this.setState({gyeBalance: response.data})
            })
            .catch(error => {

            });
    }

    async handleCollect(e) {
        alert('collect!');
        let gye = this.state.gye;
        let collectMoney = gye.targetMoney / (gye.totalMember - 1);
        // console.log(collectMoney);
        // console.log(gye.targetMoney);
        // console.log(this.state.members);


        //낙찰계 수금
        let collectInterestMoney = [
            //공통적으로 내는 돈 + 이자
            //3명일때 1번째 사람
            // (gye.targetMoney / gye.totalMember) + ((gye.targetMoney * (gye.interest-1) / 100) / 12 * gye.period)

            //3명일때 2번째 사람
            // (gye.targetMoney / gye.totalMember)

            //3명일때 3번째 사람
            // (gye.targetMoney / gye.totalMember) - ((gye.targetMoney * (gye.interest) / 100) / 12 * gye.period)

            //5명일때 1번째 사람
            // (gye.targetMoney / gye.totalMember) + ((gye.targetMoney * (gye.interest-2) / 100) / 12 * gye.period)

            //5명일때 2번째 사람
            // (gye.targetMoney / gye.totalMember) + ((gye.targetMoney * (gye.interest / 2 -1) / 100) / 12 * gye.period)

            //5명일때 3번째 사람
            // (gye.targetMoney / gye.totalMember)

            //5명일때 4번째 사람
            // (gye.targetMoney / gye.totalMember) - ((gye.targetMoney * (gye.interest / 2) / 100) / 12 * gye.period)

            //5명일때 5번째 사람
            // (gye.targetMoney / gye.totalMember) - ((gye.targetMoney * (gye.interest) / 100) / 12 * gye.period)


            //7명일때 1번째 사람
            // (gye.targetMoney / gye.totalMember) + ((gye.targetMoney * (gye.interest - 1 /3 ) / 100) / 12 * gye.period)

            //7명일때 2번째 사람
            // (gye.targetMoney / gye.totalMember) + ((gye.targetMoney * (2 * (gye.interest) / 3 - 1 /2 ) / 100) / 12 * gye.period)

            //7명일때 3번째 사람
            //  (gye.targetMoney / gye.totalMember) + ((gye.targetMoney * (gye.interest / 3 -1) / 100) / 12 * gye.period)

            //7명일때 4번째 사람
            // (gye.targetMoney / gye.totalMember)

            //7명일때 5번째 사람
            // (gye.targetMoney / gye.totalMember) - ((gye.targetMoney * (gye.interest / 3) / 100) / 12 * gye.period)

            //7명일때 6번째 사람
            // (gye.targetMoney / gye.totalMember) - ((gye.targetMoney * (2 * (gye.interest / 3)) / 100) / 12 * gye.period)

            //7명일때 7번째 사람
            // (gye.targetMoney / gye.totalMember) - ((gye.targetMoney * (gye.interest) / 100) / 12 * gye.period)

            // 인원수 // 이자율 // 해당인원의 금액
        ]


        for (let i = 0; i < this.state.members.length; i++) {
            const member = this.state.members[i];

            if (gye.type === "저축계") {
            const response = await
                ArmaTokenService.sendTokenToGye(member.email, gye.id, collectMoney);
            } else if(gye.type === "낙찰계") {
                if (gye.totalMember === 3){
                    const response =
                        await ArmaTokenService.sendTokenToGye(member.email, gye.id, collectInterestMoney);
                }else if (gye.totalMember === 5){

                }else if (gye.totalMember === 7){

                }


            }


            // .then( (response) => {
            //     console.log(member.email + ' send!');
            // })
            // .catch(error => {
            //     alert(member.email + ' error!');
            // });
            console.log(response.data);

        }

        // this.state.members.forEach(async (member) => {


        //     const response = await
        //         ArmaTokenService.sendTokenToGye(member.email, gye.id, collectMoney);

        //         // .then( (response) => {
        //         //     console.log(member.email + ' send!');
        //         // })
        //         // .catch(error => {
        //         //     alert(member.email + ' error!');
        //         // });
        //     console.log(response.data);

        // });

        // this.getBalance();

        // e.preventDefault();

    }

    handleSendToken(e) {
        console.log(e);
        ArmaTokenService.sendTokenToUser(e, this.state.gye.id, this.state.gyeBalance)
            .then(response => {
                console.log('send to ' + e);
            })
            .catch(error => {

            });
    }

    render() {
        let loggedinUser = this.state.loggedInUser;
        let gye = this.state.gye;
        let gyeBalance = this.state.gyeBalance;
        let memberBalance = this.state.members.map((member, index) =>
            <li key={index}> {member.name} : {member.balance}
                <button className="btn btn-success" value={member.email}
                        onClick={() => this.handleSendToken(member.email)}>send
                </button>
            </li>)
        return (
            <div>
                {loggedinUser !== gye.master && 'your not gye master'}
                {loggedinUser === gye.master &&
                <div>
                    <h2>Gye Balance</h2>
                    {gyeBalance}
                    <h2>User Balance</h2>
                    {memberBalance}
                    <button className="btn btn-success" onClick={this.handleCollect}>Collect</button>

                </div>

                }

            </div>
        );
    }
}

export default GyeManagementComponent;