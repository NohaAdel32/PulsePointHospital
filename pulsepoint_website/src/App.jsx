import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/pages/layout.jsx";
import Home from "./components/pages/Home.jsx";
import ErrorPage from "./components/pages/ErrorPage";
import DoctorList from "./components/pages/DoctorList.jsx";
import AppointmentsBookings from "./components/AppointmentsBookings/AppointmentsBookings.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />, 
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <Home /> },
            {path: '/doctors', element: <DoctorList /> },
            { path: '/appointments-bookings', element: <AppointmentsBookings /> }
            
        ]
    }
])


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
