import './Search.css';
export default function Search(){
    return(
        <>
            <div className="doctor-search-section">
                <div className="container">
                    <div className="search-your-doctor-form">
                        <form action="#">
                            <div className="search-group">
                                <div className="search-input">
                                    <input
                                        type="text"
                                        placeholder="Search for doctor or specialty"
                                        className="form-control"
                                    />
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>

                                <div className="search-input">
                                    <select className="form-select">
                                        <option value="">Select Department</option>
                                        <option value="1">Medical</option>
                                        <option value="2">Surgery</option>
                                        <option value="3">Neurosurgery</option>
                                        <option value="4">Orthopedic</option>
                                    </select>
                                </div>

                                <button type="submit" className="rts-btn btn-primary">
                                    Find Your Doctor
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}