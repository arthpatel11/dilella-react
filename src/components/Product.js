import React from 'react'

const Product = () => {
   return (
      <>

         <section className="banner smallbanner">
            <div id="bannerowl">
               <img src="../../assets/images/banner3.jpg" alt="" />
               <div className="bannercaption">
                  <aside>Our Products</aside>
               </div>
            </div>
         </section>

         <section className="comnpadding productinner">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-md-6">
                     <h1 className="comntitle marginbottom">Ravioli</h1>
                     <p className="innerpara">Our puff pastry is prepared only with durum wheat flour. According to the creations of the Master Pasta Makers, the dough is subsequently enriched with other types of flour each with specific nutritional characteristics or colored
                        with spices, squid ink or tomato. </p>
                  </div>
                  <div className="col-md-6">
                     <div className="productimage">
                        <img src="../../assets/images/productinner1.png" className="productimageone" alt="" />
                        <img src="../../assets/images/productinner2.png" className="productimagetwo" alt="" />
                     </div>
                     <div className="text-center">
                        <a href="#" className="shopbtn">Shop Now <img src="../../assets/images/shoparrow.svg" alt="" /></a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="proeleone"><img src="../../assets/images/proele1.png" alt="" /></div>
         </section>

         <section className="comnpadding productinner productinnerbg">
            <div className="container">
               <div className="row align-items-center flex-row-reverse">
                  <div className="col-md-6">
                     <h2 className="comntitle marginbottom">Gnocchi</h2>
                     <p className="innerpara">Our range of gnocchi includes both traditional products and recipes with a creative and colorful twist. In addition to the typical potato gnocchi, we offer pumpkin gnocchi, chestnut gnocchi and our beloved "cicche del nonno" or gnocchi
                        with fresh spianci. A great classic of our Pastificio.</p>
                  </div>
                  <div className="col-md-6">
                     <div className="productimage">
                        <img src="../../assets/images/productinner3.png" className="productimageone" alt="" />
                        <img src="../../assets/images/productinner4.png" className="productimagetwo" alt="" />
                     </div>
                     <div className="text-center">
                        <a href="#" className="shopbtn">Shop Now <img src="../../assets/images/shoparrow.svg" alt="" /></a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="elementone parallaxupdown"><img src="../../assets/images/element1.png" alt="" /></div>
         </section>


         <section className="comnpadding productinner">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-md-6">
                     <h3 className="comntitle marginbottom">Durum wheat & egg pasta</h3>
                     <p className="innerpara">Featuring different flours from the local mill and multiple shapes, our pasta is very fine yet durable and flavorful. The absence of eggs makes this type of pasta suitable for vegans. </p>
                     <p className="innerpara">Egg pasta recipes have remained unchanged over the decades. Always genuine and always good. Made from Swiss eggs, our egg pasta delights the palates of young and old alike.</p>
                  </div>
                  <div className="col-md-6">
                     <div className="productimage">
                        <img src="../../assets/images/productinner5.png" className="productimageone" alt="" />
                        <img src="../../assets/images/productinner6.png" className="productimagetwo" alt="" />
                     </div>
                     <div className="text-center">
                        <a href="#" className="shopbtn">Shop Now <img src="../../assets/images/shoparrow.svg" alt="" /></a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="elementthree"><img src="../../assets/images/element3.png" alt="" /></div>
         </section>


         <section className="comnpadding productinner productinnerbg">
            <div className="container">
               <div className="row align-items-center flex-row-reverse">
                  <div className="col-md-6">
                     <h4 className="comntitle marginbottom">Ready meals</h4>
                     <p className="innerpara">Our ready meals are fresh, tasty and convenient. Perfect for all those who do not have time to cook but at the same time would like to enjoy a healthy and complete dish.</p>
                  </div>
                  <div className="col-md-6">
                     <div className="productimage">
                        <img src="../../assets/images/productinner7.png" className="productimageone" alt="" />
                        <img src="../../assets/images/productinner8.png" className="productimagetwo" alt="" />
                     </div>
                     <div className="text-center">
                        <a href="#" className="shopbtn">Shop Now <img src="../../assets/images/shoparrow.svg" alt="" /></a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="elementfour parallaxupdown"><img src="../../assets/images/element4.png" alt="" /></div>
         </section>

      </>
   )
}

export default Product