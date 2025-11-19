import { DummyAddmission } from "./dummy-addmission.js";
import React, {useState} from "react";
import './styles/admission.css'
import { Fade } from "react-awesome-reveal";
import {Link} from "react-router-dom";

export default function Admission({initialCount,title}) {
    const [visibleCount, setVisibleCount] = useState(initialCount);

    const handleSeeMore = () => {
        setVisibleCount(DummyAddmission.length);
    };
    return (
        <section className="admission-section">
            <div className="admission-container">
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
                                        to="/admission#admission-form"
                                        state={{ admissionType: admission.name }}
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
