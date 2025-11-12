import './style/Contact.css';
import { hasMinLength, isEmail, isNotEmpty } from '../../util/validation.js';
import { useActionState } from "react";
import {Form} from "react-router-dom";

function contactAction(prevFormState, formData) {
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const subject = formData.get('subject');
    const message = formData.get('message');

    let errors = [];

    if (!isNotEmpty(firstName) || !isNotEmpty(lastName)) {
        errors.push('First name and Last name are required');
    }

    if (!isEmail(email)) {
        errors.push('Invalid email address');
    }

    if (!isNotEmpty(phone)) {
        errors.push('Phone is required');
    }
    if (!subject || !isNotEmpty(subject)) {
        errors.push('Subject is required');
    }

    if (!isNotEmpty(message) || !hasMinLength(message, 10)) {
        errors.push('Message should be at least 10 characters');
    }

    if (errors.length > 0) {
        return {
            errors,
            formValues: {
                firstName,
                lastName,
                email,
                phone,
                subject,
                message
            }
        };
    }

    // هنا ممكن تضيفي API call لإرسال البيانات
    alert('Form submitted successfully ✅');

    return { errors: null };
}

export default function ContactUs() {
    const [formState, formAction] = useActionState(contactAction, { errors: null });

    return (
        <section className="contact-section py-5 bg-light">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Contact Us</h2>
                    <p className="text-muted">
                        Any question? Just write us a message!
                    </p>
                </div>

                <div className="row contact-card shadow-lg rounded-3 overflow-hidden">
                    {/* Left Side */}
                    <div className="col-md-4 contact-info text-center d-flex flex-column justify-content-between text-md-start p-4 text-white ">
                        <div>
                            <h5 className="fw-bold mb-3">Contact Information</h5>
                            <p className="small text-secondary">
                                Contact us if you have any question or request
                            </p>
                        </div>

                        <ul className="list-unstyled mt-4 small">
                            <li className="mb-3">
                                <i className="fa-solid fa-phone me-2"></i> 12345
                            </li>
                            <li className="mb-3">
                                <i className="fa-solid fa-envelope me-2"></i>{" "}
                                pulsepoint_hospital@depi.com
                            </li>
                            <li className="mb-3">
                                <i className="fa-solid fa-location-dot me-2"></i> Egypt
                            </li>
                        </ul>

                        <div className="mt-3">
                            <a href="#" className="text-white me-3 fs-5">
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a href="#" className="text-white me-3 fs-5">
                                <i className="fa-brands fa-x-twitter"></i>
                            </a>
                            <a href="#" className="text-white me-3 fs-5">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="#" className="text-white fs-5">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="col-md-8 bg-white p-4">
                        <form action={formAction} method="post">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="firstName" className="form-label">First Name</label>
                                    <input
                                        id="firstName"
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter first name"
                                        name="firstName"
                                        defaultValue={formState.formValues?.firstName}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="lastName" className="form-label">Last Name</label>
                                    <input
                                        id="lastName"
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter last name"
                                        name="lastName"
                                        defaultValue={formState.formValues?.lastName}
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter email"
                                        name="email"
                                        defaultValue={formState.formValues?.email}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="phone" className="form-label">Phone Number</label>
                                    <input
                                        id="phone"
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter phone number"
                                        name="phone"
                                        defaultValue={formState.formValues?.phone}
                                    />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Select Subject</label>
                                <div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="subject"
                                            id="general"
                                            value="General Inquiry"
                                        />
                                        <label className="form-check-label" htmlFor="general">
                                            General Inquiry
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="subject"
                                            id="service"
                                            value="Request a service"
                                        />
                                        <label className="form-check-label" htmlFor="service">
                                            Request a service
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="subject"
                                            id="appointment"
                                            value="Book an appointment"
                                        />
                                        <label className="form-check-label" htmlFor="appointment">
                                            Book an appointment
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="form-control"
                                    rows="4"
                                    placeholder="Write your message..."
                                    defaultValue={formState.formValues?.message}
                                ></textarea>
                            </div>

                            {formState.errors && (
                                <div className="alert alert-danger">
                                    {formState.errors.map((err, i) => (
                                        <div key={i}>{err}</div>
                                    ))}
                                </div>
                            )}

                            <button type="submit" className="btn btn-primary px-4">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
