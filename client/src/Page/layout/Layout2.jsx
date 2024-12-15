/* eslint-disable no-unused-vars */
import Logo from "../../assets/image/Logo.png";
import Dot from "../../assets/image/Group-1.png";
import Circle from "../../assets/image/Group.png";
import Vector1 from "../../assets/image/Vector-1.png";
import Vector from "../../assets/image/Vector.png";
import Deco from "../../assets/image/deco.svg";

const Layout2 = ({ children, title1, desc1, main }) => {
    return (
        <div className="flex w-screen min-h-full">
            <div className="w-1/2 h-screen bg-primary ">
                <img src={Circle} alt="" className="w-1/12 absolute top-0 " />
                <img src={Dot} alt="" className="w-2/12 absolute top-1/4 left-1/4" />
                <img src={Vector} alt="" className="w-20 absolute top-2/4 pt-36 left-1/4 ml-36" />
                <img src={Vector1} alt="" className="w-2/12  absolute bottom-0 left-1/4" />
                <div className="h-full flex justify-center items-center ">
                    <div className="px-7">
                        <img src={Deco} alt="" />
                        {title1 || (
                            <div>
                                <p className="Header1 text-white">Unlock Your Path</p>
                                <div className="flex gap-4">
                                    <p className="Header1 text-white">To Achieve Your </p>
                                    <p className="Header1 text-yellow-300">Dream</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="h-screen w-1/2 flex items-center justify-center">
                <div className="flex flex-col gap-10">
                    <div className="flex items-center">
                        <img src={Logo} alt="" className="w-8" />
                        <p className="font-Open-sauce font-medium text-black">Koursian</p>
                    </div>
                    <div>
                        <p className="Header2 text-black">Welcome back learners</p>
                        {desc1 || (
                            <p className="Desc">
                                Let's Continue Your Journey, Make Your Dream <br />
                                Come true
                            </p>
                        )}
                    </div>
                    <div> {main || <div>Taruh content disini </div>}</div>
                </div>
            </div>
        </div>
    );
};

export default Layout2;
