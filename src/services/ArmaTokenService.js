import axios from 'axios';
import AuthenticationService from './AuthenticationService';

class ArmaTokenService {

    
    getBalance(email) {
        
        AuthenticationService.setupAxiosInterceptors();
        return axios.get('/user-token/'+ email);
    }

    chargeToken(amount) {
        
        AuthenticationService.setupAxiosInterceptors();
        return axios.post('/user-token', amount);
    }

    sendTokenToGye(from, gyeId, amount){
        AuthenticationService.setupAxiosInterceptors();
        return axios.put('/user-token' , {
            from, gyeId, amount
        });
    }

}

export default new ArmaTokenService();