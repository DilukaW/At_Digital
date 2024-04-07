import banner from '../assets/hero.png';
import CustomButton from './Button';
import '../style/Hero.css';
const Hero = () => {
    return (
        <div className="hero-banner position-relative">
            <img src={banner} className="img-fluid" alt="Hero Image" />
            <div className="sub-hero d-block d-md-none w-100">
                <div className="container text-white">
                    <div className="container text-white px-5 py-3">
                        <h2>We crush your competitors, goals, and sales records - without the B.S.</h2>
                        <CustomButton title={"Get free consultation"} />
                    </div>
                </div>
            </div>
            <div className='sub-hero d-md-block d-none position-absolute bottom-0 start-0 mb-5 ms-3 justify-content-center'>
                <div className="container text-white px-5 py-3">
                    <h2>We crush your competitors, goals, and sales records - without the B.S.</h2>
                    <CustomButton title={"Get free consultation"} />
                </div>
            </div>
        </div>

    );

}
export default Hero;