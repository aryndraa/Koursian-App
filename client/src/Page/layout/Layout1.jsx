import SideBar from "../../components/Sidebar";
import NavLog from "../../components/NavLog";

const Layout1 = ({ children }) => {
  return (
    <div className="h-screen">
      <div className=" flex">
      <SideBar />
      <div className="flex flex-col flex-1">
        <NavLog />
        <div className="p-6">
            {children || "Content utama"}
            </div>
      </div>
      </div>
    </div>
  );
};

export default Layout1;