
import HeroImage from "../heroImage/HeroImage.jsx";
import Appointments from "../Appointments/Appointments.jsx";
import Search from "../search/Search.jsx";
import {DoctorShow} from "../Doctors/DoctorShow.jsx";
export default function Home() {
    return (
        <>
            <div>
                <HeroImage/>
                <Search/>
                <DoctorShow initialCount={3}/>
                <Appointments />
            </div>
        </>

    )
}