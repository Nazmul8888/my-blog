import { Outlet } from "react-router-dom";
import Navbar from "../Page/Navbar/Navbar";


const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;