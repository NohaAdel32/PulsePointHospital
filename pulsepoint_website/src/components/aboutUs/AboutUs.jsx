import React from "react";
import { motion as Motion } from "framer-motion";
import mission from '../../assets/mission.jpg'
import hospi from '../../assets/home.png'
export  default function AboutUs(){
    return(
        <>
            <div className="w-full min-h-screen bg-gray-50 py-16 px-6 md:px-20">
               {/* Header */}
        <Motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16 text-gray-800"
        >
            About Us
        </Motion.h1>

               {/* Section 1 - Image Left / Text Right */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20 container mx-auto">
            <Motion.img
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                src={hospi}
                alt="Hospital"
                className="rounded-2xl shadow-xl w-full object-cover" width="700px"
            />

            <Motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-lg text-gray-700 leading-relaxed"
            >
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Who We Are</h2>
                <p>
                    Our hospital is committed to providing exceptional medical care using modern technology
                    and a compassionate patient-centered approach.
                </p>
                <p className="mt-4">
                    We ensure every patient receives personalized treatment in a safe, comfortable
                    environment.
                </p>
            </Motion.div>
        </div>

               {/* Section 2 - Text Left / Image Right */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20 container mx-auto">
            <Motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-lg text-gray-700 leading-relaxed"
            >
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Commitment</h2>
                <p>
                    We combine experience, advanced diagnostics, and continuous medical innovation to
                    provide high-quality healthcare services.
                </p>
                <p className="mt-4">
                    Every department works together to ensure accurate diagnosis and effective treatment
                    plans tailored to each patient's needs.
                </p>
            </Motion.div>

            <Motion.img
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                src={mission}
                alt="Medical Team"
                className="rounded-2xl shadow-xl w-full object-cover"
            />
        </div>

               {/* Contact Section */}
        {/*<div className="bg-white p-10 rounded-2xl shadow-md mb-20 container mx-auto max-w-3xl">*/}
        {/*    <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Contact Us</h2>*/}
        {/*    <div className="text-gray-700 text-lg space-y-3 text-center">*/}
        {/*        <p><strong>Phone:</strong> 12345</p>*/}
        {/*        <p><strong>Email:</strong> pulsepoint_hospital@depi.com</p>*/}
        {/*        <p><strong>Location:</strong> Cairo, Egypt</p>*/}
        {/*    </div>*/}
        {/*</div>*/}

               {/* History Section */}
        <div className="container mx-auto bg-white p-10 rounded-2xl shadow-md">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Our History</h2>

            <div className="space-y-8 text-gray-700 text-lg">
                <div>
                    <h3 className="text-xl font-bold text-gray-800">2000 - The Beginning</h3>
                    <p>
                        The hospital was founded with a mission to offer reliable and accessible healthcare to
                        the community.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-gray-800">2010 - Expansion</h3>
                    <p>
                        New departments, advanced diagnostic units, and improved patient facilities were added
                        to meet growing medical needs.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-gray-800">2020 - Modernization</h3>
                    <p>
                        Major upgrades introduced digital medical systems, improved technology, and innovative
                        treatment methods.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-gray-800">Today</h3>
                    <p>
                        The hospital continues to grow, serving thousands of patients each year with
                        world‑class healthcare across all specialties.
                    </p>
                </div>
            </div>
        </div>
        </div>
</>
    )
}