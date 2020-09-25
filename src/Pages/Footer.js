import React from 'react';
import styles from '../static/css/footer.css'

class Footer extends React.Component {

  render() {
    return(
      <div>

        <footer class="site-footer">
        <section id="features" className="py-5 bg-voilet text-white">
                    <div className="container">
                       
                        <div className="row justify-content-center text-center">
                            <div className="col-12 col-md-6 col-lg-4">
                                <i className="fa fa-bicycle fa-4x text-white"></i>
                                <h3 className="mb-2">Search Trending</h3>
                                <p>저축계</p>
                                <p>낙찰계</p>
                                <p>기부계</p>
                                <p>친목계</p>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <i className="fa fa-phone fa-4x text-white"></i>
                                <h3 className="mb-2">Armagyeddon</h3>
                                <p>About Us</p>
                                <p>Career</p>
                                <p>Blog</p>
                                <p>Resources</p>
                                
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <i className="fa fa-coffee fa-4x text-white"></i>
                                <h3 className="mb-2">계모임 회칙</h3>
                                <p>Support</p>
                                <p>Privacy</p>
                                <p>Terms of Service</p>
                              
                            </div>                        
                        </div>
                    </div>
                </section>

        <a href="#top" class="smoothscroll scroll-top">
        <span class="icon-keyboard_arrow_up"></span>
        </a>

        <div class="container">
        {/* <div class="row mb-5">
            <div class="col-6 col-md-3 mb-4 mb-md-0">
            <h3>Search Trending</h3>
            <ul class="list-unstyled">
                <li><a href="#">저축계</a></li>
                <li><a href="#">낙찰계</a></li>
                <li><a href="#">기부계</a></li>
                <li><a href="#">친목계</a></li>            
            </ul>
            </div>
            <div class="col-6 col-md-3 mb-4 mb-md-0">
            <h3>Armagyeddon</h3>
            <ul class="list-unstyled">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Resources</a></li>
            </ul>
            </div>
            <div class="col-6 col-md-3 mb-4 mb-md-0">
            <h3>계모임 회칙</h3>
            <ul class="list-unstyled">
                <li><a href="#">Support</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms of Service</a></li>
            </ul>
            </div>
            <div class="col-6 col-md-3 mb-4 mb-md-0">
            <h3>Contact Us</h3>
            <div class="footer-social">
                <a href="#"><span class="icon-facebook"></span></a>
                <a href="#"><span class="icon-twitter"></span></a>
                <a href="#"><span class="icon-instagram"></span></a>
                <a href="#"><span class="icon-linkedin"></span></a>
            </div>
            </div>
        </div> */}


        </div>
        </footer>


      </div>
    );
  }
}

export default Footer;