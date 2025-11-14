import './Search.css';
import React, {useState} from "react";
import { DummyDoctors } from "../Doctors/dummy-doctors.js";
import {Link} from "react-router-dom";


export default function Search(){
    const [query, setQuery] = useState("");
    const [department, setDepartment] = useState("");
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);
    const handleSearch=(e)=>{
        e.preventDefault();
        setHasSearched(true);
        let result =DummyDoctors.filter((doctor)=>{
            const matchesQuery=doctor.name.toLowerCase().includes(query.toLowerCase()) ||
                doctor.position.toLowerCase().includes(query.toLowerCase());
            const matchesDepartment =
                !department || doctor.specialty === department;
            return matchesQuery && matchesDepartment;
        })
        setFilteredDoctors(result)
    }
    return(
        <>
            <div className="doctor-search-section">
                <div className="container">
                    <div className="search-your-doctor-form">
                        <form onSubmit={handleSearch}>
                            <div className="search-group">
                                <div className="search-input">
                                    <input
                                        type="text"
                                        placeholder="Search for doctor or specialty"
                                        className="form-control"
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                        required
                                    />
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>

                                <div className="search-input">
                                    <select className="form-select"
                                            value={department}
                                            onChange={(e) => setDepartment(e.target.value)}>
                                        <option value="">Select Department</option>
                                        <option value="1">Medical</option>
                                        <option value="2">Surgery</option>
                                        <option value="3">Neurosurgery</option>
                                        <option value="4">Orthopedic</option>
                                        <option value="5">Cardiologist</option>

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
            {/* result */}
            <div className="container mt-4">

                {hasSearched && filteredDoctors.length > 0 && (
                    <div className="doctor-results">
                        <h4>Search Results:</h4>
                        <ul className="list-group">
                            {filteredDoctors.map((doc) => (
                                <li key={doc.id} className="list-group-item">
                                    <strong>{doc.name}</strong> — {doc.specialty} ({doc.department})
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {hasSearched && filteredDoctors.length === 0 && (
                    <p className="text-center text-muted mt-3">No results found...</p>
                )}

            </div>
        </>
    )
}