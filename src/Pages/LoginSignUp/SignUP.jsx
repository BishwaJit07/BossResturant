import loginImg from "../../assets/others/authentication1.png";

("react");

// import { useContext } from 'react';
// import { AuthContext } from '../../Provider/Authprovider';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/Authprovider";
import { useContext } from "react";
import Swal from "sweetalert2";

const SignUP = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const {createUser,updateUser}= useContext(AuthContext)

  const onSubmit = (data) => {
   createUser(data.email, data.pass, )
   .then(result=>{
    const loggedUser = result.user;
    console.log(loggedUser);
    updateUser(data.name,data.photoURL)
    .then(()=>{
               console.log('user profile updated');
               reset();
                
               Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
              );

              navigate('/');
      })
    .catch((error)=> console.log(error))
   })
  };

   

  // const handleCreateUser = event =>{
  //     event.preventDefault();
  //     const from = event.target;
  //     const name = from.name.value;
  //     const email = from.email.value;
  //     const pass = from.pass.value;
  //     console.log(email,pass,name);

  //     createUser(email,pass)
  //     .then( result=>{
  //       const user = result.user;
  //       console.log(user);
  //     })

  // }

  return (
    <>
    
    <Helmet> <title>BossResturant | SignUP</title></Helmet>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <h2 className="text-2xl font-semibold ">Please Sign Up</h2>
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                {...register("name", { required: true })}
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="form-control">
              
              <label className="label">
                <span className="label-text">PHoto link </span>
              </label>
              <input
                type="text"
                placeholder="photoUrl"
                name="name"
                {...register("photoUrl", { required: true })}
                className="input input-bordered"
              />
              {errors.photoUrl && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                {...register("email", { required: true })}
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="pass"
                {...register("pass", {
                  required: true,
                  minLength: 6,
                  maxLength: 16,
                  pattern: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                })}
                className="input input-bordered"
              />
              {errors.pass?.type === "required" && (
                <p className="text-red-600">First name is required</p>
              )}
              {errors.pass?.type === "minLength" && (
                <p className="text-red-600">Minimum 6 character required</p>
              )}
              {errors.pass?.type === "maxLength" && (
                <p className="text-red-600">
                  maximum character should be under 20
                </p>
              )}
              {errors.pass?.type === "pattern" && (
                <p className="text-red-600">
                  Password must contain A-Za-z +$/i
                </p>
              )}
              <label className="label">
                <Link to="/login" className="label-text-alt link link-hover">
                  Already have a account? Login
                </Link>
              </label>
            </div>

            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="SignUP" />
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

export default SignUP;
