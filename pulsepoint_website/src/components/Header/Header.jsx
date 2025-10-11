import LogoDark from "../../assets/logoDark.png"
import './styles/Header.css'
export default function Header() {
    return (
        <>

            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid m-3">
                    
                    <div className="d-flex align-items-center"> 
                        <img src={LogoDark} alt="Logo" className="logoSize" />
                        <a class="navbar-brand" href="#" className="headerLogoText ms-2">Pulse Point</a> 
                    </div>
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul class="navbar-nav m-auto mb-2 mb-lg-0 ">
                            <li class="nav-item">
                                <a class="nav-link active" className="nav-link active activeText" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" className=" nav-link dropdown-toggle blackText" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Intensive Care Unit (ICU)</a></li>
                                    <li><a class="dropdown-item" href="#">Outpatient Clinics</a></li>
                                    <li><a class="dropdown-item" href="#">Inpatient / Admissions</a></li>
                                    <li><a class="dropdown-item" href="#">Radiology & Imaging</a></li>
                                    <li><a class="dropdown-item" href="#">Laboratory</a></li>
                                    <li><a class="dropdown-item" href="#">Emergency / Ambulance</a></li>
                                    <li><a class="dropdown-item" href="#">Records</a></li>
                                    <li><a class="dropdown-item" href="#">Pharmacy</a></li>
                                    {/* <li><hr class="dropdown-divider"></hr></li> */}
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link blackText" href="#">Doctors</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link blackText" href="#">Appointments</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link blackText" href="#">Pharmacy</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link blackText" href="#">Contact</a>
                            </li>

                        </ul>
                        <button type="button" class="btn darkColor">Login</button>
                        <button type="button" class="btn backDarkBtn whiteColor">Sign Up</button>

                    </div>
                </div>
            </nav>
        </>
    )
} 