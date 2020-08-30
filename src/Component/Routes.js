import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

import Login from "../Pages/Login";
import Header from "./Header";
import Home from "../Pages/Home";
import AuthenticatedRoute from '../config/AuthenticatedRoute';
import MyPage from '../Pages/MyPage';
import AuthenticationService from '../services/AuthenticationService';
import RegisterForm from './login/RegisterForm';
import GyeList from '../Pages/gye/GyeList';
import GyeDetails from '../Pages/gye/GyeDetails';
import GyeCreate from '../Pages/gye/GyeCreate';
import GyeManagement from '../Pages/gye/GyeManagement';

class Routes extends React.Component {
    constructor(props) {
        super(props);

        this.handleUserState = this.handleUserState.bind(this);
        this.state = {isLoggedIn: AuthenticationService.isUserLoggedIn()};

    }

    handleUserState(userState) {
        this.setState({isLoggedIn: userState});
    }

    render() {
        const HeaderWithRouter = withRouter(Header);
        const isLoggedIn = this.state.isLoggedIn;

        return(
            <Router>
                <HeaderWithRouter isLoggedIn={isLoggedIn}
                            userStateChange={this.handleUserState}/>
                
                <Switch>
                    <Route exact  path="/" component={Home}/>
                    <Route path="/login" render={
                                (props) => <Login {...props} userStateChange={this.handleUserState}/>}/>
                    <Route path="/sign-up" component={RegisterForm}/>
                    <AuthenticatedRoute path="/mypage" component={MyPage}/>
                    <AuthenticatedRoute path="/logout" component={Home}/>
                    <AuthenticatedRoute path="/gye-list" component={GyeList}/>
                    <AuthenticatedRoute path="/gye/:id" component={GyeDetails}/>
                    <AuthenticatedRoute path="/create-gye" component={GyeCreate}/>
                    <AuthenticatedRoute path="/management-gye/:id" component={GyeManagement}/>
                    
                </Switch>
                
                
            </Router>
        );
    }
}

export default Routes;
// export default () => (
//     <Router>
//         <Header/>
//         <Route exact  path="/" component={Home}/>
//         <Route path="/login" component={Login}/>
        
//     </Router>
// )