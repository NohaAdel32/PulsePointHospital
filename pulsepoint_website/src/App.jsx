import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/pages/Layout.jsx";
import Home from "./components/pages/Home.jsx";
import ErrorPage from "./components/pages/ErrorPage";
import DoctorList from "./components/pages/DoctorList.jsx";
import DoctorDetails from "./components/pages/DoctorDetails.jsx";
import AppointmentsBookings from "./components/AppointmentsBookings/AppointmentsBookings.jsx";
import Sign_Up from "./components/pages/Sign_Up.jsx";
import Sign_in from "./components/pages/Sign_in.jsx";
import Imaging from "./components/pages/Imaging.jsx";
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
            { path: '/imaging', element: <Imaging /> }
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
