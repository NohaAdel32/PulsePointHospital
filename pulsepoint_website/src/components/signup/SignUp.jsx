import React, { useState, useEffect } from "react";
import { hasMinLength, isEmail, isEqualsToOtherValue, isNotEmpty } from "../../util/validation.js";
import "./SginUp.css";
import signup from "../../assets/signup.jpg";
import logo from "../../assets/logoDark.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth/slices.js";


function signupAction(prevFormState, formData) {
    const username = formData.get("username");
    const Date_of_Birth = formData.get("Date_of_Birth");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm-password");
    const role = formData.get("role");

    let errors = [];

    if (!isEmail(email)) {
        errors.push("Invalid email address");
    }

    if (!isNotEmpty(password) || !hasMinLength(password, 6)) {
        errors.push("Password must be at least 6 characters");
    }

    if (!isEqualsToOtherValue(password, confirmPassword)) {
        errors.push("Passwords do not match");
    }

    if (!isNotEmpty(username)) {
        errors.push("Username is required");
    }

    if (!isNotEmpty(Date_of_Birth)) {
        errors.push("Date of Birth is required");
    }

    if (errors.length > 0) {
        return {
            errors,
            formValues: {
                username,
                Date_of_Birth,
                email,
                password,
                confirmPassword,
                role,
            },
        };
    }


    return {
        errors: null,
        formValues: {
            username,
            Date_of_Birth,
            email,
            password,
            confirmPassword,
            role,
        },
    };
}

export default function SignUp() {
    const [formState, setFormState] = useState({errors: null, formValues: {}});
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

        useEffect(() => {
            if (formState.errors === null && formState.formValues?.username) {
                console.log(" Dispatching user:", formState.formValues);
                dispatch(authActions.Register(formState.formValues));
                // navigate("/");

                alert("Registration Done")

            }
        }, [formState, dispatch, navigate]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const result = signupAction(formState, formData);
        setFormState(result);
        if (result.errors === null) {
            e.target.reset();
            setFormState({ errors: null, formValues: {} });
            alert("Registration Done")
        }

    }


    return (
            <div className="container-fluid signup-page d-flex align-items-center justify-content-center">
                <div className="row signup-card shadow rounded overflow-hidden">
                    {/* Left Side - Form */}
                    <div className="col-md-6 col-12 bg-white p-5 d-flex flex-column justify-content-center">
                        <Link to="/">
                            <div className="title_signup">
                                <img src={logo} className="logo_signup" alt="Pulse Point"/>
                                <span className="fw-bold mb-3">Pulse Point</span>
                            </div>
                        </Link>

                        <h5 className="mb-2 fw-semibold">Sign up</h5>
                        <p className="text-muted mb-4">Sign up to enjoy the features of Revolute</p>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Your Name</label>
                                <input
                                    type="text"
                                    id="username"
                                    className="form-control"
                                    placeholder="Enter your name"
                                    name="username"
                                    defaultValue={formState.formValues?.username || ""}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="date" className="form-label">Date of Birth</label>
                                <input
                                    type="date"
                                    id="date"
                                    className="form-control"
                                    name="Date_of_Birth"
                                    defaultValue={formState.formValues?.Date_of_Birth || ""}

                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    name="email"
                                    defaultValue={formState.formValues?.email || ""}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="password" className="form-label">Password</label>
                                <div className="input-group">
                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        className="form-control"
                                        placeholder="Enter password"
                                        name="password"
                                        defaultValue={formState.formValues?.password || ""}
                                    />
                                    <span
                                        className="input-group-text bg-white border-start-0"
                                        style={{cursor: "pointer"}}
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                  <i className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                </span>
                                </div>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                                <div className="input-group">
                                    <input
                                        id="confirm-password"
                                        type={showPassword ? "text" : "password"}
                                        className="form-control"
                                        placeholder="Confirm password"
                                        name="confirm-password"
                                        defaultValue={formState.formValues?.confirmPassword || ""}
                                    />
                                    <span
                                        className="input-group-text bg-white border-start-0"
                                        style={{cursor: "pointer"}}
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                  <i className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                </span>
                                </div>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="role">What best describes your role?</label>
                                <br/>
                                <select id="role" name="role" defaultValue={formState.formValues?.role || "student"}>
                                    <option value="user">User</option>
                                    <option value="doctor">Doctor</option>
                                    <option value="admin">Admin</option>
                                    <option value="founder">Founder</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            {/* عرض الأخطاء */}
                            {formState.errors && (
                                <ul className="error text-danger">
                                    {formState.errors.map((error, i) => (
                                        <li key={i}>{error}</li>
                                    ))}
                                </ul>
                            )}

                            <button type="submit" className="btn btn-primary w-100 mb-3">
                                Sign up
                            </button>

                            <button type="button" className="btn btn-outline-dark w-100">
                                <i className="bi bi-google me-2"></i> Continue with Google
                            </button>
                        </form>

                        <p className="text-center mt-3">
                            Already have an account?{" "}
                            <Link to="/SignIn" className="text-primary fw-semibold">
                                Sign in
                            </Link>
                        </p>
                    </div>

                    {/* Right Side - Image */}
                    <div className="col-md-6 d-none d-md-block p-0 image_right">
                        <img
                            src={signup}
                            alt="Sign Up Background"
                            className="w-100 h-100 signup-image"
                        />
                    </div>
                </div>
            </div>
        );
    }
