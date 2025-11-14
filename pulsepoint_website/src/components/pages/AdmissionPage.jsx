import Admission from "../addmission/Admission.jsx";
import breadcrum_image from "../../assets/contact.jpg";
import {Link} from "react-router-dom";
import React from "react";
import addm_image from"../../assets/room3.jpg"
export default function AdmissionPage(){
    return(
        <>
            <div className="parent-header">
                <div className="header-img">
                    <img src={addm_image} alt="Doctors" width="100%" height="250rem" />
                </div>
                <div className="header-overlay"></div>
                <div className="breadcrumb-parent">
                    <h2>Inpatient / Admissions</h2>
                    <ol className="breadcrumb">

                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" >Inpatient - Admissions</li>
                    </ol>
                </div>
            </div>
        <Admission/>
        </>
    )
}