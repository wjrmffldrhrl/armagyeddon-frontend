import React from 'react';
import styles from '../../static/css/login.css';

class PWSearchComponent extends React.Component {
    render() {
        return(

            <div className="container h-100">
                <div className="d-flex justify-content-center h-100">
                    <div className="user_card">
                        <div className="d-flex justify-content-center">
                            <div className="brand_logo_container">
                                <img src="/images/icon2.png" className="brand_logo" alt="Logo"/>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center form_container" class="static">
                            <label>
                            <div className="search_pw_id">
                            <h5>ID</h5>
                            <input type='text' maxLength='15' name='search_pw_id'/>
                    
                            </div>
                            </label>
                            
                            <label >
                            
                            <div className="search_pw_email">
                            <h5>Email</h5>
                            <input type='text' maxLength='15' name='search_pw_email1'/>

                            <div id='search_id_email_div'>
                            @
                            <input type='text' maxLength='15' name='search_pw_write_email'/>
                            </div>
                            </div>
                            <div className="btn_pwsubmit">
                             <button >조회하기</button>
                            </div>

                         
                            
                            </label>
                        </div>
                
                        
                    </div>
                </div>
            </div>
            


            // <div className="Search_div">
            //     <h4> 비밀번호 찾기 </h4>

            //     <div className="search_pw_id">
            //         <h5>ID</h5>
            //         <input type='text' maxLength='15' name='search_pw_id'/>
                    
            //     </div>

                // <div className="search_pw_email">
                //     <h5>Email</h5>
                //     <input type='text' maxLength='15' name='search_pw_email1'/>

                //     <div id='search_id_email_div'>
                //         @
                //         <input type='text' maxLength='15' name='search_pw_write_email'/>
                //     </div>
                // </div>

                // <div className="search_pw_submit">
                //     <input type='button' value='조회하기' name='search_pw_submit'/>                    

                // </div>

            // </div>
        );
    }
}

export default PWSearchComponent;