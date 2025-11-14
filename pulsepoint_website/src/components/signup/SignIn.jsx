import './SginUp.css';
import signup from '../../assets/signup.jpg'
import logo from '../../assets/logoDark.png'
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {hasMinLength, isEmail, isEqualsToOtherValue, isNotEmpty} from '../../util/validation.js'
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "../../store/auth/slices.js";
function signinAction(prevFormState, formData) {
    //! formData.get(key) , where key is the (name) attribute used for the input
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirm-password');

    let errors = [];

    if(!isEmail(email)) {
        errors.push('Invalid email address');
    }

    if(!isNotEmpty(password) || !hasMinLength(password ,6)) {
        errors.push('You must provide password with at least 6 characters');
    }

    if(!isEqualsToOtherValue(password, confirmPassword)) {
        errors.push('Passwords do not match');
    }



    if(errors.length > 0) {
        return {
            errors,
            formValues: {
                email,
                password,
            }
        }
    }

    return {
        errors: null,
        formValues: {
            email,
            password,
        },
    };
}
export default function SignIn(){
    const [formState, setformState] =  useState({ errors: null, formValues: {} });
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const errorLogin = useSelector(state => state.auth.error)
    useEffect(() => {
        if (formState.errors === null && formState.formValues?.email) {
            console.log(" Dispatching user:", formState.formValues);
            dispatch(authActions.login(formState.formValues));

        }
    }, [formState, dispatch]);


    const handleSubmitLogin = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const result = signinAction(formState, formData);
        setformState(result);
        if (result.errors === null && isAuthenticated) {
           navigate('/')
        }else{
            navigate('/signIn')
        }

    }
    return (
        <div className="container-fluid signup-page d-flex align-items-center justify-content-center">
            <div className="row signup-card shadow rounded overflow-hidden">
                {/* Left Side - Form */}
                <div className="col-md-6 col-12 bg-white p-5 d-flex flex-column justify-content-center">
                <Link to="/">
                    <div className="title_signup"> <img src={logo}  className="logo_signup" alt="Pulse Point"/>
                        <span className="fw-bold  mb-3">Pulse Point</span></div>
                </Link>
                    <h5 className="mb-2 fw-semibold">Sign In</h5>
                    <p className="text-muted mb-4">
                        Please login to continue to your account.
                    </p>

                    {formState.errors && (
                        <ul className="error text-danger">
                            {formState.errors.map((error, i) => (
                                <li key={i}>{error}</li>
                            ))}
                        </ul>
                    )},
                    {errorLogin && (<p className="error text-danger">{errorLogin}</p> )}
                    <form onSubmit={handleSubmitLogin}>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className="form-control"
                                placeholder="Enter your email"
                                defaultValue={formState.formValues?.email}
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
                                    defaultValue={formState.formValues?.password}
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
                        <div className="mb-4">
                            <label htmlFor="confirm-password" className="form-label">Confirm Password</label>

                            <div className="input-group">
                                <input
                                    id="confirm-password"
                                    type={showPassword ? "text" : "password"}
                                    className="form-control"
                                    placeholder="Enter Confirm password"
                                    name="confirm-password"
                                    defaultValue={formState.formValues?.confirmPassword}
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
                            Sign In
                        </button>

                        <button type="button" className="btn btn-outline-dark w-100">
                            <i className="bi bi-google me-2"></i> Continue with Google
                        </button>
                    </form>

                    <p className="text-center mt-3 ">
                        Need an account?{" "}
                        <Link to="/SignUp" className="text-primary fw-semibold">
                            Create One
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