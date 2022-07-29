import { React, useState } from 'react';
import { ReactDOM, Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import Filters from './Filters/Filters';
import $ from 'jquery';

$(document).ready(function () {
   var $grid = $(".grid").isotope({
       itemSelector: ".all",
       percentPosition: false,
       masonry: {
           columnWidth: ".all"
       }
   });


   if ($('.filters-content').length) {
       var $elements = $(".filters-content"),
           $filters = $('.filters ul li');
       $elements.isotope();

       $filters.on('click', function () {
           $filters.removeClass('active');
           $(this).addClass('active');
           var selector = $(this).data('filter');
           $(".filters-content").isotope({
               filter: selector,
               transitionDuration: '.5s',
           });
       });
   };

   $grid.imagesLoaded().progress(function () {
       $grid.isotope('layout');
   });
});

const SellingOwl = {
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
   }
};

const Eshop = () => {
   // Counter State Start Here
   const [counter1, setCounter1] = useState(1);
   const [counter2, setCounter2] = useState(1);
   const [counter3, setCounter3] = useState(1);
   const [counter4, setCounter4] = useState(1);

   const increase = (value) => {
      if (value === "counter1") {
         setCounter1(count => count + 1);
      } else if (value === "counter2") {
         setCounter2(count => count + 1);
      } else if (value === "counter3") {
         setCounter3(count => count + 1);
      } else if (value === "counter4") {
         setCounter4(count => count + 1);
      } else {}

   };
   const decrease = (value) => {
      if (counter1 > 1) {
         setCounter1(count => count - 1);
      } else if (counter2 > 1) {
         setCounter2(count => count - 1);
      } else if (counter3 > 1) {
         setCounter3(count => count - 1);
      } else if (counter4 > 1) {
         setCounter4(count => count - 1);
      } else {}
   };
   // Counter State End Here
   return (
      <>

         <section className="banner smallbanner">
            <div id="bannerowl">
               <img src="../../assets/images/banner4.jpg" alt="" />
            </div>
         </section>

         <section className="selling">
            <div className="container">
               <h1 className="comntitle">Best Selling Products</h1>
               <div className="row sellpc">
                  <div className="col-lg-3 col-sm-6">
                     <div className="sellingbox">
                        <Link to="/ProductDetail" type="button"><img src="../../assets/images/selling1.png" alt="" /></Link>
                        <div className="bottombox">
                           <small>Classic Ravioli</small>
                           <Link to="/ProductDetail" type="button"><h6>Braised beef Ravioli</h6></Link>
                           <aside><span>CHF 12.50</span>/250g</aside>
                           <div className="sellingwrap">
                              <button type="button" className="sub" onClick={() => decrease("counter1")}>-</button>
                              <span className='count'>{counter1}</span>
                              <button type="button" className="add" onClick={() => increase('counter1')}>+</button>
                           </div>
                           <Link to="/ProductDetail" type="button" className="cartbtn"><i className="fas fa-shopping-cart"></i></Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                     <div className="sellingbox">
                        <Link to="/ProductDetail" type="button"><img src="../../assets/images/selling2.png" alt="" /></Link>
                        <div className="bottombox">
                           <small>Classic Ravioli</small>
                           <Link to="/ProductDetail" type="button"><h6>Braised beef Ravioli</h6></Link>
                           <aside><span>CHF 12.50</span>/250g</aside>
                           <div className="sellingwrap">
                              <button type="button" className="sub" onClick={() => decrease("counter2")}>-</button>
                              <span className='count'>{counter2}</span>
                              <button type="button" className="add" onClick={() => increase("counter2")}>+</button>
                           </div>
                           <Link to="/ProductDetail" type="button" className="cartbtn"><i className="fas fa-shopping-cart"></i></Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                     <div className="sellingbox">
                        <Link to="/ProductDetail" type="button"><img src="../../assets/images/selling3.png" alt="" /></Link>
                        <div className="bottombox">
                           <small>Classic Ravioli</small>
                           <Link to="/ProductDetail" type="button"><h6>Braised beef Ravioli</h6></Link>
                           <aside><span>CHF 12.50</span>/250g</aside>
                           <div className="sellingwrap">
                              <button type="button" className="sub" onClick={() => decrease("counter3")}>-</button>
                              <span className='count'>{counter3}</span>
                              <button type="button" className="add" onClick={() => increase('counter3')}>+</button>
                           </div>
                           <Link to="/ProductDetail" type="button" className="cartbtn"><i className="fas fa-shopping-cart"></i></Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                     <div className="sellingbox">
                        <Link to="/ProductDetail" type="button"><img src="../../assets/images/selling4.png" alt="" /></Link>
                        <div className="bottombox">
                           <small>Classic Ravioli</small>
                           <Link to="/ProductDetail" type="button"><h6>Braised beef Ravioli</h6></Link>
                           <aside><span>CHF 12.50</span>/250g</aside>
                           <div className="sellingwrap">
                              <button type="button" className="sub" onClick={() => decrease("counter4")}>-</button>
                              <span className='count'>{counter4}</span>
                              <button type="button" className="add" onClick={() => increase('counter4')}>+</button>
                           </div>
                           <Link to="/ProductDetail" type="button" className="cartbtn"><i className="fas fa-shopping-cart"></i></Link>
                        </div>
                     </div>
                  </div>
               </div>

               <OwlCarousel id='selling' {...SellingOwl}>
                  <div className="item">
                     <div className="sellingbox">
                        <Link to="/ProductDetail" type="button"><img src="../../assets/images/selling1.png" alt="" /></Link>
                        <div className="bottombox">
                           <small>Classic Ravioli</small>
                           <Link to="/ProductDetail" type="button"><h6>Braised beef Ravioli</h6></Link>
                           <aside><span>CHF 12.50</span>/250g</aside>
                           <div className="sellingwrap">
                              <button type="button" className="sub">-</button>
                              <input className="count" type="text" value="1" min="1" max="100" readonly />
                              <button type="button" className="add">+</button>
                           </div>
                           <Link to="/ProductDetail" type="button" className="cartbtn"><i className="fas fa-shopping-cart"></i></Link>
                        </div>
                     </div>
                  </div>
                  <div className="item">
                     <div className="sellingbox">
                        <Link to="/ProductDetail" type="button"><img src="../../assets/images/selling2.png" alt="" /></Link>
                        <div className="bottombox">
                           <small>Classic Ravioli</small>
                           <Link to="/ProductDetail" type="button"><h6>Braised beef Ravioli</h6></Link>
                           <aside><span>CHF 12.50</span>/250g</aside>
                           <div className="sellingwrap">
                              <button type="button" className="sub">-</button>
                              <input className="count" type="text" value="1" min="1" max="100" readonly />
                              <button type="button" className="add">+</button>
                           </div>
                           <Link to="/ProductDetail" type="button" className="cartbtn"><i className="fas fa-shopping-cart"></i></Link>
                        </div>
                     </div>
                  </div>
                  <div className="item">
                     <div className="sellingbox">
                        <Link to="/ProductDetail" type="button"><img src="../../assets/images/selling3.png" alt="" /></Link>
                        <div className="bottombox">
                           <small>Classic Ravioli</small>
                           <Link to="/ProductDetail" type="button"><h6>Braised beef Ravioli</h6></Link>
                           <aside><span>CHF 12.50</span>/250g</aside>
                           <div className="sellingwrap">
                              <button type="button" className="sub">-</button>
                              <input className="count" type="text" value="1" min="1" max="100" readonly />
                              <button type="button" className="add">+</button>
                           </div>
                           <Link to="/ProductDetail" type="button" className="cartbtn"><i className="fas fa-shopping-cart"></i></Link>
                        </div>
                     </div>
                  </div>
                  <div className="item">
                     <div className="sellingbox">
                        <Link to="/ProductDetail" type="button"><img src="../../assets/images/selling4.png" alt="" /></Link>
                        <div className="bottombox">
                           <small>Classic Ravioli</small>
                           <Link to="/ProductDetail" type="button"><h6>Braised beef Ravioli</h6></Link>
                           <aside><span>CHF 12.50</span>/250g</aside>
                           <div className="sellingwrap">
                              <button type="button" className="sub">-</button>
                              <input className="count" type="text" value="1" min="1" max="100" readonly />
                              <button type="button" className="add">+</button>
                           </div>
                           <Link to="/ProductDetail" type="button" className="cartbtn"><i className="fas fa-shopping-cart"></i></Link>
                        </div>
                     </div>
                  </div>
               </OwlCarousel>


            </div>
            <div className="eshopone parallaxupdown"><img src="../../assets/images/eshop1.png" alt="" /></div>
         </section>

         <section className="ourall">
            <div className="container">
               <div className="row">
                  <div className="col-sm-12">
                     <div className="ourallinner">
                        <h2 className="smalltitle">Our All Products</h2>
                        <div className="ourright">
                           <div className="filters">
                              <ul>
                                 <li className="active" data-filter="*">All</li>
                                 <li data-filter=".ravioli">Ravioli</li>
                                 <li data-filter=".gnocchi">Gnocchi</li>
                                 <li data-filter=".freshpasta">Fresh Pasta</li>
                              </ul>
                           </div>

                           <div className="dropdown ouralldrop">
                              <button className="btnshort" type="button" id="dropdownMenuButton1" aria-expanded="false">
                                 Default sorting
                              </button>
                              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                 <li><a className="dropdown-item" href="#">Popularity</a></li>
                                 <li><a className="dropdown-item" href="#">Low to High</a></li>
                                 <li><a className="dropdown-item" href="#">High to Low</a></li>
                                 <li><a className="dropdown-item" href="#">Newest First</a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div>
                  {/* <Filters /> */}
                  <div className="row grid filters-content">
                     <div className="col-lg-3 col-sm-6 all ravioli">
                        <div className="sellingbox ourallwhite">
                           <img src="../../assets/images/selling5.png" alt="" />
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
                     <div className="col-lg-3 col-sm-6 all gnocchi">
                        <div className="sellingbox ourallwhite">
                           <img src="../../assets/images/selling6.png" alt="" />
                           <div className="bottombox">
                              <small>Classic Gnocchi</small>
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
                     <div className="col-lg-3 col-sm-6 all freshpasta">
                        <div className="sellingbox ourallwhite">
                           <img src="../../assets/images/selling7.png" alt="" />
                           <div className="bottombox">
                              <small>Classic Fresh Pasta</small>
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
                     <div className="col-lg-3 col-sm-6 all ravioli">
                        <div className="sellingbox ourallwhite">
                           <img src="../../assets/images/selling8.png" alt="" />
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
                     <div className="col-lg-3 col-sm-6 all gnocchi">
                        <div className="sellingbox ourallwhite">
                           <img src="../../assets/images/selling1.png" alt="" />
                           <div className="bottombox">
                              <small>Classic Gnocchi</small>
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
                     <div className="col-lg-3 col-sm-6 all freshpasta">
                        <div className="sellingbox ourallwhite">
                           <img src="../../assets/images/selling2.png" alt="" />
                           <div className="bottombox">
                              <small>Classic Fresh Pasta</small>
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
                     <div className="col-lg-3 col-sm-6 all ravioli">
                        <div className="sellingbox ourallwhite">
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
                     <div className="col-lg-3 col-sm-6 all gnocchi">
                        <div className="sellingbox ourallwhite">
                           <img src="../../assets/images/selling4.png" alt="" />
                           <div className="bottombox">
                              <small>Classic Gnocchi</small>
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
                     <div className="col-lg-3 col-sm-6 all freshpasta">
                        <div className="sellingbox ourallwhite">
                           <img src="../../assets/images/selling5.png" alt="" />
                           <div className="bottombox">
                              <small>Classic Fresh Pasta</small>
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
                     <div className="col-lg-3 col-sm-6 all ravioli">
                        <div className="sellingbox ourallwhite">
                           <img src="../../assets/images/selling6.png" alt="" />
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
                     <div className="col-lg-3 col-sm-6 all gnocchi">
                        <div className="sellingbox ourallwhite">
                           <img src="../../assets/images/selling7.png" alt="" />
                           <div className="bottombox">
                              <small>Classic Gnocchi</small>
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
                     <div className="col-lg-3 col-sm-6 all freshpasta">
                        <div className="sellingbox ourallwhite">
                           <img src="../../assets/images/selling8.png" alt="" />
                           <div className="bottombox">
                              <small>Classic Fresh Pasta</small>
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
                  </div>
               </div>
            </div>
         </section>


         <section className="comnpadding itwork">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-6">
                     <div className="workimg">
                        <img src="../../assets/images/howdoseitwork.png" alt="" />
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <h3 className="comntitle">How does it work?</h3>
                     <p className="workpara">These products are made with authentic Italian pasta-making expertise in Ticino, the Italian part of Switzerland. The pasta and fillings are 100% handmade and packaged with care. The ordering process is easy and quick, and in accordance
                        with our corporate philosophy, the production practices strive to be always more sustainable and environment-friendly. Therefore, the products arrive in recyclable cardboard trays, and sealed in reusable insulated boxes.</p>
                     <div className="text-end">
                        <a href="" className="readbtn">Read More <img src="../../assets/images/doesarrow.svg" alt="" /></a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="workone parallaxupdown"><img src="../../assets/images/workelement.png" alt="" /></div>
         </section>

      </>
   )
}

export default Eshop