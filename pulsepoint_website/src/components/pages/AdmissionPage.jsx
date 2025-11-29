import Admission from "../addmission/Admission.jsx";
import {Link, useLocation} from "react-router-dom";
import React, {useEffect} from "react";
import addm_image from"../../assets/room3.jpg"
import {Fade} from "react-awesome-reveal";
import AdmissionForm from "../addmission/AdmissionForm.jsx";
export default function AdmissionPage(){
    const location = useLocation();
    useEffect(() => {
        if (location.hash === '#Admission-form') {
            const element = document.getElementById('Admission-form');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);
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
        <Admission initialCount={6} title="Inpatient / Admission"/>
            <Fade cascade damping={0.15} direction="up" triggerOnce>
                <AdmissionForm />
            </Fade>
        </>
    )
}