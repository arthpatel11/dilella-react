import React from 'react'

const Footer = () => {
   return (
      <footer>
         <div class="container">
            <div class="row footerpadd">
               <div class="col-lg-2 col-md-5">
                  <div class="footerlogo">
                     <img src="../../assets/images/logo.png" alt="" />
                  </div>
                  <ul class="socialmedia">
                     <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                     <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                     <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                  </ul>
               </div>
               <div class="col-lg-4 col-md-7">
                  <div class="footertitle mobi">
                     <h6>Contact Us</h6>
                  </div>
                  <ul class="contactlist">
                     <li><i class="fas fa-map-marker-alt"></i> Via Pobbia 2, 6514 sementina, svizzera.</li>
                     <li><a href="mailto:info@di-lella.ch"><i class="fas fa-envelope"></i> info@di-lella.ch</a></li>
                     <li><a href="tel:+41 (0)91 857 43 16"><i class="fas fa-phone-alt"></i> +41 (0)91 857 43 16</a></li>
                  </ul>
               </div>
               <div class="col-lg-3 col-md-5">
                  <div class="footertitle tabmob">
                     <h6>Certification</h6>
                  </div>
                  <div class="certimgdiv">
                     <img src="../../assets/images/footersvg.svg" class="certimg" alt="" />
                     <img src="../../assets/images/footersvg1.png" class="certimg" alt="" />
                  </div>
               </div>
               <div class="col-lg-3 col-md-7">
                  <div class="footertitle tabmob">
                     <h6>Get in Touch</h6>
                  </div>
                  <form class="footerform">
                     <div class="input-group">
                        <input type="email" class="form-control" placeholder="Enter your mail" />
                        <button type="submit" class="input-group-text"><i class="fas fa-paper-plane"></i></button>
                     </div>
                  </form>
               </div>
            </div>
            <hr class="footerhr" />
            <div class="footerbottom">
               <p>All rights reserved @2022 Pastificio Di Lella SA.</p>
            </div>
         </div>
      </footer>
   )
}
export default Footer