import loginImg from '../../assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { useEffect } from 'react';
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/Authprovider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';


const Login = () => {
    const navigate= useNavigate();
    const location = useLocation();
      
    const from = location.state?.from?.pathname || '/'

  const [disabled, setDisabled] = useState(true);

  const {signIn} = useContext(AuthContext);

  useEffect(()=>{
    loadCaptchaEnginge(6);
  },[])

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.pass.value;
        console.log(email,password);
        
        signIn(email,password)
        .then( result=>{
          const user = result.user;
          console.log(user);
          Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )

          navigate(from,{replace:true});
        })

    }

    const handleValidateCaptcha = (event)=>{
    const user_captcha_value = event.target.value;
    console.log(validateCaptcha(user_captcha_value));
    if (validateCaptcha(user_captcha_value)==true) {
     setDisabled(false)
  }

    } 
    return (
      <>
      
      <Helmet> <title>BossResturant | Login</title></Helmet>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
         
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
              <h2 className='text-2xl font-semibold '>Please LOGIN</h2>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" 
                name='email'
                className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" 
                name='pass'
                className="input input-bordered" />
              
              </div>

              <div className="form-control flex justify-center items-center">
                <label className="label">
                
                <LoadCanvasTemplate />
         
                </label>

               <div className='flex'> <input type="text" placeholder="type captcha" onBlur={handleValidateCaptcha}
                className="input input-bordered" />
                <label className="label">
                <button  className="btn btn-ghost text-2xl"><AiOutlineCheckCircle/></button>
                </label></div>
              </div>
              <div className="form-control mt-6">
                   
                  {/* to do: make disable value disabled */}

                <input disabled={false} className="btn btn-primary" type="submit" value="Login" />
                <label className="label">
                  <Link to="/signup" className="label-text-alt link link-hover">Don't Have Account? SignUp</Link>
                </label>
              </div>
            </form>
          </div>

          <div className="text-center lg:text-left">
            <img src={loginImg} alt="" />
          </div>
        </div>
      </div>

      </>
    );
};

export default Login;