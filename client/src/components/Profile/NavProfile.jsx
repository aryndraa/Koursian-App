import Profile from "../../assets/image/profile.png";
import { useLocation, useNavigate } from "react-router-dom";

const NavProfile = () => {
  const location = useLocation();
  const formatPathName = location.pathname.replace("/", "");
  const navigate = useNavigate();
  return (
    <div className="navbar bg-base-100 justify-between p-3">
      <div className="">
        <p className="font-Open-sauce font-semibold text-3lg text-black pl-4">
          {formatPathName}
        </p>
      </div>

      <div className="">
        <input
          placeholder="search bootcamp, mentor, question"
          className="search-bar"
        ></input>
      </div>

        {/* Menu untuk Desktop */}
        <div className=" items-center space-x-4">
          <div className="flex flex-row items-center">
            <div className="w-8 rounded-full mr-5">
              <img
                typeof="button"
                src={Profile}
                alt="User Avatar"
                onClick={() => navigate("/Profile")}
              />
            </div>
            <a className="font-Open-sauce text-red-500 font-semibold text-2lg"
            >Log out</a>
          </div>
        </div>
      </div>
  );
};

export default NavProfile;
