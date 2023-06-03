
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import { AuthContext } from '../Provider/Authprovider';

const AdminRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const [isAdmin,isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
       return <div className="radial-progress" style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" }}>70%</div>
    }
    if (user && isAdmin){
        return children;
        
    }
    return <Navigate to='/login' state={{from:location}} replace> </Navigate>
};

export default AdminRoute;