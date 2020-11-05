import React from 'react';
import GyeService from '../../services/GyeService';
import { MDBCol, MDBIcon } from "mdbreact";
import { MDBFormInline, MDBBtn } from "mdbreact";
import styles from '../../static/css/gye.css'


class GyeSearchComponent extends React.Component {

    searchHandler;
    constructor(props) {
        super(props);

        this.state = {
            gyes : [],
            searchGyeList: []
        };
        this.searchkeyword = ""
        //this.searchHandler=props.searchHandler;
        //this.handleSearch = this.handleSearch.bind(this);
    }



    componentDidMount() {
        GyeService.getGyeList()
        .then(response => {
            this.setState({gyes: response.data});
        })
        .catch(error => {

        })

        this.searchGyeList();
    }

    searchGyeList() {
        GyeService.searchGyeList()
        .then(response => {
            this.setState({searchGyeList: response.data});
        }).catch(error => {

        })
    }

    handleSearch(e) {
        console.log("searchButton")
        this.props.searchHandler(this.searchkeyword.value);
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
 -   
                        <form class="search-jobs-form">
                            <div class="row mb-5">
                                <MDBCol className="search_gye" md="6">
                                <div className="input-group md-form form-sm form-1 pl-0">
                                    <div className="input-group-prepend">
                                    <span className="input-group-text purple lighten-3" id="basic-text1">
                                        <MDBIcon className="text-white" icon="search" />
                                    </span>
                                    </div>
                                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" ref={(c) => this.searchkeyword = c} />
                                    <MDBBtn gradient="purple" rounded size="sm" className="mr-auto" onClick={(e)=> this.props.updateSearchKeyword(this.searchkeyword.value)}>
                                    Search
                                    </MDBBtn>

                                </div>
                                </MDBCol>

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