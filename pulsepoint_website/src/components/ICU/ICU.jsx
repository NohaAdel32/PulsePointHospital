import React from "react";

export default function ICU() {
    return (
        <div style={{ fontFamily: "Arial" }}>
            <div
                style={{
                    background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1586773860418-d37222d8fce3")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    padding: "100px 20px",
                    color: "white",
                    textAlign: "center",
                }}
            >
                <h1 style={{ fontSize: "42px", fontWeight: "bold" }}>
                    Intensive Care Unit (ICU)
                </h1>
                <p style={{ marginTop: "10px", fontSize: "18px" }}>
                    Advanced 24/7 critical care for severe medical conditions
                </p>
            </div>

            <div style={{ padding: "40px" }}>
                <h2 style={{ color: "#003366", fontSize: "28px", fontWeight: "bold" }}>
                    What We Provide
                </h2>

                <ul style={{ marginTop: "20px", fontSize: "18px", lineHeight: "2" }}>
                    <li>✔ Continuous vital-sign monitoring</li>
                    <li>✔ Mechanical ventilation support</li>
                    <li>✔ Highly trained critical-care team</li>
                    <li>✔ Emergency rapid-response specialists</li>
                </ul>
            </div>

            <div
                style={{
                    background: "#003366",
                    color: "white",
                    padding: "40px",
                    textAlign: "center",

                    width:"90%",
                    margin:"40px auto",
                }}
            >
                <h2 style={{ fontSize: "26px", fontWeight: "bold",color: "white"}}>
                    Need immediate ICU support?
                </h2>
                <button
                    style={{
                        marginTop: "20px",
                        padding: "12px 30px",
                        background: "#0aa1dd",
                        border: "none",
                        color: "white",
                        fontSize: "18px",
                        borderRadius: "8px",
                        cursor: "pointer",
                    }}
                >
                    Contact Us
                </button>
            </div>
        </div>
    );
}
