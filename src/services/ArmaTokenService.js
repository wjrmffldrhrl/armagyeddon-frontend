import axios from 'axios';
import AuthenticationService from './AuthenticationService';

class ArmaTokenService {

    
    getUserBalance(email) {
        
        AuthenticationService.setupAxiosInterceptors();
        return axios.get('/user-token/'+ email);
    }

    getGyeBalance(gyeId) {
        
        AuthenticationService.setupAxiosInterceptors();
        return axios.get('/gye-token/'+ gyeId);
    }
    
    chargeToken(amount) {
        
        AuthenticationService.setupAxiosInterceptors();
        return axios.post('/user-token', amount);
    }

    sendTokenToGye(userEmail, gyeId, amount){
        AuthenticationService.setupAxiosInterceptors();
        return axios.put('/user-token' , {
            userEmail, gyeId, amount
        });
    }

    collectTokenToGye(targetMoney, totalMember, interest){
        AuthenticationService.setupAxiosInterceptors();
        return axios.put('/user-token' , {
            targetMoney, totalMember, interest
        });
    }

    sendTokenToUser(userEmail, gyeId, amount){
        AuthenticationService.setupAxiosInterceptors();
        return axios.put('/gye-token' , {
            userEmail, gyeId, amount
        });
    }


}

export default new ArmaTokenService();