import Logo from "../assets/image/Logo.png";

const SideBar = () => {
  return (
    <div className="lg:drawer-open">
      <input id="sidebar-toggle" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col w-min">
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
        <ul className="menu p-4 bg-base-100 text-base-content h-screen relative">
          <div className="flex items-center justify-between pt-3 pb-7">
            <div className="flex items-center">
              <img src={Logo} alt="Logo Koursian" />
              <p className="font-Open-sauce font-medium text-3lg text-black pl-4">
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

          <li>
            <a className="button-side">
              <span className="solar--home-angle-bold-duotone"></span>
              Dashboard
            </a>
          </li>
          <li >
            <a className="button-side">
              <span className="solar--compass-bold-duotone"></span>
              Browse
            </a>
          </li>
          <li >
            <a className="button-side">
              <span className="solar--notebook-minimalistic-bold-duotone"></span>
              My Bootcamp
            </a>
          </li>
          <li >
            <a className="button-side">
              <span className="solar--user-speak-bold-duotone"></span>
              Mentor
            </a>
          </li>
          <li >
            <a className="button-side">
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
