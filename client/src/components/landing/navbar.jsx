import Logo from "../../assets/image/Logo.png"

const navbar = () =>{
    return(
        <>
        <nav className="container py-5 mx-auto navbar bg-base-100">
                <div className="navbar-start">
                    <div className="flex items-center ">
                        <img src={Logo} alt="" />
                        <p className="font-semibold text-3lg text-text">Koursian</p>
                    </div>
                </div>
                <div className=" navbar-center">
                    <div className="flex gap-3">
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
                    <div className="flex items-center gap-4">
                        <a href="" className="font-semibold text-text">
                            Sign Up
                        </a>
                        <a href="" className="flex items-center justify-center px-12 py-3 font-semibold duration-200 border-2 text-text border-primary rounded-3xl hover:bg-primary hover:text-white">
                            Sign In
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default navbar
