import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/pages/layout.jsx";
import Home from "./components/pages/Home.jsx";
import ErrorPage from "./components/pages/ErrorPage";
import DoctorList from "./components/pages/DoctorList.jsx";
import DoctorDetails from "./components/pages/DoctorDetails.jsx";
import AppointmentsBookings from "./components/AppointmentsBookings/AppointmentsBookings.jsx";
import Sign_Up from "./components/pages/Sign_Up.jsx";
import Sign_in from "./components/pages/Sign_in.jsx";
import Contact_Us from "./components/pages/Contact_Us.jsx";
import Imaging from "./components/pages/Imaging.jsx";
import Records from "./components/pages/Records.jsx";
import React from "react";
import AdmissionPage from "./components/pages/AdmissionPage.jsx";
import AboutUsPage from "./components/pages/AboutUsPage.jsx";
import ICU from "./components/ICU/ICU.jsx"
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            { path: '/', element: <Home /> },
            {path: '/doctors', element: <DoctorList /> },
            {path: '/doctorsDetail/:id', element: <DoctorDetails /> },
            { path: '/appointments-bookings', element: <AppointmentsBookings /> },
            { path: '/ContactUs', element: <Contact_Us /> },
            { path: '/imaging', element: <Imaging /> },
            { path: '/records', element: <Records /> },
            { path: '/admission', element: <AdmissionPage /> },
            { path: '/aboutUs', element: <AboutUsPage /> },
            { path: '/ICU', element: <ICU /> },
        ]
    },
    {path:"/SignUp", element:<Sign_Up/>},
    {path:"/SignIn", element:<Sign_in/>}

])


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
