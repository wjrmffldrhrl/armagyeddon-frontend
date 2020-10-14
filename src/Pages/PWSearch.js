import React from 'react';
import PWSearchComponent from '../Component/login/PWSearchComponent';


class PWSearch extends React.Component {
    render(){
        return(
            <div>
                비밀번호 찾기 페이지
                <PWSearchComponent></PWSearchComponent>
            </div>
        );
    }
}

export default PWSearch;