import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";

const useAdmin=()=>{
     const {user}= useContext(AuthContext);
     console.log(user);
     const token = localStorage.getItem('access-token')
     const {  data: isAdmin ,isLoading:isAdminLoading  } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`,{headers:{
                authorization:`bearer ${token}`
            }})
            return res.json();
        },
    })
    return [isAdmin,isAdminLoading]
}

export default useAdmin;