import React from "react";
import {Link, useParams} from "react-router-dom";
import { DummyDoctors } from "./dummy-doctors.js";
import './styles/Doctors.css'
import {Fade} from "react-awesome-reveal";
import {DoctorShow} from "./DoctorShow.jsx";
import { useDispatch } from "react-redux";
import { setBookingData } from "../../store/bookingSlice.js";

export default function DoctorDetail(){
    const { id } = useParams();
    const dispatch = useDispatch();
    const doctor = DummyDoctors.find((d) => d.id === parseInt(id));
    const relatedDoctors = DummyDoctors.filter(
        (d) => d.specialty === doctor.specialty && d.id !== doctor.id
    );
    if (!doctor) {
        return (
            <div className="container text-center mt-5">
                <div className="alert alert-danger">Doctor not found!</div>
            </div>
        );
    }
        const handleBooking = (appointment) => {
            const formattedDate = appointment.date;
        dispatch(
            setBookingData({
                doctorId: doctor.id,
                doctorName: doctor.name,
                specialty: doctor.specialty,
                day: formattedDate,
                time: appointment.time,
            })
        );
    const form = document.getElementById("appointment-form");

    if (form) {
        form.scrollIntoView({ behavior: "smooth" });
    }
    };

    return (
        <>
        <div className="container mt-5">
            <div className="card shadow-lg border-0 rounded-4 p-4">
                <div className="row g-4 align-items-center">
                    <div className="col-md-4 text-center">
                        <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="img-fluid rounded-circle border border-3 "
                            style={{ width: "220px", height: "220px", objectFit: "cover" , borderColor: "#012A4A"}}
                        />
                    </div>


                    <div className="col-md-8">
                        <h2 className="fw-bold " style={{ color: '#012A4A' }}>{doctor.name}</h2>
                        <p className="text-muted">{doctor.specialty}</p>
                        <p className="mb-1">
                            <strong>Position:</strong> {doctor.position}
                        </p>
                        <p className="mb-1">
                            <strong>Rating:</strong> ⭐ {doctor.rating} ({doctor.reviews} reviews)
                        </p>
                        <p className="mb-1">
                            <strong>Available:</strong>{" "}
                            {doctor.available ? (
                                <span className="text-success fw-bold">Available</span>
                            ) : (
                                <span className="text-danger fw-bold">Not Available</span>
                            )}
                        </p>
                        <p className="mt-3">
                            <strong>Services:</strong> {doctor.services}
                        </p>
                    </div>
                </div>
            </div>


            <div className="mt-5">
                <h4 className="text-secondary border-bottom pb-2 mb-3">
                    Available Appointments
                </h4>

                {doctor.appointments && doctor.appointments.length > 0 ? (
                    <div className="row">
                        {doctor.appointments.map((appointment, index) => (
                            <div className="col-md-4 mb-3" key={index}>
                                <div className="card text-center shadow-sm border-0 rounded-3">
                                    <div className="card-body">
                                        <h6 className=" fw-bold" style={{ color: '#012A4A' }}>{appointment.day}</h6>
                                        <p className="text-muted mb-2">{appointment.time}</p>
                                        <button className="btn btn-sm book-btn" 
                                        onClick={() => handleBooking(appointment)}>
                                            Book Appointment
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="alert alert-info text-center">
                        No available appointments.
                    </div>
                )}
            </div>
        </div>
      <DoctorShow initialCount={3} DummyDoctors={relatedDoctors} title='Related Doctors'/>
        </>
    );
}