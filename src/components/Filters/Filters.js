import React, { useState } from "react";
import IsoTopeGrid from "react-isotope";
import FiltersList from "./FiltersList";
import CardsList from "./CardsList";

export default function Filters() {
   // Local state for managing filtering logic
   const [filters, updateFilters] = useState(FiltersList);

   // Filter change handler
   const onFilter = event => {
      const {
         target: { value, checked }
      } = event;

      updateFilters(state =>
         state.map(f => {
            if (f.label === value) {
               return {
                  ...f,
                  isChecked: checked
               };
            }
            else {
               return {
                  ...f,
               };
            }
         })
      );
   };

   return (
      <div className="App filters">
         {/* { Filter component } */}
         <ul className="filter-container">
            {filters.map(f => (
               <li className="filter" key={`${f.label}_key`}>
                  <input
                     id={f.label}
                     type="checkbox"
                     value={f.label}
                     onChange={onFilter}
                     checked={f.isChecked}
                  />
                  <label htmlFor={f.label}>{f.label}</label>
               </li>
            ))}
         </ul>

         <div className="container">
            <IsoTopeGrid
               gridLayout={CardsList} // gridlayout of cards
               noOfCols={4} // number of columns show in one row
               unitWidth={200} // card width of 1 unit
               unitHeight={100} // card height of 1 unit
               filters={filters} // list of selected filters
            >
               {CardsList.map(card => {
                  return (


                     <div key={card.id} className={card.filter[0]}>
                           <div className="sellingbox ourallwhite">
                              <img src="../../assets/images/selling3.png" alt="" />
                              <div className="bottombox">
                                 <small>{card.subname}</small>
                                 <h6>{card.name}</h6>
                                 <aside><span>{card.price}</span>/250g</aside>
                                 <div className="sellingwrap">
                                    <button type="button" className="sub">-</button>
                                    <input className="count" type="text" value="1" min="1" max="100" readonly />
                                    <button type="button" className="add">+</button>
                                 </div>
                                 <a href="" className="cartbtn"><i className="fas fa-shopping-cart"></i></a>
                           </div>
                        </div>
                     </div>
                  )
               }
               )}
            </IsoTopeGrid>
         </div>
      </div>
   );
}