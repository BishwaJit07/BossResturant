import { NavLink,  Outlet } from "react-router-dom";
import { BsCart4 ,BsListUl} from "react-icons/bs";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { BsJournalBookmark } from "react-icons/bs";
import { FiHome, FiMail, FiMenu, FiShoppingBag, FiUsers } from "react-icons/fi";
const DashBoard = () => {
  return (
    <div className="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-2">
      <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          <FiMenu/>
        </label>
        <Outlet/>
        
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-[#D1A054] text-black text-xl"  id="sidebar" >
          {/* <!-- Sidebar content here --> */}
         
       
          <li>
            <NavLink to='additem'><GiForkKnifeSpoon/>Add Item</NavLink>
          </li>
          <li>
            <NavLink to='manageitem'><BsListUl/>Manage Item</NavLink>
          </li>
          <li>
            <NavLink to='bookings'><BsJournalBookmark/>Manage bookings</NavLink>
          </li>
          <li>
            <NavLink to='allusers'><FiUsers/>All users</NavLink>
          </li>
          <li>
            <NavLink to='mycart'><BsCart4/>My Cart </NavLink>
          </li>
          <div className="divider"></div> 
          <li>
            <NavLink to='/'><FiHome/>Home</NavLink>
          </li>
          <li>
            <NavLink to='/menu'><FiMenu/>Menu</NavLink>
          </li>
          <li>
            <NavLink to='/order/salad'><FiShoppingBag/>Order</NavLink>
          </li>
          <li>
            <NavLink><FiMail/>Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
