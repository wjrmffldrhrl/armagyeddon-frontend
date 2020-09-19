import React from 'react';



class About extends React.Component {

  render() {
    return(    
          

      <div>
        <div className="col-md-6">
          <img src="/images/blockchain1.png" alt="Image" className="img-fluid mb-4 rounded"/>
        </div>

        <div className="col-md-6">
          <h3>블록체인 기반의 계모임 플랫폼</h3>
          <p className="text-muted"></p>
          <p>아마곗돈 회원들이 결제한 자산은 </p>
          <p>아마곗돈이 ERC20을 활용해 만든 ‘아마토큰’ 으로 전환되며 </p>
          <p>계 참여와 동시에 곗돈 납부 및 수량 정보가 블록체인에 등록</p>
        


        </div>

        <div className="col-md-6 order-md-2 ml-md-auto">
            <img src="/images/rates.PNG" alt="Image" className="img-fluid mb-4 rounded"/>
        </div>

          <div className="col-md-6">
            <h3>원하는 이자율과 순번 선택으로</h3>
            <h3>목적에 맞는 목표액 수령이 가능</h3>
            <p className="text-muted"></p>
            <p>1. 앞 순번 : 금융기관의 이자율보다 낮기 때문에 급전이 필요한 경우에 선택</p>
            <p>2. 중간 순번 : 핀테크 서비스인 만큼 세금 지출로 목표 금액이 낮아지지 않음</p> 
            <p>3. 뒷 순번 : 높은 이자율로 앞 순번의 회원들보다 높은 목표액 수령</p>

            <div className="social mt-4">
              <a href="#"><span className="icon-facebook"></span></a>
              <a href="#"><span className="icon-twitter"></span></a>
              <a href="#"><span className="icon-instagram"></span></a>
              <a href="#"><span className="icon-linkedin"></span></a>
            </div>
          </div>

      </div>

    );
  }
}

export default About;

