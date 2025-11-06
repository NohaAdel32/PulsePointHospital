import LogoDark from "../../assets/logoDark.png"
import './styles/Header.css'
import {Link, useLocation, useNavigate} from "react-router-dom";
export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <>

            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid m-3">
                    
                    <div className="d-flex align-items-center"> 
                        <img src={LogoDark} alt="Logo" className="logoSize" />
                        <Link className="navbar-brand headerLogoText ms-2" to="/">Pulse Point</Link> 
                    </div>
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul class="navbar-nav m-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link 
                                    className={`nav-link ${location.pathname === '/' ? 'active activeText' : 'blackText'}`}
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" className=" nav-link dropdown-toggle blackText" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Intensive Care Unit (ICU)</a></li>
                                    <li><a class="dropdown-item" href="#">Outpatient Clinics</a></li>
                                    <li><a class="dropdown-item" href="#">Inpatient / Admissions</a></li>
                                    <li><Link class="dropdown-item" to="/imaging">Radiology & Imaging</Link></li>
                                    <li><Link class="dropdown-item" to="/laboratory">Laboratory</Link></li>
                                    <li><a class="dropdown-item" href="#">Emergency / Ambulance</a></li>
                                    <li><a class="dropdown-item" href="#">Records</a></li>
                                    <li><a class="dropdown-item" href="#">Pharmacy</a></li>
                                    {/* <li><hr class="dropdown-divider"></hr></li> */}
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
                            <li class="nav-item">
                                <a class="nav-link blackText" href="#">Pharmacy</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link blackText" href="#">Contact</a>
                            </li>

                        </ul>
                        <button type="button" class="btn darkColor" onClick={() => navigate("/signIn")}>Login</button>
                        <button type="button" class="btn backDarkBtn whiteColor" onClick={() => navigate("/signUp")}>Sign Up</button>

                    </div>
                </div>
            </nav>
        </>
    )
} 

