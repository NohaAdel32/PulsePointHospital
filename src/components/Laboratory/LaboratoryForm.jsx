import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { DummyLaboratory } from './dummy-laboratory';
import ConfirmationPopup from '../ConfirmationPopup/ConfirmationPopup';
import './style/LaboratoryForm.css';

export default function LaboratoryForm() {
    const location = useLocation();
    const dateInputRef = useRef(null);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        availableDate: '',
        doctorName: '',
        testType: location.state?.testType || ''
    });
    
    const [errors, setErrors] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        availableDate: '',
        doctorName: '',
        testType: ''
    });
    
    const [showPopup, setShowPopup] = useState(false);
    const [bookedTests, setBookedTests] = useState([]);

    useEffect(() => {
        const savedTests = localStorage.getItem('laboratoryTests');
        if (savedTests) {
            setBookedTests(JSON.parse(savedTests));
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
            case 'testType':
                if (!value) {
                    error = 'Please select a test type';
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
        
        const newErrors = {};
        Object.keys(formData).forEach(key => {
            const error = validateField(key, formData[key]);
            if (error) newErrors[key] = error;
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const newTest = {
            id: Date.now(),
            ...formData,
            price: DummyLaboratory.find(test => test.name === formData.testType)?.price || '0'
        };

        const updatedTests = [...bookedTests, newTest];
        setBookedTests(updatedTests);
        localStorage.setItem('laboratoryTests', JSON.stringify(updatedTests));
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
            testType: ''
        });
    };

    const handleDeleteTest = (id) => {
        const updatedTests = bookedTests.filter(test => test.id !== id);
        setBookedTests(updatedTests);
        localStorage.setItem('laboratoryTests', JSON.stringify(updatedTests));
    };

    return (
        <div className="laboratory-form-section" id="laboratory-form">
            <div className="laboratory-form-container">
                <h2>Book Laboratory Test</h2>
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
                            name="testType"
                            value={formData.testType}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.testType ? 'error' : ''}
                            required
                        >
                            <option value="">Select Test Type</option>
                            {DummyLaboratory.map(test => (
                                <option key={test.id} value={test.name}>
                                    {test.name} - ${test.price}
                                </option>
                            ))}
                        </select>
                        {errors.testType && <div className="error-message">{errors.testType}</div>}
                    </div>
                    <button type="submit" className="submit-button">Book Test</button>
                </form>

                {showPopup && (
                    <ConfirmationPopup
                        appointmentData={formData}
                        onClose={() => {
                            handleClosePopup();
                            const testsElement = document.getElementById('laboratory-tests');
                            if (testsElement) {
                                testsElement.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        appointmentType="laboratory"
                        redirectPath="/laboratory#laboratory-tests"
                    />
                )}

                <div className="booked-tests" id="laboratory-tests">
                    <h3>Booked Laboratory Tests</h3>
                    <div className="tests-grid">
                        {bookedTests.map(test => (
                            <div key={test.id} className="test-card">
                                <h4>{test.testType}</h4>
                                <p><strong>Patient:</strong> {test.fullName}</p>
                                <p><strong>Date:</strong> {test.availableDate}</p>
                                <p><strong>Doctor:</strong> {test.doctorName}</p>
                                <p><strong>Price:</strong> ${test.price}</p>
                                <button 
                                    onClick={() => handleDeleteTest(test.id)}
                                    className="delete-button"
                                >
                                    Cancel Test
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}