import { useNavigate } from 'react-router-dom';
import './style/ConfirmationPopup.css';

export default function ConfirmationPopup({ appointmentData, onClose, appointmentType = 'doctor' }) {
    const navigate = useNavigate();

    const handleViewBookings = () => {
        if (appointmentType === 'imaging') {
            onClose();
            document.getElementById('imaging-appointments').scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/appointments-bookings');
            onClose();
            window.scrollTo(0, 0);
        }
    };

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <div className="popup-header">
                    <div className="success-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                    </div>
                    <h2>Appointment Booked Successfully!</h2>
                    <p>Your appointment has been confirmed</p>
                </div>

                <div className="popup-body">
                    <div className="appointment-details">
                        <div className="detail-row">
                            <span className="detail-label">Name:</span>
                            <span className="detail-value">{appointmentData.fullName}</span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">Email:</span>
                            <span className="detail-value">{appointmentData.email}</span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">Phone:</span>
                            <span className="detail-value">{appointmentData.phoneNumber}</span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">Date:</span>
                            <span className="detail-value">{appointmentData.availableDate}</span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">Doctor:</span>
                            <span className="detail-value">{appointmentData.doctorName}</span>
                        </div>
                    </div>
                </div>

                <div className="popup-footer">
                    <button className="btn btn-secondary" onClick={onClose}>
                        Close
                    </button>
                    <button className="btn btn-primary" onClick={handleViewBookings}>
                        View My Appointments
                    </button>
                </div>
            </div>
        </div>
    );
}