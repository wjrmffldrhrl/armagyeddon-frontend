import React from 'react';
import styles from '../../static/css/index.css';

class MainpageComponent extends React.Component {
    render() {
        return(

       
      <section class="site-section block__62272" id="next-section">

      <div class="container">
        
        <div class="row justify-content-center mb-5" data-aos="fade-up">
          <div id="filters" class="filters text-center button-group col-md-7">
          </div>
          <div id="posts" class="row no-gutter">
            <div class="item_web">
              <h1>아마곗돈 이율 알아보기</h1>
                <a href="portfolio-single.html" class="item-wrap">
                  <span class="icon-add"></span>
                  
                  <img class="img-fluid" src="images/2.png"/>
                  
                </a>
            </div>
          </div>  
          <div id="filters" class="filters text-center button-group col-md-7">
          </div>
          <div id="posts" class="row no-gutter">
            <div class="item_web">
              <h1>아마곗돈 순번 원리 알아보기</h1>
                <a href="portfolio-single.html" class="item-wrap">
                  <span class="icon-add"></span>
                  앞순번
                  <img class="img-fluid" src="images/p1.png"/>
                  중간순번
                  <img class="img-fluid" src="images/p2.png"/>
                  뒷순번
                  <img class="img-fluid" src="images/p3.png"/>
                 
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