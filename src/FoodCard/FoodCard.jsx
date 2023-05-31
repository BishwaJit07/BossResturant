import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../Hooks/useCart";
import { AuthContext } from "../Provider/Authprovider";

const FoodCard = ({ item }) => {
  const { image, price, recipe, name,_id } = item;
  const {user} = useContext(AuthContext);
   const navigate = useNavigate();
   const location = useLocation();
   const [ , refetch]= useCart();
  const handleAddToCart = item=>{
             console.log(item);
             if(user&& user.email){
              const cartItem ={menuItemId: _id,image, price,  name, email: user.email}
                  fetch('http://localhost:5000/carts',{
                    method:'POST',
                    headers:{
                      'content-type':'application/json'
                    },
                    body: JSON.stringify(cartItem)
                  })
                  .then(res=> res.json())
                  .then(data=>{
                    if(data.insertedId){
                      refetch();
                      Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Food added to cart',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    }
                  })
             }
             else{
              Swal.fire({
                title: 'Are you sure?',
                
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Plz Login!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login',{state: {from: location}})
                }
              })
             }
  }
  return (
    <div>
      <div className="card w-96 h-96 bg-slate-200 shadow-2xl my-4">
        <figure className="px-2 pt-4">
          <img src={image} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <p className=" absolute right-9  top-9 bg-slate-900 p-2 rounded-xl text-white font-medium text-xl">
            ${price}
          </p>
          <div>
            <h2 className="card-title">{name}</h2>
            <p>{recipe}</p>
          </div>
          <div className="card-actions">
            <button onClick={()=>handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 m-4 bg-slate-300  border-yellow-600">
              Add to card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
