import AboutUs from "../aboutUs/AboutUs.jsx";
import {Link} from "react-router-dom";
import React from "react";
import aout from '../../assets/aout.jfif'
import Search from "../search/Search.jsx";
import ContactUs from "../contactUs/ContactUs.jsx";

export default function AboutUsPage(){
    return(
        <>
            <div className="parent-header">
                <div className="header-img">
                    <img src={aout} alt="Doctors" width="100%" height="250rem" />
                </div>
                <div className="header-overlay"></div>
                <div className="breadcrumb-parent">
                    <h2>ABOuT US</h2>
                    <ol className="breadcrumb">

                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" >About US</li>
                    </ol>
                </div>
            </div>
            <Search/>
        <AboutUs/>
            <ContactUs/>
        </>
    )
}