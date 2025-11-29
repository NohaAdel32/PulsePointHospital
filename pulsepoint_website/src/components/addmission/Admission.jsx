import { DummyAddmission } from "./dummy-addmission.js";
import React, {useState} from "react";
import './styles/admission.css'
import { Fade } from "react-awesome-reveal";
import {Link} from "react-router-dom";
import admission3 from '../../assets/room3.jpg'

export default function Admission({initialCount,title}) {
    const [visibleCount, setVisibleCount] = useState(initialCount);

    const handleSeeMore = () => {
        setVisibleCount(DummyAddmission.length);
    };
    return (
        <section className="admission-section">
            <div className="admission-container">
                <div className="admission-intro">
                    <div className="intro-text">
                        <h2 className="intro-title">Comfortable & Modern Patient Rooms</h2>
                        <p className="intro-desc">
                            Our hospital offers modern, clean, and fully equipped patient rooms designed
                            to provide maximum comfort and relaxation. Every room is arranged to create
                            a calm healing environment with high-quality beds, soft lighting, and
                            advanced medical facilities to ensure a smooth and comfortable stay.
                        </p>
                    </div>

                    <div className="intro-image">
                        <img
                            src={admission3}
                            alt="Patient Room"
                        />
                    </div>
                </div>

                <h2 className="admission-title">{title}</h2>
                <div className="admission-grid">
                    {DummyAddmission.slice(0, visibleCount).map((admission) => (
                        <Fade key={admission.id} cascade damping={0.1} direction="up" triggerOnce>
                            <div className="admission-card">
                                <div className="admission-image">
                                    <img src={admission.img} alt={admission.name} />
                                </div>
                                <div className="admission-details">
                                    <h3>{admission.name}</h3>
                                    <p>{admission.desc}</p>
                                    <p className="admission-price">Price: ${admission.price}/ Night</p>
                                    <Link
                                        to="/admission#Admission-form"
                                        state={{ admissionType: admission.title }}
                                        className="book-button"
                                    >
                                        Book Appointment
                                    </Link>
                                </div>
                            </div>
                        </Fade>
                    ))}
                </div>
                {visibleCount < DummyAddmission.length && (
                    <div className="see-more-container">
                        <button onClick={handleSeeMore} className="see-more-button">
                            See More
                        </button>
                    </div>
                )}
            </div>
        </section>
    
    );
}
