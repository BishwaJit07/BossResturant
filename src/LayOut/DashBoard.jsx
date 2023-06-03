import { NavLink, Outlet } from "react-router-dom";
import {
  BsCart4,
  BsFillWalletFill,
  BsHouseFill,
  BsListUl,
} from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { GiForkKnifeSpoon, GiHomeGarage } from "react-icons/gi";
import { BsJournalBookmark } from "react-icons/bs";
import { FiHome, FiMail, FiMenu, FiShoppingBag, FiUsers } from "react-icons/fi";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const DashBoard = () => {
  const [cart] = useCart();

  // const isAdmin = (true);
  const [isAdmin] = useAdmin();

  console.log(isAdmin);
  return (
    <div className="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-2">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          <FiMenu />
        </label>
        <Outlet />
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul
          className="menu p-4 w-80 bg-[#D1A054] text-black text-xl"
          id="sidebar"
        >
          {/* <!-- Sidebar content here --> */}

          {isAdmin?.admin ? 
            <>
              <li>
                <NavLink to="/dashboard/adminhome">
                  <GiHomeGarage />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/additem">
                  <GiForkKnifeSpoon />
                  Add Item
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageitem">
                  <BsListUl />
                  Manage Item
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <BsJournalBookmark />
                  Manage bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FiUsers />
                  All users
                </NavLink>
              </li>
            </>
           : 
            <>
              <li>
                <NavLink to="/dashboard/userhome">
                  <BsHouseFill />
                  Users Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payhistory">
                  <BsFillWalletFill />
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reviews">
                  <MdReviews />
                  Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaCalendarAlt />
                  My Bookings
                </NavLink>
              </li>
              <li>
                {" "}
                <div className="t-0 absolute left-3">
                  <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                    +{cart?.length || 0}
                  </p>
                </div>
                <NavLink to="/dashboard/mycart">
                  <BsCart4 />
                  My Cart{" "}
                </NavLink>
              </li>
            </>
          }

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FiHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FiMenu />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FiShoppingBag />
              Order
            </NavLink>
          </li>
          <li>
            <NavLink>
              <FiMail />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
