import React, { useEffect } from "react";
import { useLocation, NavLink } from 'react-router-dom'

const Navbar = () => {

   const { pathname } = useLocation();
   useEffect(() => {
      window.scrollTo(0, 0);
   }, [pathname]);

   return (
      <header className="header">
         <div className="container">
            <div className="header-top">
               <a href="#" className="newsicon pc-logo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewbox="0 0 21 21">
                     <g id="Group_853" data-name="Group 853" transform="translate(-2.25 -2.25)">
                        <path id="Path_4248" data-name="Path 4248" d="M30.371,7.875H29.254a0,0,0,0,0,0,0V22.125a1.5,1.5,0,1,0,3,0V9.754a1.879,1.879,0,0,0-1.879-1.879Z" transform="translate(-9 -1.875)" />
                        <path id="Path_4249" data-name="Path 4249" d="M18.75,20.25V4.125A1.875,1.875,0,0,0,16.874,2.25H4.125A1.875,1.875,0,0,0,2.25,4.125v16.5A2.625,2.625,0,0,0,4.875,23.25H20.946a.054.054,0,0,0,.014-.105A3.005,3.005,0,0,1,18.75,20.25ZM5.25,6.75A.75.75,0,0,1,6,6H9a.75.75,0,0,1,.75.75v3A.75.75,0,0,1,9,10.5H6a.75.75,0,0,1-.75-.75ZM15,19.5H6.021a.764.764,0,0,1-.77-.714A.75.75,0,0,1,6,18h8.979a.764.764,0,0,1,.77.714A.75.75,0,0,1,15,19.5Zm0-3H6.021a.764.764,0,0,1-.77-.714A.75.75,0,0,1,6,15h8.979a.764.764,0,0,1,.77.714A.75.75,0,0,1,15,16.5Zm0-3H6.021a.764.764,0,0,1-.77-.714A.75.75,0,0,1,6,12h8.979a.764.764,0,0,1,.77.714A.75.75,0,0,1,15,13.5Zm0-3H12.021a.764.764,0,0,1-.77-.714A.75.75,0,0,1,12,9h2.979a.764.764,0,0,1,.77.714A.75.75,0,0,1,15,10.5Zm0-3H12.021a.764.764,0,0,1-.77-.714A.75.75,0,0,1,12,6h2.979a.764.764,0,0,1,.77.714A.75.75,0,0,1,15,7.5Z" />
                     </g>
                  </svg> News
               </a>
               <a href="tel:+41 (0)91 857 43 16"><i className="fas fa-mobile-alt"></i> +41 (0)91 857 43 16</a>
               <a href="mailto:info@di-lella.ch" className="emailid"><i className="fas fa-envelope"></i> info@di-lella.ch</a>
               <a href=""><i className="fas fa-shopping-cart"></i></a>
               <div className="dropdown langdrop">
                  <span className="dropdowntoggle" href="" role="button">EN</span>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                     <li><a className="dropdown-item" href="">IT</a></li>
                     <li><a className="dropdown-item" href="">DE</a></li>
                     <li><a className="dropdown-item" href="">FR</a></li>
                  </ul>
               </div>
            </div>

         </div>

         <nav className="navbar navbar-expand-lg">
            <div className="container">
               <NavLink to="/" type="button">
                  <a className="navbar-brand mobile-logo">
                     <img src="../../assets/images/logo-black.png" className="" alt="" />
                  </a>
               </NavLink>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav textshadow">
                     <li className="nav-item">
                        <NavLink to="/WhoWeAre" type="button" className="nav-link" aria-current="page">WHO WE ARE</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink to="/Product" type="button" className="nav-link">Products</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink to="/Eshop" type="button" className="nav-link">E-SHOP</NavLink>
                     </li>
                     <li className="nav-item  pc-logo">
                        <NavLink to="/" type="button" className="nav-link"><img src="../../assets/images/logo-black.png" alt="" /></NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink to="/Sustainability" type="button" className="nav-link">Sustainability</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink to="/Quality" type="button" className="nav-link">Quality</NavLink>
                     </li>
                     <li className="nav-item mobile-logo">
                        <a className="nav-link" href="#">news</a>
                     </li>
                     <li className="nav-item">
                        <NavLink to="/Contact" type="button" className="nav-link">CONTACTS</NavLink>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>


      </header>
   )
}

export default Navbar