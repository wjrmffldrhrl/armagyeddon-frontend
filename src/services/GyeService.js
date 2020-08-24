import axios from 'axios';
import AuthenticationService from './AuthenticationService';

class GyeService {
    getGyeList() {
        AuthenticationService.setupAxiosInterceptors();
        return axios.get('https://jsonplaceholder.typicode.com/posts');
    }

    getGyeDetails(id) {
        AuthenticationService.setupAxiosInterceptors();
        return axios.get('https://jsonplaceholder.typicode.com/posts'+'/'+id);
    }
}

export default new GyeService();