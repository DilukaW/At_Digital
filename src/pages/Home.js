import Content from '../components/Content';
import Footer from '../components/Footer';
import Hero from '../components/Herobanner';

import Navbar from '../components/Navbar';
import Questions from '../components/Question';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Content />
            <Questions />
            <Footer />
        </div>
    );

}

export default Home