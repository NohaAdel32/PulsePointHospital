import '../../index.css';
import pharmacy_image from '../../assets/pharmacy.jpg';
import {Link} from "react-router-dom";
import React from "react";
import {Fade} from "react-awesome-reveal";
import { PharmacyProvider } from '../../store/shoping-cart-context';
import Shop from '../Shop/Shop'
export default function PharmacyPage(){
    return(
        <>
            <div className="parent-header">
               <div className="header-img">
                  <img src={pharmacy_image} alt="Doctors" width="100%" height="250rem" />
               </div>
               <div className="header-overlay"></div>
               <div className="breadcrumb-parent">
                   <h2>Pharmacy</h2>
                   <ol className="breadcrumb">

                       <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                       <li className="breadcrumb-item active" >Pharmacy</li>
                   </ol>
               </div>
           </div>
           <PharmacyProvider>
            <div>
                <Shop />
            </div>
           </PharmacyProvider>
           
        </>
    )
}