import { Outlet, useLocation } from "react-router-dom";
import Fotter from "../Shared/Fotter";
import Header from "../Shared/Header";

const Main = () => {
    const location = useLocation();
   console.log(location);
   const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');


    return (
        <div>
           {noHeaderFooter || <Header/>}
            <Outlet/>
            {noHeaderFooter|| <Fotter/>}
        </div>
    );
};

export default Main;