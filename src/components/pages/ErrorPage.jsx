import "../../App.css";
import { Link } from "react-router-dom";
export default function ErrorPage() {
    return (
        <div className="error-container">
            <div className="error-content text-center">
                <h1 className="error-code">404</h1>
                <h2 className="error-title">Page Not Found</h2>
                <p className="error-message">
                    Oops! The page you are looking for doesn’t exist or has been moved.
                </p>
                <Link to="/" className="btn-home">
                    ⬅ Back to Home
                </Link>
            </div>
        </div>
    );
}
