import './SginUp.css';
import signup from '../../assets/signup.jpg'
import logo from '../../assets/logoDark.png'
import {useState} from "react";
import {Link} from "react-router-dom";
export default function SignUp(){
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="container-fluid signup-page d-flex align-items-center justify-content-center">
            <div className="row signup-card shadow rounded overflow-hidden">
                {/* Left Side - Form */}
                <div className="col-md-6 col-12 bg-white p-5 d-flex flex-column justify-content-center">
                    <Link to="/">
                        <div className="title_signup"> <img src={logo}  className="logo_signup" alt="Pulse Point"/>
                            <span className="fw-bold  mb-3">Pulse Point</span></div>
                    </Link>
                    <h5 className="mb-2 fw-semibold">Sign up</h5>
                    <p className="text-muted mb-4">
                        Sign up to enjoy the features of Revolute
                    </p>

                    <form>
                        <div className="mb-3">
                            <label className="form-label">Your Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Date of Birth</label>
                            <input type="date" className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="form-label">Password</label>

                            <div className="input-group">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="form-control"
                                    placeholder="Enter password"
                                />
                                <span
                                    className="input-group-text bg-white border-start-0"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                <i
                    className={`fa-solid ${
                        showPassword ? "fa-eye-slash" : "fa-eye"
                    }`}
                ></i>
              </span>
                            </div>
                        </div>


                        <button type="submit" className="btn btn-primary w-100 mb-3">
                            Sign up
                        </button>

                        <button type="button" className="btn btn-outline-dark w-100">
                            <i className="bi bi-google me-2"></i> Continue with Google
                        </button>
                    </form>

                    <p className="text-center mt-3 ">
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