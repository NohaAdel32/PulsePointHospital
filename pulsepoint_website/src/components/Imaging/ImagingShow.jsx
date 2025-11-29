import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";
import './style/ImagingShow.css';
import admission3 from "../../assets/ct-scan.jpg";

export function ImagingShow({ initialCount, DummyImaging, title }) {
    const [visibleCount, setVisibleCount] = useState(initialCount);

    const handleSeeMore = () => {
        setVisibleCount(DummyImaging.length);
    };

    return (
        <section className="imaging-section">
            <div className="imaging-container">
                <div className="admission-intro">
                    <div className="intro-text">
                        <h2 className="intro-title">Advanced Diagnostic Imaging (Radiology Department)</h2>
                        <p className="intro-desc">
                            Our radiology department provides advanced, high-quality imaging services using the latest medical technologies.
                            We offer accurate and fast diagnostic imaging to help doctors detect and treat medical conditions with confidence.
                            From X-rays and ultrasound to CT scans, MRI, and specialized imaging tests, our team ensures safe, comfortable, and reliable services for every patient.
                            We aim to deliver clear results and a smooth experience in a caring and supportive environment.
                        </p>
                    </div>

                    <div className="intro-image">
                        <img
                            src={admission3}
                            alt="Patient Room"
                        />
                    </div>
                </div>
                <h2 className="imaging-title">{title}</h2>
                <div className="imaging-grid">
                    {DummyImaging.slice(0, visibleCount).map((imaging) => (
                        <Fade key={imaging.id} cascade damping={0.1} direction="up" triggerOnce>
                            <div className="imaging-card">
                                <div className="imaging-image">
                                    <img src={imaging.image} alt={imaging.name} />
                                </div>
                                <div className="imaging-details">
                                    <h3>{imaging.name}</h3>
                                    <p>{imaging.description}</p>
                                    <p className="imaging-price">Price: ${imaging.price}</p>
                                    <Link
                                        to="/imaging#imaging-form"
                                        state={{ imagingType: imaging.name }}
                                        className="book-button"
                                    >
                                        Book Appointment
                                    </Link>
                                </div>
                            </div>
                        </Fade>
                    ))}
                </div>
                {visibleCount < DummyImaging.length && (
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