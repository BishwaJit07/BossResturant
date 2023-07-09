import {  useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../Provider/Authprovider";


const AdminHome = () => {
    const {user}= useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const {data: stats = {}} = useQuery({
          queryKey:['admin-status'],
          queryFn : async()=>{
            const res = await axiosSecure('/admin-status')
            return res.data;
          }

    })
    return (
       <div className="flex flex-col justify-center items-center">
           <h2 className="text-3xl font-semibold">Hi, Welcome Back <span className="text-red-600">{user.displayName}</span>!</h2>

           <div className="stats shadow">
  
  <div className="stat place-items-center">
    <div className="stat-title">Reveneu</div>
    <div className="stat-value">${stats.reveneu}</div>
   
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Customers</div>
    <div className="stat-value text-secondary">{stats.users}</div>
    
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Products</div>
    <div className="stat-value">{stats.products}</div>
    
  </div>

  <div className="stat place-items-center">
    <div className="stat-title">Orders</div>
    <div className="stat-value text-secondary">{stats.orders}</div>
    
  </div>
  
</div>
        </div>
    );
};

export default AdminHome;