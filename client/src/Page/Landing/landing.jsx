import Logo from "../../assets/image/Logo.png";
import Mentor1 from "../../assets/image/Mentor image-1.png";
const Landing = () => {
  return (
    <>
      {/* Navbar  */}
      <div className="navbar bg-base-100 pl-5 pr-5">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl font-Open-sauce font-normal">
            <img src={Logo} alt="" />
            Koursian
          </a>
        </div>
        <div className=" navbar-center">
          <div className=" p-5">
            <a role="button" className="btn ">
              Link
            </a>
            <a role="button" className="btn ml-3">
              Link
            </a>
            <a role="button" className="btn ml-3">
              Link
            </a>
            <a role="button" className="btn ml-3">
              Link
            </a>
          </div>
        </div>

        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
      {/* Nav end  */}
    </>
  );
};

export default Landing;
