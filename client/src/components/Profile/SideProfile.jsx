import { useLocation } from "react-router-dom";

const SideProfile = () => {
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
        <ul className="menu p-4 bg-base-100 text-base-content relative h-full gap-2">
          {/* Header Sidebar */}
          <div className="flex items-center justify-between pb-7">
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
              Profile
            </a>
          </li>
          <li>
            <a
              href="/Browse"
              className={`button-side ${
                isActive("/Browse") ? "bg-[#DEC8FE] text-primary" : ""
              }`}
            >
              Wishlist
            </a>
          </li>
          <li>
            <a
              href="/Bootcamp"
              className={`button-side ${
                isActive("/Bootcamp") ? "bg-[#DEC8FE] text-primary" : ""
              }`}
            >
              My Question
            </a>
          </li>
          <li>
            <a
              href="/Mentor"
              className={`button-side outline-1 outline-black ${
                isActive("/Mentor") ? "bg-[#DEC8FE] text-primary" : ""
              }`}
            >
              
              My Bootcamp
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideProfile;
