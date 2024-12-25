import NavProfile from "../../components/Profile/NavProfile.jsx"
import SideProfile from "../../components/Profile/SideProfile.jsx"

const Layout3 = (children) => {
return(
    <div>
        <div>
            <NavProfile />
        </div>
        <div>
            <SideProfile />
        </div>
    </div>
)
}

export default Layout3