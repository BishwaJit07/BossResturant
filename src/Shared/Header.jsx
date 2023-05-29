
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/Authprovider';


const Header = () => {
  const {user,logOut} = useContext(AuthContext);

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
    
      {
        user? <> <li onClick={handleLogout} className="btn btn-active btn-link">Logout</li>
        </> :  <li><Link to='/login'>Login</Link></li>
      }  
          
        
       
    </>
    
    
    return (
 
            <div className="navbar bg-black bg-opacity-40 text-white fixed z-10 max-w-screen-xl ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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
  <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
  </div>
</div>
      
    );
};

export default Header;