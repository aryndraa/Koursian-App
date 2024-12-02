import { Routes, Route } from "react-router-dom";
import Landing from "./Page/Landing/landing";
import Login from "./Page/Login/Login";
import Register from "./Page/Register/Register";
import Dashboard from "./Page/Dashboard/Dashboard";
import Browse from "./Page/Browse/Browse";
import Bootcamp from "./Page/Mybootcamp/Bootcamp";
import Mentor from "./Page/Mentor/Mentor";
import Question from "./Page/Question/Question";

import SideBar from "./components/Sidebar";
import NavLog from "./components/NavLog";
import Layout1 from "./Page/layout/Layout1";

function App() {
  return (
    <Routes>
      {/* #1  */}
      <Route path="/" element={<Landing />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      {/* #2  */}
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Browse" element={<Browse />} />
      <Route path="/Bootcamp" element={<Bootcamp />} />
      <Route path="/Mentor" element={<Mentor />} />
      <Route path="/Question" element={<Question />} />
      {/* tes */}
      <Route path="/sideBar" element={<SideBar />} />
      <Route path="/Layout1" element={<Layout1 />} />
      <Route path="/navloged" element={<NavLog />} />
    </Routes>
  );
}

export default App;
