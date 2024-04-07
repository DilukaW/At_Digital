import logo from '../assets/Logo.png'
const Footer = () => {
    return (
        <div className="back container-fluid text-white px-5">
            <footer class="row row-cols-1 row-cols-md-5 py-5 my-2 ">
                <div class="col-md-6 mb-3">
                    <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
                        <img src={logo} style={{ height: 25 }}></img>
                    </a>
                    <p class="">Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
                </div>




                <div class="col-md-3 mb-3">
                    <h5>Our Technologies</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2">ReactJS</li>
                        <li class="nav-item mb-2">Gatsby</li>
                        <li class="nav-item mb-2">Pricing</li>
                        <li class="nav-item mb-2">NextJS</li>
                        <li class="nav-item mb-2">NodeJS</li>
                    </ul>
                </div>

                <div class="col-md-3">
                    <h5>Our Services</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2">Social media Marketing</li>
                        <li class="nav-item mb-2">Web & Mobile App Development</li>
                        <li class="nav-item mb-2">Data & Analytic</li>

                    </ul>
                </div>


            </footer>
            <div className='justify-content-center text-center border-top d-flex p-2' ><p class="text-center">Privacy Policy | Terms & Conditions</p></div>
        </div>
    );
}
export default Footer;