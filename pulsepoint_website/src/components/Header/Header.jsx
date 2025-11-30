import LogoDark from "../../assets/logoDark.png"
import './styles/Header.css'
import React from "react";
import {Link, NavLink, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../store/auth/authSlice.js";
import {authActions} from "../../store/auth/slices.js";
export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    return (
        <>

            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid m-3">
                    
                    <div className="d-flex align-items-center"> 
                        <img src={LogoDark} alt="Logo" className="logoSize" />
                        <Link className="navbar-brand headerLogoText ms-2" to="/">Pulse Point</Link> 
                    </div>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link 
                                    className={`nav-link ${location.pathname === '/' ? 'active activeText' : 'blackText'}`}
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a  className=" nav-link dropdown-toggle blackText" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/ICU">Intensive Care Unit (ICU)</Link></li>
                                    <li><Link className="dropdown-item" to='/doctors'>Outpatient Clinics</Link></li>
                                    <li><Link className="dropdown-item" to="/admission">Inpatient / Admissions</Link></li>
                                    <li><Link className="dropdown-item" to="/imaging">Radiology & Imaging</Link></li>
                                    <li><a className="dropdown-item" href="#">Laboratory</a></li>
                                    <li><Link className="dropdown-item" to="/records">Records</Link></li>
                                    <li><Link className="dropdown-item" to="/pharmacy">Pharmacy</Link></li>
                                    {/* <li><hr className="dropdown-divider"></hr></li> */}
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className={`nav-link ${location.pathname === '/doctors' ? 'active activeText' : 'blackText'}`}
                                    to="/doctors"
                                >
                                    Doctors
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className={`nav-link ${location.pathname === '/appointments-bookings' ? 'active activeText' : 'blackText'}`}
                                    to="/appointments-bookings"
                                >
                                    Appointments
                                </Link>
                            </li>
                            <li className="nav-item">
                                <NavLink  className={`nav-link ${location.pathname === '/pharmacy' ? 'active activeText' : 'blackText'}`} to="/pharmacy">Pharmacy</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link ${location.pathname === '/ContactUs' ? 'active activeText' : 'blackText'}`} to="/ContactUs">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link ${location.pathname === '/aboutUs' ? 'active activeText' : 'blackText'}`} to="/aboutUs">About Us</NavLink>
                            </li>
                        </ul>
                        {!isAuthenticated &&(
                            <>
                                <button type="button" className="btn darkColor" onClick={() => navigate("/signIn")}>Login</button>
                                <button type="button" className="btn backDarkBtn whiteColor" onClick={() => navigate("/signUp")}>Sign Up</button>
                            </>
                        )}

                    {isAuthenticated &&  <button type="button" className="btn backDarkBtn whiteColor"
                                                 onClick={() => {
                                                     dispatch(authActions.logout());
                                                     navigate("/");
                                                 }}>Log Out</button>}
                    </div>
                </div>
            </nav>
        </>
    )
} 

