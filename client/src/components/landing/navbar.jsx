import Logo from "../../assets/image/Logo.png";

const navbar = () => {
    return (
        <>
            <nav className="container py-5 mx-auto navbar bg-base-100">
                <div className="navbar-start">
                    <div className="flex items-center gap-4">
                        <img src={Logo} alt="" />
                        <p className="font-semibold text-3lg text-text">Koursian</p>
                    </div>
                </div>
                <div className=" navbar-center">
                    <div className="items-center hidden gap-3 xl:flex">
                        <a href="" className="font-medium text-white opacity-100 nav-link bg-primary">
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
                    <div className="items-center hidden gap-4 xl:flex">
                        <a href="" className="font-semibold text-text">
                            Sign Up
                        </a>
                        <a href="" className="flex items-center justify-center px-12 py-3 font-semibold duration-200 border-2 text-text border-primary rounded-3xl hover:bg-primary hover:text-white">
                            Sign In
                        </a>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="text-white border-none outline-none btn bg-primary lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul className="menu menu-sm dropdown-content space-y-4 bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a href="" className="nav-link">
                                    Bootcamp
                                </a>
                            </li>
                            <li>
                                <a href="" className="nav-link">
                                    Advantage
                                </a>
                            </li>
                            <li>
                                <a href="" className="nav-link">
                                    Testimonials
                                </a>
                            </li>
                            <li>
                                <a href="" className="text-base font-semibold text-text">
                                    Sign Up
                                </a>
                            </li>
                            <li>
                                <a href="" className="font-semibold text-white bg-primary">
                                    Sign in
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default navbar;
