/* eslint-disable no-unused-vars */
import Logo from "../../assets/image/Logo.png";
import Mentor1 from "../../assets/image/Mentor image-1.png";
import Mentor2 from "../../assets/image/Mentor image-2.png";
import Mentor3 from "../../assets/image/Mentor image-3.png";
import Mentor4 from "../../assets/image/Mentor image-4.png";
import Mentor5 from "../../assets/image/Mentor image.png";
import Deco from "../../assets/image/deco.svg";
import Navbar from "../../components/landing/navbar.jsx";
const Landing = () => {
    return (
        <>
            <Navbar />
            <head className="flex flex-col items-center justify-center mt-14">
                <img src={Deco} alt="" />
                <h1 className="text-6xl font-bold text-text leading-[110px] text-center max-w-[1188px]">
                    The <span className="text-secondary">future</span> belongs to those who keep <span className="text-primary">learning</span>{" "}
                </h1>
                <p className="text-text font-medium text-base mt-8 max-w-[524px] text-center opacity-80">
                    Every skill you gain brings new opportunities and pushes you closer to your goals. Start today with Koursian
                </p>
                <a href="" className="flex items-center justify-center gap-4 py-3 pl-8 pr-3 mt-8 font-semibold text-white bg-primary rounded-3xl">
                    Get Started
                    <div className="flex items-center justify-center p-1 bg-white rounded-full">
                        <span className="font-bold solar-arrow-landing text-primary"></span>
                    </div>
                </a>
            </head>
            <div className="hidden mt-16 2xl:block">
                <p className="text-base font-medium text-center text-text/60">Meet Future Mentor</p>
                <div className="items-center justify-center hidden gap-5 mt-8 2xl:flex">
                    <img src={Mentor1} alt="mentor1" />
                    <img src={Mentor2} alt="mentor2" />
                    <img src={Mentor3} alt="mentor3" />
                    <img src={Mentor4} alt="mentor4" />
                    <img src={Mentor5} alt="mentor5" className="hidden 2xl:block" />
                </div>
            </div>
            <section className="w-full p-16 mt-16 bg-primary">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <div className="text-center">
                        <h2 className="text-5xl font-bold text-white">10+</h2>
                        <p className="text-base font-bold text-white opacity-40">Years of Service</p>
                    </div>
                    <div className="devider-vertical"></div>
                    <div className="text-center">
                        <h2 className="text-5xl font-bold text-white">10+</h2>
                        <p className="text-base font-bold text-white opacity-40">Years of Service</p>
                    </div>
                    <div className="devider-vertical"></div>
                    <div className="text-center">
                        <h2 className="text-5xl font-bold text-white">10+</h2>
                        <p className="text-base font-bold text-white opacity-40">Years of Service</p>
                    </div>
                    <div className="devider-vertical"></div>
                    <div className="text-center">
                        <h2 className="text-5xl font-bold text-white">10+</h2>
                        <p className="text-base font-bold text-white opacity-40">Years of Service</p>
                    </div>
                    <div className="devider-vertical"></div>
                    <div className="text-center">
                        <h2 className="text-5xl font-bold text-white">10+</h2>
                        <p className="text-base font-bold text-white opacity-40">Years of Service</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Landing;
