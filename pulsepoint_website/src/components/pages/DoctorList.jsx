import '../../index.css';
import breadcrum_image from '../../assets/doctor.jpg';
import {Link} from "react-router-dom";
import Search from "../search/Search.jsx";
import React from "react";
import {DoctorShow} from "../Doctors/DoctorShow.jsx";
import Appointments from "../Appointments/Appointments.jsx";
import {Fade} from "react-awesome-reveal";
import {DummyDoctors} from "../Doctors/dummy-doctors.js";
export default function DoctorList(){
    return(
        <>
           <div className="parent-header">
               <div className="header-img">
                  <img src={breadcrum_image} alt="Doctors" width="100%" height="250rem" />
               </div>
               <div className="header-overlay"></div>
               <div className="breadcrumb-parent">
                   <h2>Our Doctors</h2>
                   <ol className="breadcrumb">

                       <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                       <li className="breadcrumb-item active" >Our Doctors</li>
                   </ol>
               </div>
           </div>
           <Search/>
          <DoctorShow initialCount={6} DummyDoctors={DummyDoctors} title='Meet our Doctors'/>
            <Fade cascade damping={0.15} direction="up" triggerOnce>
                <Appointments/>
            </Fade>
        </>
    )
}