import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import breadcrum_image from '../../assets/laboratory.jpg';
import { LaboratoryShow } from "../Laboratory/LaboratoryShow";
import { DummyLaboratory } from "../Laboratory/dummy-laboratory";
import LaboratoryForm from "../Laboratory/LaboratoryForm";
import { Fade } from "react-awesome-reveal";

export default function Laboratory() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#laboratory-form') {
            const element = document.getElementById('laboratory-form');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <>
            <div className="parent-header">
                <div className="header-img">
                    <img src={breadcrum_image} alt="Laboratory" width="100%" height="250rem" />
                </div>
                <div className="header-overlay"></div>
                <div className="breadcrumb-parent">
                    <h2>Medical Laboratory</h2>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active">Laboratory</li>
                    </ol>
                </div>
            </div>
            <LaboratoryShow initialCount={6} DummyLaboratory={DummyLaboratory} title="Our Laboratory Services" />
            <Fade cascade damping={0.15} direction="up" triggerOnce>
                <LaboratoryForm />
            </Fade>
        </>
    );
}