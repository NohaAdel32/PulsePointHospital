import {Outlet} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../footer/Footer";
import React from "react";
export default function Layout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>

            <Footer/>
        </>
    )
}