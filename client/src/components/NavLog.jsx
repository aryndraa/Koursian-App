import Profile from "../assets/image/profile.png";
import { useLocation,useNavigate } from "react-router-dom";

const NavLog = () => {
  const location = useLocation()
  const formatPathName = location.pathname.replace("/", "")
  const navigate = useNavigate()
  return (
    <div className="navbar bg-base-100 justify-between">
      <div className="">
        <p className="font-Open-sauce font-semibold text-3lg text-black pl-4 hidden md:block">
          {formatPathName}
        </p>
      </div>

      <div className="">
        <input
          placeholder="search bootcamp, mentor, question"
          className="search-bar
        "
        ></input>
      </div>

      {/* Bagian Kanan - Menu */}
      <div className="">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className=" btn-nav   lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </label>

          {/* Menu Dropdown untuk Mobile */}
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Bookmark</a>
            </li>
            <li>
              <a>Notification</a>
            </li>
            <li>
              <a>Cart</a>
            </li>
            <li>
              <a>User profile </a>
            </li>
          </ul>
        </div>

        {/* Menu untuk Desktop */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className=" btn-nav  ">
            <span className="solar--chat-line-bold-duotone"></span>
          </button>
          <button className="  btn-nav  ">
            <span className="solar--bookmark-bold-duotone"></span>
          </button>
          <button className=" btn-nav  ">
            <span className="solar--bell-bold-duotone"></span>
          </button>
          <button className=" btn-nav  ">
            <span className="solar--cart-large-2-bold-duotone"></span>
          </button>
          <div className="avatar">
            <div className="w-8 rounded-full ">
              <img
                typeof="button"
                src={Profile}
                alt="User Avatar"
                onClick={() => navigate("/Profile")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavLog;
