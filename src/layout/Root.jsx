import { Outlet } from "react-router-dom";
import NavBar from "../components/shared/Navbar";


const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;