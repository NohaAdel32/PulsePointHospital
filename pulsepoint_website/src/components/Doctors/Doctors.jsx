import React from 'react';
import '../Doctors/styles/Doctors.css';
export default Doctors;

const Doctors = () => {
  const doctorsData = [
    {
      id: 1,
      name: 'Dr. Medhat El Shazly',
      specialty: 'Cardiologist',
      rating: 4.5,
      reviews: 102,
      image: 'doctor1.jpg',
      available: true
    },
    {
      id: 2,
      name: 'Dr. Khaled Ali',
      specialty: 'Neurologist',
      rating: 4.5,
      reviews: 97,
      image: 'doctor2.jpg',
      available: true
    },
    {
      id: 3,
      name: 'Dr. Ahmed Mohamed',
      specialty: 'Child Specialist',
      rating: 4.5,
      reviews: 73,
      image: 'doctor3.jpg',
      available: true
    }
  ];

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

  return (
    <section className="doctors-section">
      <div className="doctors-container">
        <h2 className="doctors-title">Meet our Doctors</h2>
        
        <div className="doctors-grid">
          {doctorsData.map((doctor) => (
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
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                      <path d="M30 30C37.18 30 43 24.18 43 17C43 9.82 37.18 4 30 4C22.82 4 17 9.82 17 17C17 24.18 22.82 30 30 30ZM30 36C21.33 36 4 40.34 4 49V56H56V49C56 40.34 38.67 36 30 36Z" fill="#ffffff"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <h3 className="doctor-name">{doctor.name}</h3>
              <p className="doctor-specialty">{doctor.specialty}</p>
              
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
        
        <button className="see-more-btn">See more</button>
      </div>
    </section>
  );
};

