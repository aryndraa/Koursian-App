import Profile from "../assets/image/profile.png";

const NavLog = () => {
  return (
    <div className="navbar bg-base-100 pt-7">
      <div className="flex-1">
        <p className="font-Open-sauce font-semibold text-3lg text-black pl-4">
          Dashboard
        </p>
      </div>

      <div className="flex-1">
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>

      {/* Bagian Kanan - Menu */}
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </ul>
        </div>

        {/* Menu untuk Desktop */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="btn btn-ghost">
            <span className="solar--bookmark-bold-duotone"></span>
          </button>
          <button className="btn btn-ghost">
            <span className="solar--bell-bold-duotone"></span>
          </button>
          <button className="btn btn-ghost">
            <span className="solar--cart-large-2-bold-duotone"></span>
          </button>
          <div className="avatar">
            <div className="w-8 rounded-full">
              <img src={Profile} alt="User Avatar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavLog;
