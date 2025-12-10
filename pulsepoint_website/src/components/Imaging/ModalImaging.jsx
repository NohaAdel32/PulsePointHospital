import React, { useState} from "react";
import { createPortal } from "react-dom";
const ModalAdmission = ({ id, selected ,onFinish}) => {
    const [step, setStep] = useState(1);
    const [paymentMethod, setPaymentMethod] = useState("");


    const handleNext = () => {

        if (step === 2 && paymentMethod === "") {
            alert("Please choose a payment method");
            return;
        }

        if (step === 2 && selected) {
            const oldData = JSON.parse(localStorage.getItem('AdmissionAppointments')) || [];

            const updatedData = oldData.map((item) => {
                if (item.id === selected.id) {
                    return { ...item, paymentMethod };
                }
                return item;
            });

            localStorage.setItem('AdmissionAppointments', JSON.stringify(updatedData));
        }

        setStep(step + 1);
    };
    return createPortal(
         (
        <div className="modal fade" id={id} tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Checkout</h5>
                        <button className="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div className="modal-body">
                        {/* STEP 1: Confirm Appointment */}
                        {step === 1 && (
                            <div>
                                <h6>Confirm Appointment</h6>
                                <p>
                                    <strong>Name:</strong> {selected?.fullName}
                                </p>
                                <p>
                                    <strong>Doctor:</strong> {selected?.doctorName}
                                </p>
                                <p>
                                    <strong>Date:</strong> {selected?.availableDate}
                                </p>
                                <p>
                                    <strong> Price:</strong> {selected?.price}
                                </p>
                            </div>
                        )}

                        {/* STEP 2: Choose Payment Method */}
                        {step === 2 && (
                            <div>
                                <h6>Select Payment Method</h6>

                                <div className="form-check mb-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="payment"
                                        value="visa"
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <label className="form-check-label">Visa / Mastercard</label>
                                </div>

                                <div className="form-check mb-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="payment"
                                        value="wallet"
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <label className="form-check-label">Wallet</label>
                                </div>

                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="payment"
                                        value="cash"
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <label className="form-check-label">Cash</label>
                                </div>
                            </div>
                        )}

                        {/* STEP 3: Payment Inputs */}
                        {step === 3 && (
                            <div>
                                <h6>Payment Details ({paymentMethod})</h6>

                                {paymentMethod === "visa" && (
                                    <>
                                        <input
                                            className="form-control mb-2"
                                            placeholder="Card Number"
                                        />
                                        <input className="form-control mb-2" placeholder="Expiry" />
                                        <input className="form-control mb-2" placeholder="CVV" />
                                    </>
                                )}

                                {paymentMethod === "wallet" && (
                                    <input className="form-control" placeholder="Wallet Number" />
                                )}

                                {paymentMethod === "cash" && (
                                    <p>You will pay in cash at the clinic.</p>
                                )}
                            </div>
                        )}

                        {/* STEP 4: Done */}
                        {step === 4 && <h6>Done! Your payment was processed.</h6>}
                    </div>

                    {/* FOOTER BUTTONS */}
                    <div className="modal-footer d-flex justify-content-between">
                        {step > 1 && (
                            <button
                                className="btn btn-secondary"
                                onClick={() => setStep(step - 1)}
                            >
                                Back
                            </button>
                        )}

                        {step < 4 ? (
                            <button className="btn btn-primary" onClick={handleNext}>
                                Next
                            </button>
                        ) : (
                            <button className="btn btn-success" data-bs-dismiss="modal"
                                    onClick={() => {
                                        onFinish(selected.id, paymentMethod);
                                        setStep(1);
                                    }}>
                                Finish
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    ),
    document.body // ← هنا السر
)
};

export default ModalAdmission;
