import React from 'react';
import styles from '../static/css/about.css';

class About extends React.Component {
  
  render() {
    
    return(   
       <div class="row">
        <div class="first_card">
          <div class="about_card">   
              
                              
                        <div class="about_content1">
                        <span class="custom-icon mx-auto"><span class="icon-magnet d-block"></span></span>
                          <h3>블록체인 기반의 계모임 플랫폼</h3>
                          <p></p>
                              <p>아마곗돈 회원들이 결제한 자산은 </p>
                              <p>아마곗돈이 ERC20을 활용해 만든 ‘아마토큰’ 으로 전환되며 </p>
                              <p>계 참여와 동시에 곗돈 납부 및 수량 정보가 블록체인에 등록</p>
                        </div>         


          </div>
          </div> 
        <div class="about_card">
                      <div class="about_content1">
                        <h3>원하는 이자율과 순번 선택</h3>
                        <p></p>
                            <p>앞 순번 : 금융기관의 이자율보다 낮기 때문에 급전이 필요한 경우에 선택</p>
                            <p>중간 순번 : 핀테크 서비스인 만큼 세금 지출로 목표 금액이 낮아지지 않음</p>
                            <p>뒷 순번 : 높은 이자율로 앞 순번의 회원들보다 높은 목표액 수령</p>
                      </div>   
         </div>
   
         </div>             
      
      
);
}
}

export default About;


