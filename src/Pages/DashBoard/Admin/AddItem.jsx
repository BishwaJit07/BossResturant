
import SecTitle from '../../Home/SecTitle';
import { useForm } from 'react-hook-form';

const AddItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>
     {
        
        console.log(data)
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
  <select className="select select-bordered" {...register("category", { required: true })}>
    <option disabled selected>Pick one</option>
    <option>Salads</option>
    <option>Pizza</option>
    <option>Soups</option>
    <option>Desserts</option>
    <option>Drinks</option>
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