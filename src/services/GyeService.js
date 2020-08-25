import axios from 'axios';
import AuthenticationService from './AuthenticationService';

class GyeService {
    getGyeList() {
        AuthenticationService.setupAxiosInterceptors();
        return axios.get('https://jsonplaceholder.typicode.com/posts');
    }

    getGyeDetails(id) {
        AuthenticationService.setupAxiosInterceptors();
        return axios.get('https://jsonplaceholder.typicode.com/posts/'+id);
    }

    createGye(name, period, state, targetMoney, totalMember, type) {
        AuthenticationService.setupAxiosInterceptors();
        return axios.post('/gye', {
            name, period, state, targetMoney, totalMember, type
        });
    }
}

export default new GyeService();