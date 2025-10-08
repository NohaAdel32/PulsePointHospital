import {Outlet} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../footer/Footer";
import Doctors from "../Doctors/Doctors";
export default function Layout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Doctors />
            <Footer/>
        </>
    )
}