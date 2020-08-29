import axios from 'axios';
import AuthenticationService from './AuthenticationService';

class ArmaTokenService {

    
    getBalance(email) {
        
        AuthenticationService.setupAxiosInterceptors();
        return axios.get('/balance/'+ email);
    }

    chargeToken(amount) {
        let loggedInUser = AuthenticationService.getLoggedInUserEmail();
        AuthenticationService.setupAxiosInterceptors();
        return axios.get('/charge/'+ loggedInUser + '/' + amount);
    }

}

export default new ArmaTokenService();