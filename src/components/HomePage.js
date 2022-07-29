import React from 'react'
import OwlCarousel from 'react-owl-carousel';


const ProductOwl = {
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
   responsive: {
      0: {
         items: 1,
      },
      600: {
         items: 2,
      },
      1024: {
         items: 3,
      },
   }
};

const HomePage = () => {
   return (
      <>
         <section className="banner">
            <div id="bannerowl">
               <img src="../../assets/images/banner1.jpg" alt="" />
               <div className="bannercaption">
                  <aside>Welcome To The World Of Di Lella</aside>
               </div>
            </div>
         </section>

         <section className="comnpadding proud">
            <div className="proudtopleft"><img src="../../assets/images/proudtopleft.png" alt="" /></div>
            <div className="proudtopright"><img src="../../assets/images/proudtopright.png" alt="" /></div>
            <div className="proudbottomright parallaxupdown"><img src="../../assets/images/proudbottomright.png" alt="" /></div>
            <div className="container">
               <div className="row">
                  <div className="col-lg-6 col-xl-6">
                     <img src="../../assets/images/proudimg.png" className="proudimg" alt="" />
                  </div>
                  <div className="col-lg-6 col-xl-5">
                     <div className="proudinner">
                        <h1 className="comntitle">Fresh artisan pasta from the heart of Ticino </h1>
                        <p>Proud to share with you our passion for the Italian culture of good food and fascination with fresh pasta. Familiar in ownership and management. Since 1968 our pasta factory has been delighting the palates of young and old every
                           day. Buon Appetito! </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="comnpadding choose">
            <div className="choosetopleft"><img src="../../assets/images/choosetopleft.png" alt="" /></div>
            <div className="choosebottomleft parallaxupdown"><img src="../../assets/images/choosebottomleft.png" alt="" /></div>
            <div className="choosebottomright"><img src="../../assets/images/choosebottomright.png" alt="" /></div>
            <div className="container">
               <div className="text-center">
                  <h2 className="comntitle">What we represent</h2>
               </div>
               <ul className="chooseinner">
                  <li className="choosebox uparrow">
                     <img src="../../assets/images/chooseicon1.png" alt="" />
                     <aside>Craftsmanship</aside>
                     <p>Aliquam sed egestas magna. Aenean elementum efficitur urna, et tristique mollis et ecenas et ecenas mollis.</p>
                  </li>
                  <li className="choosebox downarrow">
                     <img src="../../assets/images/chooseicon2.png" alt="" />
                     <aside>Nature & Territory</aside>
                     <p>Morbi tincidunt erat in leo porta vehicula. Nulla facilisi. Maecenas facilisis mauris massa mauris massa Maecenas facilisis.</p>
                  </li>
                  <li className="choosebox">
                     <img src="../../assets/images/chooseicon3.png" alt="" />
                     <aside>Passion for gastronomy</aside>
                     <p>Phasellus nunc nibh, efficitur ac dui eu, placerat ultrices ex. In hendrerit nulla id felis lobortis felis lobortis In hendrerit.</p>
                  </li>
               </ul>
            </div>
         </section>

         <section class="comnpadding product">
            <div class="newstopright "><img src="../../assets/images/newstopright.png" alt="" /></div>
            <div class="newsmiddle parallaxupdown"><img src="../../assets/images/newsmiddle.png" alt="" /></div>
            <div class="container">
               <div class="text-center">
                  <h2 class="comntitle">Our Products</h2>
               </div>
               <div class="row propc">
                  <div class="col-lg-3 col-sm-6">
                     <a href="">
                        <div class="productbox">
                           <img src="../../assets/images/product1.png" alt="" />
                           <div class="boxcaption">
                              <aside>Ravioli</aside>
                              <p>Our selection combines original fillings such as spelt ravioli, ratatuille, with great classics such as braised beef and ricotta and spinach. </p>
                           </div>
                        </div>
                     </a>
                  </div>
                  <div class="col-lg-3 col-sm-6">
                     <a href="">
                        <div class="productbox">
                           <img src="../../assets/images/product2.png" alt="" />
                           <div class="boxcaption">
                              <aside>Gnocchi</aside>
                              <p>Hot processed, they are particularly soft, tasty and maintain the right consistency for a long time.</p>
                           </div>
                        </div>
                     </a>
                  </div>

                  <div class="col-lg-3 col-sm-6">
                     <a href="">
                        <div class="productbox">
                           <img src="../../assets/images/product3.png" alt="" />
                           <div class="boxcaption">
                              <aside>Fresh Pasta</aside>
                              <p>Durum wheat pasta with bronze drawing. This process increases the porosity of the pasta, making it perfect for capturing the sauce and enhancing full-bodied sauces.</p>
                           </div>
                        </div>
                     </a>
                  </div>
                  <div class="col-lg-3 col-sm-6">
                     <a href="">
                        <div class="productbox">
                           <img src="../../assets/images/product4.png" alt="" />
                           <div class="boxcaption">
                              <aside>Ready Meals</aside>
                              <p>Quality ready-to-eat meals made with our fresh pasta and refined condiments perfect for take-out.</p>
                           </div>
                        </div>
                     </a>
                  </div>
               </div>


               <OwlCarousel id="product" {...ProductOwl} >
                  <div className='item'>
                     <a href="">
                        <div class="productbox">
                           <img src="../../assets/images/product1.png" alt="" />
                           <div class="boxcaption">
                              <aside>Ravioli</aside>
                              <p>Our selection combines original fillings such as spelt ravioli, ratatuille, with great classics such as braised beef and ricotta and spinach. </p>
                           </div>
                        </div>
                     </a>
                  </div>

                  <div className='item'>
                     <a href="">
                        <div class="productbox">
                           <img src="../../assets/images/product2.png" alt="" />
                           <div class="boxcaption">
                              <aside>Gnocchi</aside>
                              <p>Hot processed, they are particularly soft, tasty and maintain the right consistency for a long time.</p>
                           </div>
                        </div>
                     </a>
                  </div>

                  <div className='item'>
                     <a href="">
                        <div class="productbox">
                           <img src="../../assets/images/product3.png" alt="" />
                           <div class="boxcaption">
                              <aside>Fresh Pasta</aside>
                              <p>Durum wheat pasta with bronze drawing. This process increases the porosity of the pasta, making it perfect for capturing the sauce and enhancing full-bodied sauces.</p>
                           </div>
                        </div>
                     </a>
                  </div>

                  <div className='item'>
                     <a href="">
                        <div class="productbox">
                           <img src="../../assets/images/product4.png" alt="" />
                           <div class="boxcaption">
                              <aside>Ready Meals</aside>
                              <p>Quality ready-to-eat meals made with our fresh pasta and refined condiments perfect for take-out.</p>
                           </div>
                        </div>
                     </a>
                  </div>

               </OwlCarousel>

            </div>
         </section>

         <section class="comnpadding production">
            <div class="proone parallaxupdown"><img src="../../assets/images/proelement1.png" alt="" /></div>
            <div class="protwo"><img src="../../assets/images/proelement2.png" alt="" /></div>
            <div class="container">
               <div class="row align-items-center flex-row-reverse marginbt">

                  <div class="col-md-6">
                     <h3 class="comntitle">Craftsmanship</h3>
                     <p class="innerpara">We are convinced that putting human beings and their manual skills at the center of production processes is an added value. Behind each of our products there is a person who, with creativity, energy and passion, guarantees the excellence
                        of the work. </p>
                  </div>
                  <div class="col-md-6">
                     <div class="proimg">
                        <img src="../../assets/images/production2.png" alt="" />
                     </div>
                  </div>

               </div>

               <div class="row align-items-center">

                  <div class="col-md-6">
                     <div class="protextend">
                        <h3 class="comntitle">Production & Certifications </h3>
                        <p class="innerpara">Our mission is to create, develop and market fresh and tasty food products based on our corporate values. This allows us to produce in a controlled and safety.</p>
                     </div>
                  </div>
                  <div class="col-md-6">
                     <div class="proimg proimgbottom">
                        <img src="../../assets/images/production1.png" alt="" />
                     </div>
                  </div>

               </div>
            </div>
         </section>


         <section class="comnpadding statistics">
            <div class="statisbottomright parallaxupdown"><img src="../../assets/images/statisbottomright.png" alt="" /></div>
            <div class="statisbottomleft"><img src="../../assets/images/statisbottomrleft.png" alt="" /></div>
            <div class="container">
               <div class="text-center">
                  <h2 class="comntitle">The numbers of Pastificio Di Lella</h2>
               </div>
               <ul class="countermain">
                  <li>
                     <div class="count">54</div>
                     <p>Years of Experience</p>
                  </li>
                  <li>
                     <div class="count">20</div>
                     <p>qualified team members</p>
                  </li>
                  <li>
                     <div class="count">2</div>
                     <p>million meals per year</p>
                  </li>
                  <li>
                     <div class="count">200</div>
                     <p>different products</p>
                  </li>
               </ul>
            </div>
         </section>


         <section class="comnpadding social">
            <div class="socialone parallaxupdown"><img src="../../assets/images/socialele.png" alt="" /></div>
            <div class="container">
               <div class="text-center">
                  <h4 class="comntitle">Our Social Community</h4>
               </div>
               <div class="row">
                  <div class="col-sm-12">
                     <img src="../../assets/images/socialimg.png" class="w-100" alt="" />
                  </div>
               </div>
            </div>
         </section>

      </>

   )
}

export default HomePage;