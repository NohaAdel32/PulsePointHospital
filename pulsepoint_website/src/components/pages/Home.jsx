
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroImage from "../heroImage/HeroImage.jsx";
import Appointments from "../Appointments/Appointments.jsx";
import Search from "../search/Search.jsx";
import {DoctorShow} from "../Doctors/DoctorShow.jsx";
import {DummyDoctors} from "../Doctors/dummy-doctors.js";
import ContactUs from "../contactUs/ContactUs.jsx";
import Pharmacy from '../Pharmacy/Pharmacy.jsx';
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
                <DoctorShow initialCount={3} DummyDoctors={DummyDoctors} title="Meet Our Doctors"/>
                <Appointments />
                <ContactUs/>
                <Pharmacy />
            </div>
        </>

    )
}