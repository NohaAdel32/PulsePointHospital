
import './styles/Doctors.css';
import React, {useState} from "react";
import {Fade} from "react-awesome-reveal";
import {Link} from "react-router-dom";
export function DoctorShow({initialCount,DummyDoctors,title}){

        const [visibleCount, setVisibleCount] = useState(initialCount);


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
                    <h2 className="doctors-title">{title}</h2>

                    <div className="doctors-grid">
                        <Fade cascade damping={0.15} direction="up" triggerOnce>
                        {DummyDoctors.slice(0, visibleCount).map((doctor,i) => (

                            <Link key={doctor.id || i} to={`/doctorsDetail/${doctor.id}`}> <div  className="doctor-card">
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
                            </Link>
                        ))}
                        </Fade>
                    </div>

                    {visibleCount < DummyDoctors.length && (
                        <button onClick={handleSeeMore} className="see-more-btn">
                            See More
                        </button>
                    )}
                </div>
            </section>

        </>
    )
}