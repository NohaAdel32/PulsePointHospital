import ContactUs from "../contactUs/ContactUs.jsx";
import {Fade} from "react-awesome-reveal";
import breadcrum_image from "../../assets/contact.jpg";
import {Link} from "react-router-dom";
import Search from "../search/Search.jsx";
import React from "react";
// import {redirect} from "react-router-dom";

export default function Contact_Us(){
return(
    <>
        <div className="parent-header">
            <div className="header-img">
                <img src={breadcrum_image} alt="Doctors" width="100%" height="250rem" />
            </div>
            <div className="header-overlay"></div>
            <div className="breadcrumb-parent">
                <h2>Contact Us</h2>
                <ol className="breadcrumb">

                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" >Contact Us</li>
                </ol>
            </div>
        </div>
        <Search/>
        <Fade cascade damping={0.15} direction="right" triggerOnce>
            <ContactUs/>
        </Fade>
    </>

)
}
// export async function ContactUsPage({request}) {
//     const data = await request.formData();
//
//     const contactData = {
//          firstName : data.get('firstName'),
//          lastName : data.get('lastName'),
//          email : data.get('email'),
//          phone : data.get('phone'),
//          subject : data.get('subject'),
//          message : data.get('message'),
//     };

    // const response = await fetch('http://localhost:8080/api/contact', {
    //     method: 'POST',
    //     body: JSON.stringify(contactData),
    //     headers: {
    //         'Content-Type': 'application/json',
    //     }
    // });
    //
    // if(response.status === 422) {
    //     return response;
    // }
    //
    // if(!response.ok) {
    //     throw new Response(
    //         JSON.stringify({ message: "Could not Send Data." }),
    //         {status: 500}
    //     )
    // }
    // console.log("📨 Contact Form Data:", contactData);
    //
    // alert("✅ Message sent successfully (local simulation)");
    //
    // return null;

    // return redirect('/ContactUs');
// }