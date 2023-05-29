
const MenuItems = ({item}) => {

    const {image,price,recipe,name} = item;

    return (
      <div className="flex space-x-5 ">
       <img  style={{borderRadius: '0 200px 200px 200px'}} src={image} alt="" className="w-28 h-24"/>
       
      <div className="flex">
       <div> <h2 className="text-gray-500  text-xl font-medium">{name} .......</h2>
       <p className="text-xs text-gray-400 ">{recipe}</p></div>

       <p className=" text-yellow-500  text-xl">${price}</p>
      </div>
   </div>
       
    );
};

export default MenuItems;