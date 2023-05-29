import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import MenuItems from "../../Shared/MenuItems";

const MenuCategory = ({items,title}) => {
   
<Helmet><title>`Boss Restro | ${title}`</title></Helmet>
    return (
        <div>
           
           <div className='grid md:grid-cols-2 gap-4 my-4'>
                  {
                   items.map(item=> <MenuItems key={item._id} item={item}/>)
                  }

            </div>
                   <Link to={`/order/${title}`} > <button className="btn btn-outline border-0 border-b-4 m-4 ">
                   ORDER YOUR FAVOURITE FOOD</button></Link>
            
        </div>
    );
};

export default MenuCategory;