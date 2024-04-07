import CustomButton from './Button';
import img2 from '../assets/image 2.png';
import img1 from '../assets/image 1.png';

const Content = () => {
    return (
        <div>
            <div className="container d-md-flex d-block align-items-center justify-content-center">
                <img src={img2} className='img-fluid text-center w-100'></img>
                <div className='text-center text-sm-start'>
                    <h2 className='heading'>Web & Mobile App Development</h2>
                    <p >Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
                    <CustomButton title={"LEARN MORE"} />
                </div>
            </div>
            <div className="container d-md-flex d-block align-items-center justify-content-center mt-5 mt-md-0 mb-5">
                <div className='text-center text-sm-start'>
                    <h2 className='heading'>Digital Strategy Consulting</h2>
                    <p >Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
                    <CustomButton title={"LEARN MORE"} />
                </div>
                <img src={img1} className='img-fluid text-center w-100'></img>

            </div>
        </div>

    );
}

export default Content;