import React from 'react';
import GyeService from '../../services/GyeService';


class GyeSearchComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            gyes : []
        };
    }

    componentDidMount() {
        GyeService.getGyeList()
        .then(response => {
            this.setState({gyes: response.data});
        })
        .catch(error => {

        })
    }

    render() {

        return(
            <div>
                <hr></hr>
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-12">
                            <div class="mb-5 text-center">
                                <h1 class="text-black font-weight-bold">아마곗돈을 경험해보세요</h1>
                                
                                <p></p>
                                <p>블록체인 기반 계모임 플렛폼 Aramagyeddon에서 당신의 안전한 계모임을 생성하고 사람들을 모아보세요 </p>
                                <p>변경 불가능한 장부를 자동으로 생성하여 여러분의 곗돈을 안전하게 지켜드립니다.</p>
                            </div>
    
                        <form method="post" class="search-jobs-form">
                            <div class="row mb-5">
                                <div class="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                                    <input type="text" class="form-control form-control-lg" placeholder="목표 수령액"/>
                                </div>
                                <div class="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                                    <select class="form-control form-control-lg" data-style="btn-white btn-lg" data-width="100%" data-live-search="true" title="월 납입액">
                                    <option>~100,000원</option>
                                    <option>100,000원~300,000원</option>
                                    <option>300,000원~600,000원</option>
                                    <option>600,000원~1000,000원</option>
                                    <option>1000,000원~</option>                        
                                    </select>
                                </div>
                                <div class="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                                    <select class="form-control form-control-lg " data-style="btn-white btn-lg" data-width="100%" data-live-search="true" title="계원 수">
                                    <option>3명</option>
                                    <option>5명</option>
                                    <option>7명</option>
                                    </select>
                                </div>
                                <div class="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                                <button type="submit" class="btn btn-primary btn-lg btn-block text-white btn-search">
                                    <span class="icon-search icon mr-2"></span>Search Gye</button>
                                </div>
                            </div>
    
                            
                        </form>
                    </div>
                </div>
            </div>
            </div>
        );

    }


}

export default GyeSearchComponent;