import React from 'react'

const Contact = () => {
   return (
      <>

         <section className="banner smallbanner">
            <div id="bannerowl">
               <img src="../../assets/images/banner7.png" alt="" />
            </div>
         </section>

         <section className="comnpadding getin">
            <div className="container">
               <div className="row">
                  <div className="col-md-6">
                     <h1 className="comntitle">Get in touch</h1>
                     <p className="getpara">We’ll be delighted to answer any questions about our products and services.</p>
                     <ul className="getlist">
                        <li><img src="../../assets/images/location.svg" alt="" /> Via Pobbia 2, 6514 sementina, svizzera.</li>
                        <li>
                           <a href="mailto:info@di-lella.ch"><img src="../../assets/images/email.svg" alt="" /> info@di-lella.ch</a>
                        </li>
                        <li>
                           <a href="tel:+41 (0)91 857 43 16"><img src="../../assets/images/phone.svg" alt="" /> +41 (0)91 857 43 16</a>
                        </li>
                        <li>
                           <a href="tel:+41 (0)91 857 87 62"><img src="../../assets/images/telephone.svg" alt="" /> +41 (0)91 857 87 62</a>
                        </li>
                     </ul>
                  </div>
                  <div className="col-md-6">
                     <form className="getinform">
                        <div className="row">
                           <div className="col-sm-6">
                              <div className="form-group">
                                 <input type="text" className="form-control" placeholder="Full Name" />
                              </div>
                           </div>
                           <div className="col-sm-6">
                              <div className="form-group">
                                 <input type="email" className="form-control" placeholder="Email ID" />
                              </div>
                           </div>
                           <div className="col-sm-12">
                              <div className="form-group">
                                 <input type="text" className="form-control" placeholder="Subject" />
                              </div>
                           </div>
                           <div className="col-sm-12">
                              <div className="form-group">
                                 <textarea className="form-control" rows="7" placeholder="Enter Your Message …."></textarea>
                              </div>
                           </div>
                           <div className="col-sm-12 text-center">
                              <a href="#" className="shopbtn">Send Message <img src="../../assets/images/shoparrow.svg" alt="" /></a>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </section>

         <section className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.691544921208!2d8.994985115784555!3d46.176795593631745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47844a66847d6fcb%3A0x5731b32148c12a6c!2sVia%20Pobbia%202%2C%206514%20Sementina%2C%20Switzerland!5e0!3m2!1sen!2sin!4v1643089322362!5m2!1sen!2sin"></iframe>
         </section>

      </>
   )
}

export default Contact