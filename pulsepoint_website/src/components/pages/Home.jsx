import React from "react";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroImage from "../heroImage/HeroImage.jsx";
import Appointments from "../Appointments/Appointments.jsx";
import Search from "../search/Search.jsx";
import {DoctorShow} from "../Doctors/DoctorShow.jsx";
import {DummyDoctors} from "../Doctors/dummy-doctors.js";
import ContactUs from "../contactUs/ContactUs.jsx";
import Pharmacy from '../Pharmacy/Pharmacy.jsx';
import Services from "../services/Services.jsx";
import {Fade} from "react-awesome-reveal";
export default function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#appointment-form') {
            const element = document.getElementById('appointment-form');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);
    return (
        <>
            <div>
                <HeroImage/>
                <Search/>
                <Services/>
                <DoctorShow initialCount={3} DummyDoctors={DummyDoctors} title="Meet Our Doctors"/>
                <Pharmacy />
                <Fade cascade damping={0.15} direction="left" triggerOnce>
                    <Appointments/>
                </Fade>
                <Fade cascade damping={0.15} direction="right" triggerOnce>
                <ContactUs/>
                </Fade>
            </div>
        </>

    )
}