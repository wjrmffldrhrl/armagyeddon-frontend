import axios from 'axios';
import AuthenticationService from './AuthenticationService';

class InfoService {

    getUserInfo(email) {
        console.log(email);
        AuthenticationService.setupAxiosInterceptors();
        return axios.get('/user-info/' + email);
    }
    

    getMyGyeList(email) {
        AuthenticationService.setupAxiosInterceptors();
        return axios.get('/user-info/mypage/' + email)
    }

}

export default new InfoService();