import Logo from "../../assets/image/Logo.png";
// eslint-disable-next-line no-unused-vars
import Mentor1 from "../../assets/image/Mentor image-1.png";
const Landing = () => {
    return (
        <>
            {/* Navbar  */}
            <nav className="navbar bg-base-100 py-5 container mx-auto">
                <div className="navbar-start">
                    <div className="flex gap-4 items-center">
                        <img src={Logo} alt="" />
                        <p className="text-3lg text-text font-semibold">Koursian</p>
                    </div>
                </div>
                <div className=" navbar-center">
                    <div className="flex gap-3">
                        <a href="" className="nav-link bg-primary text-white font-medium opacity-100">
                            Home
                        </a>
                        <a href="" className="nav-link">
                            Bootcamp
                        </a>
                        <a href="" className="nav-link">
                            Advantage
                        </a>
                        <a href="" className="nav-link">
                            Testimonials
                        </a>
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="flex items-center gap-4">
                        <a href="" className="text-text font-semibold">
                            Sign Up
                        </a>
                        <a href="" className="px-12 py-3 font-semibold flex items-center justify-center border-2 text-text  border-primary rounded-3xl hover:bg-primary hover:text-white duration-200">
                            Sign In
                        </a>
                    </div>
                </div>
            </nav>
            {/* Nav end  */}
        </>
    );
};

export default Landing;
