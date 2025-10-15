import Doctors from "../Doctors/Doctors";
import HeroImage from "../heroImage/HeroImage.jsx";
import Appointments from "../Appointments/Appointments.jsx";
export default function Home() {
    return (
        <>
            <div>
                <HeroImage/>
                <Doctors />
                <Appointments />
            </div>
        </>

    )
}