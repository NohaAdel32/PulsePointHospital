import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { DummyAddmission } from './dummy-addmission.js';
import ConfirmationPopup from '../ConfirmationPopup/ConfirmationPopup';
import './styles/AdmissionForm.css';

export default function AdmissionForm() {
    const location = useLocation();
    const dateInputRef = useRef(null);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        availableDate: '',
        No_Of_Night: '',
        AdmissionType: location.state?.AdmissionType || ''
    });

    const [errors, setErrors] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        availableDate: '',
        No_Of_Night: '',
        AdmissionType: ''
    });

    const [showPopup, setShowPopup] = useState(false);
    const [bookedAppointments, setBookedAppointments] = useState([]);

    useEffect(() => {
        const savedAppointments = localStorage.getItem('AdmissionAppointments');
        if (savedAppointments) {
            setBookedAppointments(JSON.parse(savedAppointments));
        }
    }, []);

    const validateField = (name, value) => {
        let error = '';
        switch (name) {
            case 'fullName':
                if (value.trim().length < 3) {
                    error = 'Name must be at least 3 characters long';
                } else if (!/^[a-zA-Z\s]*$/.test(value)) {
                    error = 'Name should only contain letters and spaces';
                }
                break;
            case 'email':
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    error = 'Please enter a valid email address';
                }
                break;
            case 'phoneNumber':
                if (!/^[0-9]{11}$/.test(value)) {
                    error = 'Phone number must be 11 digits';
                }
                break;
            case 'availableDate':
                const selectedDate = new Date(value);
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                if (selectedDate < today) {
                    error = 'Please select a future date';
                }
                break;

            case 'AdmissionType':
                if (!value) {
                    error = 'Please select an Admission type';
                }
                break;
            default:
                break;
        }
        return error;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));

        // Clear error when user starts typing
        setErrors(prev => ({
            ...prev,
            [name]: ''
        }));
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        const error = validateField(name, value);
        setErrors(prev => ({
            ...prev,
            [name]: error
        }));
    };

    const handleDateIconClick = () => {
        dateInputRef.current?.showPicker();
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate all fields
        const newErrors = {};
        Object.keys(formData).forEach(key => {
            const error = validateField(key, formData[key]);
            if (error) newErrors[key] = error;
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const newAppointment = {
            id: Date.now(),
            ...formData,
            price: DummyAddmission.find(img => img.name === formData.AdmissionType)?.price || '0'
        };

        const updatedAppointments = [...bookedAppointments, newAppointment];
        setBookedAppointments(updatedAppointments);
        localStorage.setItem('AdmissionAppointments', JSON.stringify(updatedAppointments));
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setFormData({
            fullName: '',
            email: '',
            phoneNumber: '',
            availableDate: '',
            No_Of_Night: '',
            AdmissionType: ''
        });
    };

    const handleDeleteAppointment = (id) => {
        const updatedAppointments = bookedAppointments.filter(appointment => appointment.id !== id);
        setBookedAppointments(updatedAppointments);
        localStorage.setItem('AdmissionAppointments', JSON.stringify(updatedAppointments));
    };

    return (
        <div className="Admission-form-section" id="Admission-form">
            <div className="Admission-form-container">
                <h2>Book Admission Appointment</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Full Name"
                            className={errors.fullName ? 'error' : ''}
                            required
                        />
                        {errors.fullName && <div className="error-message">{errors.fullName}</div>}
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Email"
                            className={errors.email ? 'error' : ''}
                            required
                        />
                        {errors.email && <div className="error-message">{errors.email}</div>}
                    </div>
                    <div className="form-group">
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Phone Number (11 digits)"
                            className={errors.phoneNumber ? 'error' : ''}
                            required
                        />
                        {errors.phoneNumber && <div className="error-message">{errors.phoneNumber}</div>}
                    </div>
                    <div className="form-group">
                        <div className="date-input-container">
                            <input
                                ref={dateInputRef}
                                type="date"
                                name="availableDate"
                                value={formData.availableDate}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.availableDate ? 'error' : ''}
                                required
                            />
                            <span className="calendar-icon" onClick={handleDateIconClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M4 .5a.5.5 0 0 0-1 0V1H2.5A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 12.5 1H11V.5a.5.5 0 0 0-1 0V1H4V.5z"/>
                                </svg>
                            </span>
                        </div>
                        {errors.availableDate && <div className="error-message">{errors.availableDate}</div>}
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="No_Of_Night"
                            value={formData.No_Of_Night}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Referring Doctor's Name"
                            className={errors.No_Of_Night ? 'error' : ''}
                            required
                        />
                        {errors.No_Of_Night && <div className="error-message">{errors.No_Of_Night}</div>}
                    </div>
                    <div className="form-group">
                        <select
                            name="AdmissionType"
                            value={formData.AdmissionType}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.AdmissionType ? 'error' : ''}
                            required
                        >
                            <option value="">Select Admission Type</option>
                            {DummyAddmission.map(img => (
                                <option key={img.id} value={img.name}>
                                    {img.name} - ${img.price}
                                </option>
                            ))}
                        </select>
                        {errors.AdmissionType && <div className="error-message">{errors.AdmissionType}</div>}
                    </div>
                    <button type="submit" className="submit-button">Book Appointment</button>
                </form>

                {showPopup && (
                    <ConfirmationPopup
                        appointmentData={formData}
                        onClose={handleClosePopup}
                        appointmentType="Admission"
                    />
                )}

                <div className="booked-appointments" id="Admission-appointments">
                    <h3>Booked Admission Appointments</h3>
                    <div className="appointments-grid">
                        {bookedAppointments.map(appointment => (
                            <div key={appointment.id} className="appointment-card">
                                <h4>{appointment.AdmissionType}</h4>
                                <p><strong>Patient:</strong> {appointment.fullName}</p>
                                <p><strong>Date:</strong> {appointment.availableDate}</p>
                                <p><strong>Doctor:</strong> {appointment.No_Of_Night}</p>
                                <p><strong>Price:</strong> ${appointment.price}</p>
                                <button
                                    onClick={() => handleDeleteAppointment(appointment.id)}
                                    className="delete-button"
                                >
                                    Cancel Appointment
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}