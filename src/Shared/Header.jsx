
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import useCart from '../Hooks/useCart';
import { AuthContext } from '../Provider/Authprovider';


const Header = () => {
  const {user,logOut} = useContext(AuthContext);
  const [isAdmin]= useAdmin();

  const [cart]= useCart();
  const handleLogout=()=>{
    logOut()
    .then(()=>{})
    .catch(error=> console.log(error))
  }
    const navoption =
        <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/menu'>Menu</Link></li>
    <li><Link to='/order/salad'>Orders</Link></li>
    <li><Link to={isAdmin?'/dashboard/adminhome':'/dashboard/userhome'}>Orders</Link></li>
   
    <Link to='/dashboard/mycart' className="relative px-2">
  <div className="t-0 absolute left-3">
    <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">+{cart?.length||0}</p>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="file: mt-4 h-6 w-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
  </svg>
</Link>

    
      {
        user? <> <li onClick={handleLogout} className="btn btn-active btn-link">Logout</li>
        </> :  <li><Link to='/login'>Login</Link></li>
      }  
          
        
       
    </>
    
    
    return (
 
            <div className="navbar bg-black bg-opacity-40 text-gray-100 fixed z-10 max-w-screen-xl ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3  shadow bg-gray-600 rounded-box w-30 flex justify-center items-center">
           {navoption}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Restro Boss </a>
  </div>
  <div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal px-1">
{
    navoption
}

  </ul>
  </div>
  <div className="navbar-end">
  <div className="avatar">
  <div className="rounded-full ring ring-primary h-10 w-10 ring-offset-base-100 ring-offset-2">
    <img src={user?.photoURL} />
  </div>
</div>
  </div>
</div>
      
    );
};

export default Header;