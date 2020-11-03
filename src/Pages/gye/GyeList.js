import React from 'react';
import GyeListComponent from '../../Component/gye/GyeListComponent';
import GyeSearchComponent from '../../Component/gye/GyeSearchComponent';

import { Link } from "react-router-dom";
import style from '../../static/css/gye.css';


class GyeList extends React.Component {
    state = {
        searchKeyword : ""
    }

    constructor(props) {
        super(props)
    
        this.updateSearchKeyword = this.updateSearchKeyword.bind(this)
      }
    updateSearchKeyword(keyword){
        console.log("GyeListSearch :" +keyword)
        this.setState({
            searchKeyword:keyword
        })
    }
    render() {
        console.log("GyeListSearch Keyword :" +this.state.searchKeyword)
        let listView = (
            <GyeListComponent searchKeyword={this.state.searchKeyword}/>
        )
        return (
             <div class='gyelist'>

                <GyeSearchComponent updateSearchKeyword={this.updateSearchKeyword}></GyeSearchComponent>

                <hr></hr>
                <div class='gyetitle'>
                <div class="mb-5 text-center">
                           

                    <h1>Armagyeddon Gye List                    
                    <Link to="/create-gye" className="btn btn-success">create gye</Link></h1>
                                
                </div>
                </div>
                
                {listView}


             </div>
        );
    }
}

export default GyeList;