import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import breadcrum_image from '../../assets/imaging.jpg';
import { ImagingShow } from "../Imaging/ImagingShow";
import { DummyImaging } from "../Imaging/dummy-imaging";
import ImagingForm from "../Imaging/ImagingForm";
import { Fade } from "react-awesome-reveal";

export default function Imaging() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#imaging-form') {
            const element = document.getElementById('imaging-form');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <>
            <div className="parent-header">
                <div className="header-img">
                    <img src={breadcrum_image} alt="Imaging" width="100%" height="250rem" />
                </div>
                <div className="header-overlay"></div>
                <div className="breadcrumb-parent">
                    <h2>Imaging & Radiology</h2>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active">Imaging & Radiology</li>
                    </ol>
                </div>
            </div>
            <ImagingShow initialCount={6} DummyImaging={DummyImaging} title="Our Imaging Services" />
            <Fade cascade damping={0.15} direction="up" triggerOnce>
                <ImagingForm />
            </Fade>
        </>
    );
}