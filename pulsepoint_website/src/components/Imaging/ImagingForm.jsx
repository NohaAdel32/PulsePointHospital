import React, { useState, useEffect, useRef } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import { DummyImaging } from './dummy-imaging';
import ConfirmationPopup from '../ConfirmationPopup/ConfirmationPopup';
import './style/ImagingForm.css';
import ModalAdmission from "../addmission/ModalAdmission.jsx";
import ModalImaging from "./ModalImaging.jsx";
import {useSelector} from "react-redux";


export default function ImagingForm() {
    const location = useLocation();
    const dateInputRef = useRef(null);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        availableDate: '',
        doctorName: '',
        imagingType: location.state?.imagingType || ''
    });
    
    const [errors, setErrors] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        availableDate: '',
        doctorName: '',
        imagingType: ''
    });
    
    const [showPopup, setShowPopup] = useState(false);
    const [bookedAppointments, setBookedAppointments] = useState([]);
    const [selectedAppointment, setSelectedAppointment] = useState(null);
    useEffect(() => {
        const savedAppointments = localStorage.getItem('imagingAppointments');
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
            case 'doctorName':
                if (value.trim().length < 3) {
                    error = 'Doctor name must be at least 3 characters long';
                }
                break;
            case 'imagingType':
                if (!value) {
                    error = 'Please select an imaging type';
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

        const newAppointment = {
            id: Date.now(),
            ...formData,
            price: DummyImaging.find(img => img.name === formData.imagingType)?.price || '0'
        };

        const updatedAppointments = [...bookedAppointments, newAppointment];
        setBookedAppointments(updatedAppointments);
        localStorage.setItem('imagingAppointments', JSON.stringify(updatedAppointments));
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setFormData({
            fullName: '',
            email: '',
            phoneNumber: '',
            availableDate: '',
            doctorName: '',
            imagingType: ''
        });
    };

    const handleDeleteAppointment = (id) => {
        const updatedAppointments = bookedAppointments.filter(appointment => appointment.id !== id);
        setBookedAppointments(updatedAppointments);
        localStorage.setItem('imagingAppointments', JSON.stringify(updatedAppointments));
    };
    const updateAppointmentPayment = (id, paymentMethod) => {
        const updated = bookedAppointments.map(a =>
            a.id === id ? { ...a, paymentMethod } : a
        );

        setBookedAppointments(updated);
        localStorage.setItem('imagingAppointments', JSON.stringify(updated));
    };

    return (
        <>
        <div className="imaging-form-section" id="imaging-form">
            <div className="imaging-form-container">
                <h2>Book Imaging Appointment</h2>
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
                            name="doctorName"
                            value={formData.doctorName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Referring Doctor's Name"
                            className={errors.doctorName ? 'error' : ''}
                            required
                        />
                        {errors.doctorName && <div className="error-message">{errors.doctorName}</div>}
                    </div>
                    <div className="form-group">
                        <select
                            name="imagingType"
                            value={formData.imagingType}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.imagingType ? 'error' : ''}
                            required
                        >
                            <option value="">Select Imaging Type</option>
                            {DummyImaging.map(img => (
                                <option key={img.id} value={img.name}>
                                    {img.name} - ${img.price}
                                </option>
                            ))}
                        </select>
                        {errors.imagingType && <div className="error-message">{errors.imagingType}</div>}
                    </div>
                    <button type="submit" className="submit-button">Book Appointment</button>
                </form>

                {showPopup && (
                    <ConfirmationPopup
                        appointmentData={formData}
                        onClose={handleClosePopup}
                        appointmentType="imaging"
                    />
                )}
{isAuthenticated &&
 <div className="booked-appointments" id="imaging-appointments">
                    <h3>Booked Imaging Appointments</h3>
                    <div className="appointments-grid">
                        {bookedAppointments.map(appointment => (
                            <div key={appointment.id} className="appointment-card">
                                <h4>{appointment.imagingType}</h4>
                                <p><strong>Patient:</strong> {appointment.fullName}</p>
                                <p><strong>Date:</strong> {appointment.availableDate}</p>
                                <p><strong>Doctor:</strong> {appointment.doctorName}</p>
                                <p><strong>Price:</strong> ${appointment.price}</p>
                                <button 
                                    onClick={() => handleDeleteAppointment(appointment.id)}
                                    className="delete-button"
                                >
                                    Cancel Appointment
                                </button>
                                {appointment.paymentMethod ? (
                                    <button className="btn btn-success mt-3" disabled>
                                        Paid via: {appointment.paymentMethod.toUpperCase()}
                                    </button>
                                ) : (
                                    <button
                                        className="btn btn-primary mt-3"
                                        data-bs-toggle="modal"
                                        data-bs-target="#checkoutModal"
                                        onClick={() => setSelectedAppointment(appointment )}
                                    >
                                        Checkout
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
}
               
            </div>
        </div>
            <ModalImaging id="checkoutModal" selected={selectedAppointment}   onFinish={updateAppointmentPayment}/>
            </>
    );
}