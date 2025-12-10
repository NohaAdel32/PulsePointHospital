import { useState, useRef ,useEffect} from 'react';
import './style/Appointments.css';
import ConfirmationPopup from '../ConfirmationPopup/ConfirmationPopup.jsx';
import React from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";


export default function Appointments() {
    const dateInputRef = useRef(null);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const navigate = useNavigate();
const bookingData = useSelector(state => state.booking.data);

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        availableDate: '',
        doctorName: ''
    });
    
    const [errors, setErrors] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        availableDate: '',
        doctorName: ''
    });
    
    const [showPopup, setShowPopup] = useState(false);
      useEffect(() => {
        if (bookingData) {
            setFormData(prev => ({
                ...prev,
                doctorName: bookingData.doctorName || "",
                availableDate: bookingData.day ? "" : prev.availableDate 
            }));
        }
    }, [bookingData]);

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
            case 'doctorName':
                if (value.trim().length < 3) {
                    error = 'Doctor name must be at least 3 characters long';
                }
                break;
            default:
                break;
        }
        return error;
    };

    // Handle input changes
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));

        // Clear error when user starts typing
        setErrors(prev => ({
            ...prev,
            [id]: ''
        }));
    };

    // Handle input blur for validation
    const handleBlur = (e) => {
        const { id, value } = e.target;
        const error = validateField(id, value);
        setErrors(prev => ({
            ...prev,
            [id]: error
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isAuthenticated) {
            alert("You must be logged in to book an appointment.");
            navigate('/signIn');
            return; 
        }
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
        
        // Get existing appointments from localStorage
        const existingAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
        
        // Add new appointment with unique ID
        const newAppointment = {
            id: Date.now(),
            ...formData,
            bookingDate: new Date().toLocaleDateString()
        };
        
        existingAppointments.push(newAppointment);
        
        // Save to localStorage
        localStorage.setItem('appointments', JSON.stringify(existingAppointments));
        
        // Show confirmation popup
        setShowPopup(true);
    };

    const handleDateIconClick = () => {
        dateInputRef.current?.showPicker();
    };

    // Close popup and reset form
    const handleClosePopup = () => {
        setShowPopup(false);
        setFormData({
            fullName: '',
            email: '',
            phoneNumber: '',
            availableDate: '',
            doctorName: ''
        });
    };

    return (
        <>
            <div className="container form-container" id="appointment-form">
                <div className="form-header mb-4">
                    <h2 className="mb-1">Book your appointment now</h2>
                    <p>So our team can reach out to you on time</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="fullName" className="form-label">Full Name</label>
                                <input 
                                    type="text" 
                                    className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                                    id="fullName" 
                                    placeholder="eg: depi"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                />
                                {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input 
                                    type="email" 
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    id="email" 
                                    placeholder="eg: depi@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                />
                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                <input 
                                    type="tel" 
                                    className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
                                    id="phoneNumber"
                                    placeholder="eg: 01234567890"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                />
                                {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber}</div>}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="availableDate" className="form-label">Available Date</label>
                                <div className="input-group">
                                    <span className="input-group-text" onClick={handleDateIconClick} style={{ cursor: 'pointer' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                                            <path d="M4 .5a.5.5 0 0 0-1 0V1H2.5A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 12.5 1H11V.5a.5.5 0 0 0-1 0V1H4V.5zm-.5 1A.5.5 0 0 1 4 2h8a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-1zm1 2A.5.5 0 0 1 5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z" />
                                        </svg>
                                    </span>
                                    <input 
                                        ref={dateInputRef}
                                        type="date" 
                                        className={`form-control ${errors.availableDate ? 'is-invalid' : ''}`}
                                        id="availableDate"
                                        value={formData.availableDate}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                    />
                                    {errors.availableDate && <div className="invalid-feedback">{errors.availableDate}</div>}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="doctorName" className="form-label">Doctor Name</label>
                                <input 
                                    type="text" 
                                    className={`form-control ${errors.doctorName ? 'is-invalid' : ''}`}
                                    id="doctorName" 
                                    placeholder="eg: Dr. Smith"
                                    value={formData.doctorName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                />
                                {errors.doctorName && <div className="invalid-feedback">{errors.doctorName}</div>}
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end mt-4">
                        <button type="submit" className="btn btn-primary">
                            Book Now
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>

            {showPopup && (
                <ConfirmationPopup 
                    appointmentData={formData}
                    onClose={handleClosePopup}
                />
            )}
        </>
    );
}