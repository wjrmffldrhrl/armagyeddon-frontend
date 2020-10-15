import React from 'react';
import {Button, UncontrolledTooltip} from "reactstrap";
import styles from '../../static/css/index.css';

class MainpageComponent extends React.Component {
    render() {
        return(

       
      <section class="site-section block__62272" id="next-section">

      <div class="container">
        
        <div class="row justify-content-center mb-5" data-aos="fade-up">
          <div id="filters" class="filters text-center button-group col-md-7">
          </div>
          {/* <div id="posts" class="row no-gutter">
            <div class="item_web">
              <h1>아마곗돈 알아보기</h1>
                <a href="portfolio-single.html" class="item-wrap">
                  <span class="icon-add"></span>
                  
                </a>
            </div>
          </div>   */}


          {/* <div id="posts" class="row no-gutter">
            <div class="item_web">
              <h1>아마곗돈 이율 알아보기</h1>
                <a href="portfolio-single.html" class="item-wrap">
                  <span class="icon-add"></span>
                  
                  <img class="img-fluid" src="images/2.png"/>
                  
                </a>
            </div>
          </div>   */}
          <div id="filters" class="filters text-center button-group col-md-7">
          </div>
          <div id="posts" >
            <div class="item_web">
              {/* <h1>아마곗돈 순번 원리 알아보기</h1> */}
                <a href="portfolio-single.html" class="item-wrap">
                  <span class="icon-add"></span>

                  <div className="people1" >
                    <img class="img-fluid" src="images/p1.png"/>
                    <Button
                    className="btn-white"
                    data-placement="top"
                    id="tooltip611234743"
                          
                    >앞순번                 
                    </Button>
                    <UncontrolledTooltip
                    delay={0}
                    placement="top"
                    target="tooltip611234743"
                    >
                    급전이 필요하다면
                    </UncontrolledTooltip> 
                  </div>


                  <div className="people2" >
                    <img class="img-fluid" src="images/p2.png"/>
                    <Button
                    className="btn-white"
                    data-placement="top"
                    id="tooltip159654437"       
                    >중간순번
                               
                    </Button>
                    <UncontrolledTooltip
                    delay={0}
                    placement="top"
                    target="tooltip159654437"
                    >
                    원하는 목표액 그대로
                    </UncontrolledTooltip>
                  </div>

                  <div className="people3">
                    <img class="img-fluid" src="images/p3.png"/>
                    <Button
                    className="btn-white"
                    data-placement="top"
                    id="tooltip611234740"                          
                    >뒷순번                 
                    </Button>
                    <UncontrolledTooltip
                    delay={0}
                    placement="top"
                    target="tooltip611234740"
                    >
                    높은 이자율로 목돈을
                    </UncontrolledTooltip>   
                  </div>
                </a>
            </div>
          </div>  

         </div>
      </div>

      </section>

   

        );
    }

}

export default MainpageComponent;