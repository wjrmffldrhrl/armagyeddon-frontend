import axios from 'axios';
import AuthenticationService from './AuthenticationService';

class GyeService {
    getGyeList() {
        AuthenticationService.setupAxiosInterceptors();
        return axios.get('/gye');
    }

    getGyeDetails(id) {
        AuthenticationService.setupAxiosInterceptors();
        return axios.get('/gye/'+id);
    }

    createGye(title, period, state, targetMoney, totalMember, type, turn) {
        AuthenticationService.setupAxiosInterceptors();
        return axios.post('/gye', {
            title, period, state, targetMoney, totalMember, type , turn
        });
    }

    joinGye(gyeId, turn) {
        AuthenticationService.setupAxiosInterceptors();
        return axios.post('/member', {
            gyeId, turn
        });
    }
}

export default new GyeService();