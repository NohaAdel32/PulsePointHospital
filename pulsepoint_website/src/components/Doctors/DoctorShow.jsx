import {DummyDoctors} from "./dummy-doctors.js";
import './styles/Doctors.css';
import Appointments from "../Appointments/Appointments.jsx";
import React, {useState} from "react";
export function DoctorShow(){

        const [visibleCount, setVisibleCount] = useState(6);

        const handleSeeMore = () => {
            setVisibleCount(prev => prev + 6);
        };
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={`full-${i}`} className="star filled">★</span>);
        }

        if (hasHalfStar) {
            stars.push(<span key="half" className="star half">★</span>);
        }

        const remainingStars = 5 - Math.ceil(rating);
        for (let i = 0; i < remainingStars; i++) {
            stars.push(<span key={`empty-${i}`} className="star">★</span>);
        }

        return stars;
    };
    return(
        <>
            <section className="doctors-section">
                <div className="doctors-container">
                    <h2 className="doctors-title">Meet our Doctors</h2>

                    <div className="doctors-grid">
                        {DummyDoctors.slice(0, visibleCount).map((doctor) => (
                            <div key={doctor.id} className="doctor-card">
                                <div className="doctor-badge">
                                    {doctor.available && (
                                        <>
                                            <span className="badge-dot"></span>
                                            <span className="badge-text">Available</span>
                                        </>
                                    )}
                                </div>

                                <div className="doctor-image-wrapper">
                                    <div className="doctor-image">
                                        <div className="placeholder-image">
                                          <img src={doctor.image} alt={doctor.name} width='200px' height='200px'/>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="doctor-name">{doctor.name}</h3>
                                <p className="doctor-specialty">{doctor.specialty}</p>
                                <p className="doctor-specialty">{doctor.position}</p>
                                <div className="doctor-rating">
                                    <div className="stars">
                                        {renderStars(doctor.rating)}
                                    </div>
                                    <span className="reviews-count">({doctor.reviews})</span>
                                </div>

                                <button className="appointment-btn">Book an Appointment</button>
                            </div>
                        ))}
                    </div>

                    {visibleCount < DummyDoctors.length && (
                        <button onClick={handleSeeMore} className="see-more-btn">
                            See More
                        </button>
                    )}
                </div>
            </section>
            <Appointments/>
        </>
    )
}