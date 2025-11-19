import React from 'react';
import { Link } from 'react-router-dom';
import breadcrum_image from '../../assets/records.jpg';

const DummyLabRecords = [
    {
        id: 1, patient: 'John Doe', date: '2025-11-01', test: 'Complete Blood Count', result: 'Normal', details: [
            { analyte: 'WBC', value: '6.1', unit: '10^3/µL', range: '4.0-11.0' },
            { analyte: 'Hemoglobin', value: '14.2', unit: 'g/dL', range: '13.5-17.5' },
        ]
    },
    {
        id: 2, patient: 'Jane Smith', date: '2025-10-28', test: 'Basic Metabolic Panel', result: 'Slightly High Glucose', details: [
            { analyte: 'Glucose', value: '110', unit: 'mg/dL', range: '70-99' },
            { analyte: 'Na', value: '140', unit: 'mmol/L', range: '135-145' },
        ]
    },
];

const DummyImagingRecords = [
    { id: 1, patient: 'John Doe', date: '2025-11-02', modality: 'Chest X-Ray', summary: 'No acute cardiopulmonary disease.' },
    { id: 2, patient: 'Jane Smith', date: '2025-10-30', modality: 'Abdominal Ultrasound', summary: 'Normal liver and gallbladder.' },
];

export default function Records() {
    return (
        <>
            <div className="parent-header">
                <div className="header-img">
                    <img src={breadcrum_image} alt="Records" width="100%" height="250rem" />
                </div>
                <div className="header-overlay"></div>
                <div className="breadcrumb-parent">
                    <h2>Records</h2>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active">Records</li>
                    </ol>
                </div>
            </div>

            <div className="container my-5">
                <section className="mb-5">
                    <h3 className="fw-bold">Imaging & Radiology Records</h3>
                    <p className="text-muted">Recent imaging reports for patients.</p>
                    <div className="row">
                        {DummyImagingRecords.map(r => (
                            <div key={r.id} className="col-md-6 mb-3">
                                <div className="card shadow-sm">
                                    <div className="card-body">
                                        <h5 className="card-title">{r.modality} — {r.patient}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Date: {r.date}</h6>
                                        <p className="card-text">{r.summary}</p>
                                        
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h3 className="fw-bold">Laboratory Records</h3>
                    <p className="text-muted">Sample laboratory results with key analytes.</p>

                    {DummyLabRecords.map(r => (
                        <div key={r.id} className="card mb-3">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <h5 className="card-title">{r.test} — {r.patient}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Date: {r.date} — Result: {r.result}</h6>
                                    </div>
                                    
                                </div>

                                <div className="table-responsive mt-3">
                                    <table className="table table-sm table-striped">
                                        <thead>
                                            <tr>
                                                <th>Analyte</th>
                                                <th>Value</th>
                                                <th>Unit</th>
                                                <th>Reference</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {r.details.map((d, idx) => (
                                                <tr key={idx}>
                                                    <td>{d.analyte}</td>
                                                    <td>{d.value}</td>
                                                    <td>{d.unit}</td>
                                                    <td>{d.range}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </>
    );
}
