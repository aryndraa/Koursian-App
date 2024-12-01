/* eslint-disable no-unused-vars */
import Logo from "../../assets/image/Logo.png";
import Mentor1 from "../../assets/image/Mentor image-1.png";
import deco from "../../assets/image/deco.svg";
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
            <head className="flex flex-col justify-center items-center mt-14">
                <img src={deco} alt="" />
                <h1 className="text-6xl font-bold text-text leading-[110px] text-center max-w-[1188px]">
                    The <span className="text-secondary">future</span> belongs to those who keep <span className="text-primary">learning</span>{" "}
                </h1>
                <p className="text-text font-medium text-base mt-8 max-w-[524px] text-center opacity-80">
                    Every skill you gain brings new opportunities and pushes you closer to your goals. Start today with Koursian
                </p>
                <a href="" className="py-3 pl-8 pr-3 bg-primary text-white font-semibold mt-8 rounded-3xl flex justify-center items-center gap-4">
                    Get Started
                    <div className="flex justify-center items-center bg-white rounded-full p-1">
                        <span className="solar-arrow-landing text-primary font-bold"></span>
                    </div>
                </a>
            </head>
        </>
    );
};

export default Landing;
