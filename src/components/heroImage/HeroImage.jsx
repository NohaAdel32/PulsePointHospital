import heroImage from "../../assets/home.png";
import "./styles/HeroImage.css";
export default function HeroImage(){
    return(
        <>
    <div className=' container-fluid parent-heroImage '>
        <div className='row   g-5'>
            <div className='col-lg-6 col-12 info-section'>
                <h1>Your health
                    <br/>
                    Our priority</h1>
                <p className='p-heroImage'>At Pulse Point Hospital,</p>
                <p className='p-heroImage'>Our team combines clinical excellence with a personal touch — delivering
                    safe,
                    respectful care for you and your family 24/7</p>
                <p className="num_h mt-5">
                    <i className="fa-solid fa-phone-volume"></i> 12345
                </p>
                <button className='btn-appotmaint'>Book an appointment</button>
                <button className='btn-services'>View Services</button>
            </div>
            <div className='col-lg-5 col-12 '>
                <div className='HeroImage-section'>
                    <div className='section-overlay'></div>
                    <div className='img-overlay'>
                        <img src={heroImage} alt='Hospital'/>
                    </div>
                </div>


            </div>
        </div>


    </div>
        </>
    )
}