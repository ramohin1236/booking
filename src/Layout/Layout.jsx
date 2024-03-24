import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";


const Layout = () => {
    return (
        <div>
            <Navbar/>
                <Outlet/>
        </div>
    );
};

export default Layout;