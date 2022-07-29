import { React, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';


const RelatedOwl = {
   loop: true,
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
      768: {
         items: 2,
      },
      1024: {
         items: 3,
      },
      1366: {
         items: 4,
      }
   }
};

const ProductDetail = () => {
   // Counter State Start Here
   const [counter, setCounter] = useState(1);

   const increase = (value) => {
      if (value === "counter") {
         setCounter(count => count + 1);
      } else { }

   };
   const decrease = (value) => {
      if (counter > 1) {
         setCounter(count => count - 1);
      } else { }
   };
   // Counter State End Here
   return (
      <>

         <section className="banner smallbanner">
            <div id="bannerowl">
               <img src="../../assets/images/banner4.jpg" alt="" />
            </div>
         </section>


         <section className="comnpadding pdetail">
            <div className="container">
               <div className="row">
                  <div className="col-lg-6">
                     <div className="magnifier">
                        <img src="../../assets/images/dproduct1.jpg" alt="" />
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="detailbox">
                        <h1 className="comntitle">Braised beef Ravioli</h1>
                        <p className="innerpara">Fresh pasta made from durum wheat flour and fresh eggs, stuffed with braised beef. Square format 5x5cm.</p>
                        <div className="detailprice">
                           <aside><span>CHF 12.50</span>/300g</aside>
                        </div>
                        <div className="row">
                           <div className="col-md-6">
                              <div className="detailhalf">
                                 <aside>Origin of beef:</aside>
                                 <span>CH</span>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="detailhalf">
                                 <aside>Allergens:</aside>
                                 <span>gluten, lactose, eggs, celery</span>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="detailhalf">
                                 <aside>Recommended sauce:</aside>
                                 <span>butter and sage</span>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="detailhalf">
                                 <aside>Storage time and storage conditions:</aside>
                                 <span>up to 5 days in the refrigerator at max. 5°C</span>
                              </div>
                           </div>
                        </div>
                        <div className="detailcat">
                           <aside><span>Category: </span>Classic Ravioli</aside>
                        </div>
                        <div className="sellingwrap">
                           <button type="button" className="sub" onClick={() => decrease("counter")}>-</button>
                           <span className='count'>{counter}</span>
                           <button type="button" className="add" onClick={() => increase('counter')}>+</button>
                        </div>
                        <div className="detailcart">
                           <a href="" className="shopbtn">Add To Cart <i className="fas fa-shopping-cart"></i></a>
                           <a href="" className="wishbtn" title="Add To Wishlist"><i className="fas fa-heart"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="pdelement parallaxupdown"><img src="../../assets/images/pdetail1.png" alt="" /></div>
         </section>


         <section className="comnpadding addi">
            <div className="container">
               <ul className="nav nav-tabs additabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                     <button className="nav-link active" id="desc-tab" data-bs-toggle="tab" data-bs-target="#desc" type="button" role="tab" aria-controls="desc" aria-selected="true">DESCRIPTION</button>
                  </li>
                  <li className="nav-item" role="presentation">
                     <button className="nav-link" id="info-tab" data-bs-toggle="tab" data-bs-target="#info" type="button" role="tab" aria-controls="info" aria-selected="false">ADDITIONAL INFORMATION</button>
                  </li>
                  <li className="nav-item" role="presentation">
                     <button className="nav-link" id="faq-tab" data-bs-toggle="tab" data-bs-target="#faq" type="button" role="tab" aria-controls="faq" aria-selected="false">FAQ</button>
                  </li>
               </ul>
               <div className="tab-content addicontent" id="myTabContent">
                  <div className="tab-pane fade show active" id="desc" role="tabpanel" aria-labelledby="desc-tab">
                     <p className="innerpara">One of the great specialties of Ticino cuisine, braised beef is also excellent as a filling. First we brown the Swiss beef shoulder in a pan, then add the fresh vegetables and the high heat releases the juices of the ingredients. Everything
                        is then braised in red wine for 6 hours… Really full-bodied and fragrant!</p>
                  </div>
                  <div className="tab-pane fade" id="info" role="tabpanel" aria-labelledby="info-tab">
                     <p className="innerpara">Weight 250 g</p>
                  </div>
                  <div className="tab-pane fade" id="faq" role="tabpanel" aria-labelledby="faq-tab">
                     <div className="faq__wrapper">

                        <div className="faqdiv">
                           <div className="faqhead">
                              <h4 className="headtitle">What happens if I don't send the thermobox back?</h4>
                           </div>
                           <div className="faqbody">
                              <p className="innerpara">After 30 days you will be sent a reminder to ship it. If this is not done, you will be billed CHF 45.-</p>
                           </div>
                        </div>

                        <div className="faqdiv">
                           <div className="faqhead">
                              <h4 className="headtitle">How can I send the thermobox back?</h4>
                           </div>
                           <div className="faqbody">
                              <p className="innerpara">Inside the thermobox you will find an envelope in which a label with a barcode is inserted. Once you have taken your goods, you just have to stick the label on the thermobox and deliver it directly to the postman or take
                                 it later to any post office.</p>
                           </div>
                        </div>

                        <div className="faqdiv">
                           <div className="faqhead">
                              <h4 className="headtitle">What is the recommended amount of ravioli / gnocchi / pasta per person?</h4>
                           </div>
                           <div className="faqbody">
                              <p className="innerpara">The quantity in grams of product per person varies by the type of dish you want to cook (single dish; first course; side dish) and with what it is served.</p>
                              <p className="innerpara">Normally about 150g-200g of ravioli, 200g-250g of gnocchi and 100g-150g of fresh pasta are calculated per person per single dish</p>
                           </div>
                        </div>

                        <div className="faqdiv">
                           <div className="faqhead">
                              <h4 className="headtitle">What happens if I'm not home when my order arrives?</h4>
                           </div>
                           <div className="faqbody">
                              <p className="innerpara">The products are packed in a thermal box that keeps them cool for up to 48 hours. </p>
                              <p className="innerpara">Swiss Post offers two delivery options via the "My consignments" online service (under certain conditions, see www.post.ch) if the recipient's absence is planned: deposit (near the stairs / on the stairs; at the front door
                                 ; at the letterbox facility) and delivery to neighbors .</p>
                              <p className="innerpara">In the event of an unsuccessful shipment, you can collect it personally with the collection invitation at the Swiss Post branch indicated on the invitation within the following 24 hours.</p>
                           </div>
                        </div>

                        <div className="faqdiv">
                           <div className="faqhead">
                              <h4 className="headtitle">Can I freeze the products?</h4>
                           </div>
                           <div className="faqbody">
                              <p className="innerpara">Yes, all products can be frozen without problems for a maximum duration of 3 months. Freezing does not affect the quality and taste of the product in any way.</p>
                           </div>
                        </div>

                        <div className="faqdiv">
                           <div className="faqhead">
                              <h4 className="headtitle">How long can I keep the products in the refrigerator?</h4>
                           </div>
                           <div className="faqbody">
                              <p className="innerpara">The products can be stored in the refrigerator for up to 5 days at a maximum temperature of 5 ° C.</p>
                           </div>
                        </div>

                     </div>
                  </div>
               </div>
            </div>
         </section>


         <section className="comnpadding related">
            <div className="container">
               <h2 className="comntitle">Related Products</h2>
               <OwlCarousel id='related' {...RelatedOwl}>
                  <div className="item">
                     <div className="sellingbox">
                        <img src="../../assets/images/selling1.png" alt="" />
                        <div className="bottombox">
                           <small>Classic Ravioli</small>
                           <h6>Braised beef Ravioli</h6>
                           <aside><span>CHF 12.50</span>/250g</aside>
                           <div className="sellingwrap">
                              <button type="button" className="sub">-</button>
                              <input className="count" type="text" value="1" min="1" max="100" readonly />
                              <button type="button" className="add">+</button>
                           </div>
                           <a href="" className="cartbtn"><i className="fas fa-shopping-cart"></i></a>
                        </div>
                     </div>
                  </div>

                  <div className="item">
                     <div className="sellingbox">
                        <img src="../../assets/images/selling2.png" alt="" />
                        <div className="bottombox">
                           <small>Classic Ravioli</small>
                           <h6>Braised beef Ravioli</h6>
                           <aside><span>CHF 12.50</span>/250g</aside>
                           <div className="sellingwrap">
                              <button type="button" className="sub">-</button>
                              <input className="count" type="text" value="1" min="1" max="100" readonly />
                              <button type="button" className="add">+</button>
                           </div>
                           <a href="" className="cartbtn"><i className="fas fa-shopping-cart"></i></a>
                        </div>
                     </div>
                  </div>

                  <div className="item">
                     <div className="sellingbox">
                        <img src="../../assets/images/selling3.png" alt="" />
                        <div className="bottombox">
                           <small>Classic Ravioli</small>
                           <h6>Braised beef Ravioli</h6>
                           <aside><span>CHF 12.50</span>/250g</aside>
                           <div className="sellingwrap">
                              <button type="button" className="sub">-</button>
                              <input className="count" type="text" value="1" min="1" max="100" readonly />
                              <button type="button" className="add">+</button>
                           </div>
                           <a href="" className="cartbtn"><i className="fas fa-shopping-cart"></i></a>
                        </div>
                     </div>
                  </div>

                  <div className="item">
                     <div className="sellingbox">
                        <img src="../../assets/images/selling4.png" alt="" />
                        <div className="bottombox">
                           <small>Classic Ravioli</small>
                           <h6>Braised beef Ravioli</h6>
                           <aside><span>CHF 12.50</span>/250g</aside>
                           <div className="sellingwrap">
                              <button type="button" className="sub">-</button>
                              <input className="count" type="text" value="1" min="1" max="100" readonly />
                              <button type="button" className="add">+</button>
                           </div>
                           <a href="" className="cartbtn"><i className="fas fa-shopping-cart"></i></a>
                        </div>
                     </div>
                  </div>

                  <div className="item">
                     <div className="sellingbox">
                        <img src="../../assets/images/selling1.png" alt="" />
                        <div className="bottombox">
                           <small>Classic Ravioli</small>
                           <h6>Braised beef Ravioli</h6>
                           <aside><span>CHF 12.50</span>/250g</aside>
                           <div className="sellingwrap">
                              <button type="button" className="sub">-</button>
                              <input className="count" type="text" value="1" min="1" max="100" readonly />
                              <button type="button" className="add">+</button>
                           </div>
                           <a href="" className="cartbtn"><i className="fas fa-shopping-cart"></i></a>
                        </div>
                     </div>
                  </div>

                  <div className="item">
                     <div className="sellingbox">
                        <img src="../../assets/images/selling2.png" alt="" />
                        <div className="bottombox">
                           <small>Classic Ravioli</small>
                           <h6>Braised beef Ravioli</h6>
                           <aside><span>CHF 12.50</span>/250g</aside>
                           <div className="sellingwrap">
                              <button type="button" className="sub">-</button>
                              <input className="count" type="text" value="1" min="1" max="100" readonly />
                              <button type="button" className="add">+</button>
                           </div>
                           <a href="" className="cartbtn"><i className="fas fa-shopping-cart"></i></a>
                        </div>
                     </div>
                  </div>

                  <div className="item">
                     <div className="sellingbox">
                        <img src="../../assets/images/selling3.png" alt="" />
                        <div className="bottombox">
                           <small>Classic Ravioli</small>
                           <h6>Braised beef Ravioli</h6>
                           <aside><span>CHF 12.50</span>/250g</aside>
                           <div className="sellingwrap">
                              <button type="button" className="sub">-</button>
                              <input className="count" type="text" value="1" min="1" max="100" readonly />
                              <button type="button" className="add">+</button>
                           </div>
                           <a href="" className="cartbtn"><i className="fas fa-shopping-cart"></i></a>
                        </div>
                     </div>
                  </div>

                  <div className="item">
                     <div className="sellingbox">
                        <img src="../../assets/images/selling4.png" alt="" />
                        <div className="bottombox">
                           <small>Classic Ravioli</small>
                           <h6>Braised beef Ravioli</h6>
                           <aside><span>CHF 12.50</span>/250g</aside>
                           <div className="sellingwrap">
                              <button type="button" className="sub">-</button>
                              <input className="count" type="text" value="1" min="1" max="100" readonly />
                              <button type="button" className="add">+</button>
                           </div>
                           <a href="" className="cartbtn"><i className="fas fa-shopping-cart"></i></a>
                        </div>
                     </div>
                  </div>
               </OwlCarousel>

            </div>
         </section>


      </>
   )
}

export default ProductDetail