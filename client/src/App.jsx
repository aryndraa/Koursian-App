import { Routes,Route } from "react-router-dom"
import Landing from "./Page/Landing/landing"
import Login from "./Page/Login/Login"
import Register from "./Page/Register/Register"
import Dashboard from "./Page/Dashboard/Dashboard"
import Browse from "./Page/Browse/Browse"
import Bootcamp from "./Page/Mybootcamp/Bootcamp"
import Mentor from "./Page/Mentor/Mentor"
import Question from "./Page/Question/Question"

function App() {
  return (
   <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Register" element={<Register />} />
    <Route path="/Dashboard" element={<Dashboard />} />
    <Route path="/Browse" element={<Browse/>} />
    <Route path="/Bootcamp" element={<Bootcamp />} />
    <Route path="/Mentor" element={<Mentor/>} />
    <Route path="/Question" element={<Question/>} />
   </Routes>
  )
}

export default App
