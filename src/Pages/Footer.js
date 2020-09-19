import React from 'react';

class Footer extends React.Component {

  render() {
    return(
      <div>

        <footer class="site-footer">

        <a href="#top" class="smoothscroll scroll-top">
        <span class="icon-keyboard_arrow_up"></span>
        </a>

        <div class="container">
        <div class="row mb-5">
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
        </div>


        </div>
        </footer>


      </div>
    );
  }
}

export default Footer;