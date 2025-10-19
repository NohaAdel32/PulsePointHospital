import Doctors from "../Doctors/Doctors";
import HeroImage from "../heroImage/HeroImage.jsx";
import Appointments from "../Appointments/Appointments.jsx";
import Search from "../search/Search.jsx";
export default function Home() {
    return (
        <>
            <div>
                <HeroImage/>
                <Search/>
                <Doctors />
                <Appointments />
            </div>
        </>

    )
}