import { Result } from "postcss";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/Authprovider";

const SocialLogin = () => {
    const navigate= useNavigate();
    const location = useLocation();
      
    const from = location.state?.from?.pathname || '/'
    

    const {googleSignIn}= useContext(AuthContext);

    const handleGLogin=()=>{
        googleSignIn()
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                       {
                            navigate(from,{replace:true});
                        }
                    })
                    
        })
    }

    return (
        <div >
             <div className="divider ">OR</div> 
            <div className="flex justify-center py-2"><button onClick={handleGLogin} className="btn btn-wide btn-outline btn-accent text-5xl "><FcGoogle /></button></div>
        </div>
    );
};

export default SocialLogin;