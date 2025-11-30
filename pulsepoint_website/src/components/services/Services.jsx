import './ٍServices.css'
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
export default function Services(){
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const [showEmergencyModal, setShowEmergencyModal] = useState(false);

    useEffect(() => {
        const cards = document.querySelectorAll(".service-card");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            },
            { threshold: 0.2 }
        );

        cards.forEach(card => observer.observe(card));
    }, []);
    return(
        <>

            <section className="py-5 services-section" id="serviceSection">
                <div className="container text-center" >

                    <h2 className="mb-4 fw-bold">Our Medical Services</h2>
                    <p className=" mb-5 suTitle">We are dedicated to giving you the best medical services</p>

                    <div className="row g-4">


                        <div className="col-md-3 col-sm-6 " >
                            <Link to="/ICU">
                            <div className="p-4 border rounded-3 shadow-sm h-100 service-card">
                                <i className="fa-solid fa-briefcase-medical fa-2x mb-3 "></i>
                                <h6 className="fw-bold mb-2">Intensive Care Unit (ICU)</h6>
                            </div>
                            </Link>
                        </div>


                        <div className="col-md-3 col-sm-6">
                            <Link to="/doctors">
                            <div className="p-4 border rounded-3 shadow-sm h-100 service-card">
                                <i className="fa-solid fa-stethoscope fa-2x mb-3 "></i>
                                <h6 className="fw-bold mb-2">Outpatient Clinics</h6>
                            </div>
                            </Link>
                        </div>


                        <div className="col-md-3 col-sm-6">
                            <Link to="/admission">
                            <div className="p-4 border rounded-3 shadow-sm h-100 service-card">
                                <i className="fa-solid fa-user-nurse fa-2x mb-3 "></i>
                                <h6 className="fw-bold mb-2">Inpatient / Admissions</h6>
                            </div>
                            </Link>
                        </div>


                        <div className="col-md-3 col-sm-6">
                            <Link to="/imaging">
                            <div className="p-4 border rounded-3 shadow-sm h-100 service-card">
                                <i className="fa-solid fa-wifi fa-2x mb-3 "></i>
                                <h6 className="fw-bold mb-2">Radiology & Imaging</h6>
                            </div>
                            </Link>
                        </div>


                        <div className="col-md-3 col-sm-6">
                            <div className="p-4 border rounded-3 shadow-sm h-100 service-card">
                                <i className="fa-solid fa-flask fa-2x mb-3 "></i>
                                <h6 className="fw-bold mb-2">Laboratory</h6>
                            </div>
                        </div>


                        <div className="col-md-3 col-sm-6">
                            <div
                                className="p-4 border rounded-3 shadow-sm h-100 service-card"
                                onClick={() => setShowEmergencyModal(true)}
                                style={{ cursor: "pointer" }}
                            >
                                <i className="fa-solid fa-ambulance fa-2x mb-3"></i>
                                <h6 className="fw-bold mb-2">Emergency / Ambulance</h6>
                            </div>
                        </div>

                        {isAuthenticated ? (
                        <div className="col-md-3 col-sm-6">
                            <Link to="/records">
                            <div className="p-4 border rounded-3 shadow-sm h-100 service-card">
                                <i className="fa-solid fa-file-medical fa-2x mb-3 "></i>
                                <h6 className="fw-bold mb-2">Records</h6>
                            </div>
                            </Link>
                        </div>
                        ):(
                            <div className="col-md-3 col-sm-6">
                                <Link to="/SignIn">
                                    <div className="p-4 border rounded-3 shadow-sm h-100 service-card">
                                        <i className="fa-solid fa-file-medical fa-2x mb-3 "></i>
                                        <h6 className="fw-bold mb-2">Records</h6>
                                    </div>
                                </Link>
                            </div>
                        )}


                        <div className="col-md-3 col-sm-6">
                            <div className="p-4 border rounded-3 shadow-sm h-100 service-card"
                                 onClick={() => {
                                     const element = document.getElementById("pharmacySection");
                                     if (element) {
                                         element.scrollIntoView({ behavior: "smooth" });
                                     }
                                 }}
                                 style={{ cursor: "pointer" }}>
                                <i className="fa-solid fa-prescription-bottle-medical fa-2x mb-3 "></i>
                                <h6 className="fw-bold mb-2">Pharmacy</h6>
                            </div>

                        </div>

                    </div>

                </div>
            </section>
            {showEmergencyModal && (
                <div className="modal-overlay">
                    <div className="modal-box">
                        <h4>Emergency Ambulance</h4>
                        <p>If you need immediate assistance, please call:</p>

                        <a className="btn btn-danger w-100 my-3" href="tel:123">
                            Call Ambulance (123)
                        </a>

                        <button
                            className="btn btn-secondary w-100"
                            onClick={() => setShowEmergencyModal(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

        </>
    )
}