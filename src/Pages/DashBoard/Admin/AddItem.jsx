
import SecTitle from '../../Home/SecTitle';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const img_HostingToken= import.meta.env.VITE_Img_Upload_token;


const AddItem = () => {

  const [axiosSecure]= useAxiosSecure();
   
  const img_hosting_url =`https://api.imgbb.com/1/upload?key=${img_HostingToken}`

    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const onSubmit = data =>
     {
        
       const fromData = new FormData();
       fromData.append('image',data.image[0])

       fetch(img_hosting_url,{
        method: 'POST',
        body: fromData
       })
       .then(res=> res.json())
       .then(imgResponse=>{
        if(imgResponse.success){
            const imgURL = imgResponse.data.display_url;
            const {name,price,category,recipe} = data;
            const newItem = {name,price:parseFloat(price),category,recipe, image:imgURL}
            console.log(newItem);
            axiosSecure.post('/menu',newItem)
            .then(data=>{
              console.log('after posting new item', data.data);
              if(data.data.insertedId){
                reset(),
                Swal.fire(
                  'Good job!',
                  'Item Addeded!',
                  'success'
                )
              }
            })
        }
        console.log(imgResponse);
       })
    };

    return (
        <div>
           <SecTitle subHeading=' UPDATE ITEM ' heading='Whats New?' ></SecTitle>

           
<form   onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center py-4 bg-[#F3F3F3] mx-20'>

<div>
<label className="label">Recipe name*
</label>
<input type="text" placeholder="Recipe name" className="input input-bordered  w-96" {...register("name", {required: true, maxLength: 80})}/>
</div>

<div className=' flex justify-center items-center p-4'>
<div className="form-control w-40 max-w-xs">
  <label className="label">
    <span className="label-text">Category</span>
    
  </label>
  <select defaultValue={"Pick One"} className="select select-bordered" {...register("category", { required: true })}>
    <option disabled >Pick One</option>
    <option>Salads</option>
    <option>Pizza</option>
    <option>Soups</option>
    <option>Desserts</option>
    <option>Drinks</option>
    <option>Others</option>
  </select>
 
</div>

<div>
<label className='label'>Price*</label>
<input type="text" placeholder="Price" className="input input-bordered input-md w-40 max-w-xs mx-4" {...register("price", {required: true})}/>
</div>

</div>

<div className="form-control pb-4">
  <label className="label">
    <span className="label-text">Recipe Details*</span>
    
  </label>
  <textarea {...register("recipe", {required: true})} className="textarea textarea-bordered  w-96" placeholder="Recipe Details"></textarea>
  
</div>
<input type="file" className="file-input file-input-bordered w-full max-w-xs" {...register("image", {required: true})}/>

<input type="submit"   className="btn my-4"/>
</form>
        </div>
    );
};

export default AddItem;