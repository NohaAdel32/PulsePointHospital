import {DummyAddmission} from "./dummy-addmission.js";
import React from "react";
import {motion} from "framer-motion";
export default function Admission(){
    return (
        <div className="min-h-screen  p-6">
            <h1 className="text-3xl font-bold text-center mb-3">Inpatient / Admissions</h1>
            <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10">
                Our hospital is committed to providing high‑quality medical care and ensuring a smooth and comfortable admission process for every patient. Whether for routine treatment or emergency needs, we focus on safety, compassion, and professional healthcare services.
            </p>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {DummyAddmission.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, rotateY: 90 }}
                        animate={{ opacity: 1, rotateY: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden p-4"
                    >
                        <img src={item.img} alt={item.title} className="rounded-xl w-full h-48 object-cover" />
                        <h2 className="text-xl font-semibold mt-4">{item.title}</h2>
                        <p className="text-gray-600 mt-2">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );

}