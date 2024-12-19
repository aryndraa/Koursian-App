import { useLocation } from "react-router-dom";
import Logo from "../assets/image/Logo.png";

const SideBar = () => {
  const location = useLocation();
  const { pathname } = location; 
  const isActive = (path) => pathname === path;

  return (
    
    <div className=" lg:drawer-open h-min">
      <input id="sidebar-toggle" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col w-min h-full">
        <label
          htmlFor="sidebar-toggle"
          className="btn btn-primary drawer-button lg:hidden m-4"
        >
          <span className="solar--hamburger-menu-line-duotone"></span>
        </label>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="sidebar-toggle" className="drawer-overlay"></label>
        <ul className="menu p-4 bg-base-100 text-base-content relative h-full">
          {/* Header Sidebar */}
          <div className="flex items-center justify-between pb-7">
            <div className="flex items-center pl-5">
              <img src={Logo} alt="Logo Koursian" className="w-9" />
              <p className="font-Open-sauce font-bold text-3lg text-black pl-4">
                Koursian
              </p>
            </div>
            <label
              htmlFor="sidebar-toggle"
              className="btn btn-sm btn-circle btn-ghost lg:hidden"
            >
              ✕
            </label>
          </div>

          {/* Sidebar Links */}
          <li>
            <a
              href="/Dashboard"
              className={`button-side ${
                isActive("/Dashboard") ? "bg-[#DEC8FE] text-primary" : ""
              }`}
            >
              <span className="solar--home-angle-bold-duotone"></span>
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="/Browse"
              className={`button-side ${
                isActive("/Browse") ? "bg-[#DEC8FE] text-primary" : ""
              }`}
            >
              <span className="solar--compass-bold-duotone"></span>
              Browse
            </a>
          </li>
          <li>
            <a
              href="/Bootcamp"
              className={`button-side ${
                isActive("/Bootcamp") ? "bg-[#DEC8FE] text-primary" : ""
              }`}
            >
              <span className="solar--notebook-minimalistic-bold-duotone"></span>
              My Bootcamp
            </a>
          </li>
          <li>
            <a
              href="/Mentor"
              className={`button-side ${
                isActive("/Mentor") ? "bg-[#DEC8FE] text-primary" : ""
              }`}
            >
              <span className="solar--user-speak-bold-duotone"></span>
              Mentor
            </a>
          </li>
          <li>
            <a
              href="/Question"
              className={`button-side ${
                isActive("/Question") ? "bg-[#DEC8FE] text-primary" : ""
              }`}
            >
              <span className="solar--question-circle-bold-duotone"></span>
              Question
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
