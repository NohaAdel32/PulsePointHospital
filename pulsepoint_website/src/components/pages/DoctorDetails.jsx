

import DoctorDetail from "../Doctors/doctorDetails.jsx";
import breadcrum_image from "../../assets/doctor.jpg";
import {Link} from "react-router-dom";
import React from "react";
import Search from "../search/Search.jsx";
import {Fade} from "react-awesome-reveal";
import Appointments from "../Appointments/Appointments.jsx";
export default function DoctorDetails(){
    
    return(
        <>
            <div className="parent-header">
                <div className="header-img">
                    <img src={breadcrum_image} alt="Doctors" width="100%" height="250rem" />
                </div>
                <div className="header-overlay"></div>
                <div className="breadcrumb-parent">
                    <h2>Doctor Details</h2>
                    <ol className="breadcrumb">

                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" >Doctor Details</li>
                    </ol>
                </div>
            </div>
            <Search/>
        <DoctorDetail/>
            <Fade cascade damping={0.15} direction="up" triggerOnce>
                <Appointments />
            </Fade>
        </>
    )
}
