import Logofooter from "../../assets/image/Logofooter.png";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import DecoFoot from "../../assets/image/Landing/decofoot.png";

const footer = () => {
    return (
        <>
            <footer className="container mx-auto mb-[100px]">
                <div className="flex flex-col xl:flex-row justify-between ">
                    <div >
                        <div className="flex gap-4 items-center">
                            <img src={Logofooter} alt=""  />
                            <p className="text-text text-2xl font-bold">Koursian</p>
                        </div>
                        <p className="text-text text-base max-w-[371px] mt-4">We help you to achive your dream. Learn now, anytime, anywhere</p>
                        <div className="flex gap-4 items-center mt-8 mb-12">
                            <div className="p-4 flex items-center justify-center border-primary border-2 rounded-full">
                                <RiInstagramFill className="h-6 w-6 fill-primary" />
                            </div>
                            <div className="p-4 flex items-center justify-center border-primary border-2 rounded-full">
                                <FaFacebook className="h-6 w-6 fill-primary" />
                            </div>
                            <div className="p-4 flex items-center justify-center border-primary border-2 rounded-full">
                                <FaTwitter className="h-6 w-6 fill-primary" />
                            </div>
                        </div>
                        <img src={DecoFoot} alt="" className="hidden xl:block" />
                    </div>
                    <div className="flex lg:justify-between gap-20 flex-wrap">
                        <div>
                            <p className="text-text text-2lg font-semibold">Navigation</p>
                            <div className="flex flex-col gap-2 mt-4">
                                <a href="" className="text-text text-base">Home</a>
                                <a href="" className="text-text text-base">Bootcamp</a>
                                <a href="" className="text-text text-base">Mentor</a>
                                <a href="" className="text-text text-base">Community</a>
                            </div>
                        </div>
                        <div>
                            <p className="text-text text-2lg font-semibold">About US</p>
                            <div className="flex flex-col gap-2 mt-4">
                                <a href="" className="text-text text-base">Company</a>
                                <a href="" className="text-text text-base">FAQ</a>
                                <a href="" className="text-text text-base">Jobs</a>
                                <a href="" className="text-text text-base">Contact Us</a>
                            </div>
                        </div>
                        <div>
                            <p className="text-text text-2lg font-semibold">Company</p>
                            <div className="flex flex-col gap-2 mt-4">
                                <a href="" className="text-text text-base">Account</a>
                                <a href="" className="text-text text-base">Privacy</a>
                                <a href="" className="text-text text-base">Legal Notice</a>
                                <a href="" className="text-text text-base">Cookie Preferences</a>
                            </div>
                        </div>
                        <div className="space-y-2 font-semibold">
                            <p className="text-text text-base">koursian@edu.com</p>
                            <p className="text-text text-base">1-834-974-5148</p>
                            <p className="text-text text-base">973 Kaia Mission, <br /> Bismarck 05589</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default footer;
