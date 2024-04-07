import '../style/Navbar.css'
import logo from '../assets/Logo.png'
const Navbar = () => {
    return (


        <nav class="navbar navbar-expand-lg nav">
            <div class="container">
                <a class="navbar-brand" href="/"><img src={logo} style={{ height: 25 }} alt=""></img></a>
                <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mb-lg-0 ">
                        <li class="nav-item">
                            <a class="nav-link text-white" aria-current="page" href="/">SERVICES</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="/">ABOUT US</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="/">CONTACT US</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="/">CAREERS</a>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>


    )
}
export default Navbar;