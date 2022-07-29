import React from 'react'
import OwlCarousel from 'react-owl-carousel';


const ExpertOwl = {
   items: 1,
   loop: true,
   margin: 30,
   nav: true,
   dots: false,
   autoplay: false,
   autoplaySpeed: 1000,
   smartSpeed: 1000,
   navText: [
      "<img src='../../assets/images/parrow-left.svg'>",
      "<img src='../../assets/images/parrow-right.svg'>",
   ],
};

const WhoWeAre = () => {
   return (
      <>

         <section className="banner smallbanner">
            <div id="bannerowl">
               <img src="../../assets/images/banner2.jpg" alt="" />
            </div>
         </section>

         <section className="expert">
            <div className="container">
               <div className="row tabscenter">
                  <div className="col-md-12">
                     <h1 className="comntitle">Expert Team</h1>
                  </div>
                  <div className="col-md-6 col-lg-4">
                     <div className="expertbox laptopbox">
                        <img src="../../assets/images/expert1.png" alt="" />
                        <div className="nametag">
                           <h6>Jeremy Gehring</h6>
                           <small>Master’s deg. in commercial law</small>
                        </div>
                        <div className="hoverbox">
                           <p className="expertpara">BBA University of Applied Sciences of Geneva, Federal Diploma of Professional Cook CFC. Professional chef with international commodity trading experience of several years, I have developed since a young age a passion for cooking
                              and dancing. A perfectionist with a creative mind, I work with our entire team to get to the best product.</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                     <div className="expertbox laptopbox">
                        <img src="../../assets/images/expert2.png" alt="" />
                        <div className="nametag">
                           <h6>Yaël Nessi</h6>
                           <small>Master’s deg. in commercial law</small>
                        </div>
                        <div className="hoverbox">
                           <p className="expertpara">M.A. University of St.Gallen, Blaw University of Zürich. With a background in law and economics, I have management experience in various industries internationally, primarily in consumer goods. I am fascinated by people and
                              foreign languages. I am communicative and with a precise approach to work, I like to face strategic challenges and manage business development projects.</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                     <div className="expertbox laptopbox">
                        <img src="../../assets/images/expert3.png" alt="" />
                        <div className="nametag">
                           <h6>Andrea Nessi</h6>
                           <small>Master’s deg. in commercial law</small>
                        </div>
                        <div className="hoverbox">
                           <p className="expertpara">Master’s degree in commercial law (University of Zurich and Hong Kong). With a strong background in management consulting, I am fascinated by business development and company growth. I have a structured and pragmatic approach,
                              my mission is to to support the company in all its growth phases in particular by following its strategy, finances and investments.</p>
                        </div>
                     </div>
                  </div>
               </div>

               <OwlCarousel id="expert" {...ExpertOwl}>
                  <div className="item">
                     <div className="mobilebox">
                        <img src="../../assets/images/expert1.png" alt="" />
                        <h6>Jeremy Gehring</h6>
                        <small>Master’s deg. in commercial law</small>
                        <p className="expertpara">BBA University of Applied Sciences of Geneva, Federal Diploma of Professional Cook CFC. Professional chef with international commodity trading experience of several years, I have developed since a young age a passion for cooking
                           and dancing. A perfectionist with a creative mind, I work with our entire team to get to the best product.</p>
                     </div>
                  </div>
                  <div className="item">
                     <div className="mobilebox">
                        <img src="../../assets/images/expert2.png" alt="" />
                        <h6>Yaël Nessi</h6>
                        <small>Master’s deg. in commercial law</small>
                        <p className="expertpara">M.A. University of St.Gallen, Blaw University of Zürich. With a background in law and economics, I have management experience in various industries internationally, primarily in consumer goods. I am fascinated by people and foreign
                           languages. I am communicative and with a precise approach to work, I like to face strategic challenges and manage business development projects.</p>
                     </div>
                  </div>
                  <div className="item">
                     <div className="mobilebox">
                        <img src="../../assets/images/expert3.png" alt="" />
                        <h6>Andrea Nessi</h6>
                        <small>Master’s deg. in commercial law</small>
                        <p className="expertpara">Master’s degree in commercial law (University of Zurich and Hong Kong). With a strong background in management consulting, I am fascinated by business development and company growth. I have a structured and pragmatic approach,
                           my mission is to to support the company in all its growth phases in particular by following its strategy, finances and investments.</p>
                     </div>
                  </div>
               </OwlCarousel>

            </div>
         </section>


         <section class="success">
            <div class="successone parallaxupdown"><img src="../../assets/images/successelement1.png" alt="" /></div>
            <div class="successtwo parallaxupdown"><img src="../../assets/images/successelement2.png" alt="" /></div>
            <div class="successthree parallaxupdown"><img src="../../assets/images/successelement3.png" alt="" /></div>
            <div class="container">
               <div class="row">
                  <div class="col-md-12 text-center">
                     <h2 class="comntitle">Success Story</h2>
                  </div>
               </div>
               <div class="successtop">
                  <div class="row">
                     <div class="col-sm-12">
                        <div class="row">
                           <div class="col-md-12 text-center">
                              <aside class="successtitle">1968</aside>
                           </div>
                        </div>
                        <div class="row mobilereverse">
                           <div class="col-md-6">
                              <div class="successdiv">
                                 <img src="../../assets/images/success1.png" class="successimg" alt="" />
                              </div>
                           </div>
                           <div class="col-md-6">
                              <div class="successbox">
                                 <h4 class="tagtitle">Italian creativity and Swiss quality</h4>
                                 <p class="innerpara">Half a century ago, Angelo and Maria Di Lella founded Pastificio Di Lella, transforming an innate passion for the Italian culinary tradition into their entrepreneurial dream.</p>
                              </div>
                           </div>
                        </div>

                        <div class="row">
                           <div class="col-md-12 text-center">
                              <aside class="successtitle">1990</aside>
                           </div>
                           <div class="col-md-6 text-end">
                              <div class="successbox successbox2">
                                 <h4 class="tagtitle">A second generation success</h4>
                                 <p class="innerpara ms-auto">In 1990 the second generation took over and led the company to make the leap in terms of size, production techniques and market positioning. Authentic and fresh, Di Lella's products are more and more appreciated in
                                    Ticino and beyond Gotthard. Thus, from a local laboratory, the company began to serve all of Switzerland with a wide and varied offer.</p>
                              </div>
                           </div>
                           <div class="col-md-6">
                              <div class="successdiv2">
                                 <img src="../../assets/images/success2.png" class="successimg" alt="" />
                              </div>
                           </div>
                        </div>

                        <div class="row">
                           <div class="col-md-12 text-center">
                              <aside class="successtitle">2017</aside>
                           </div>
                        </div>
                        <div class="row mobilereverse">
                           <div class="col-md-6">
                              <div class="successdiv">
                                 <img src="../../assets/images/success3.png" class="successimg" alt="" />
                              </div>
                           </div>
                           <div class="col-md-6">
                              <div class="successbox">
                                 <h4 class="tagtitle">Innovation and respect for the territory</h4>
                                 <p class="innerpara">Creativity, dynamism and innovation are the key words of the turnaround that began in 2017 under the leadership of the new owners. Thanks to the contribution of a chef with experience abroad in several starred restaurants,
                                    the Pastificio began to propose, alongside more traditional recipes, creations that are particularly attentive to local economies and sustainability.</p>
                              </div>
                           </div>
                        </div>

                        <div class="row">
                           <div class="col-md-12 text-center">
                              <aside class="successtitle">2021</aside>
                           </div>
                           <div class="col-md-6 text-end">
                              <div class="successbox successbox2">
                                 <h4 class="tagtitle">FSSC2200 Certification</h4>
                                 <p class="innerpara ms-auto">We strive for the highest quality in the products and services we offer - from suppliers, to manufacturing, to final product and distribution. In early 2021, we achieved FSSC2200 (Food Safety System Certification Scheme
                                    22000) certification, a reference standard for food safety recognized by the Global Food Safety Initivative (GFSI). </p>
                              </div>
                           </div>
                           <div class="col-md-6">
                              <div class="successdiv2">
                                 <img src="../../assets/images/success4.jpg" class="successimg" alt="" />
                              </div>
                           </div>
                        </div>

                     </div>
                  </div>
               </div>
               <div class="successbottom">
                  <div class="row align-items-center">
                     <div class="col-md-12 text-center">
                        <aside class="successtitle">2022</aside>
                        <h4 class="tagtitle">Bio Certification</h4>
                     </div>
                     <div class="col-md-6 text-end">
                        <p class="innerpara ms-auto">In early 2022, some of our products were certified organic. The values of organic farming and production are very important to us and have always been part of the way we work. We are pleased to have certified our dumplings and
                           ravioli to these standards. </p>
                     </div>
                     <div class="col-md-6">
                        <img src="../../assets/images/success5.jpg" class="bottomimg" alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </section>

      </>
   )
}

export default WhoWeAre;