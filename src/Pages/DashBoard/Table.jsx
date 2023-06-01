
import useCart from '../../Hooks/useCart';
import { BsTrash3 } from "react-icons/bs";
import Swal from 'sweetalert2';
const Table = () => {
    const [cart,refetch]= useCart();
    console.log(cart);
    
    const handleDelete = menu => {
      Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
          if (result.isConfirmed) {
              fetch(`http://localhost:5000/carts/${menu._id}`, {
                  method: 'DELETE'
              })
                  .then(res => res.json())
                  .then(data => {
                      if (data.deletedCount > 0) {
                          refetch();
                          Swal.fire(
                              'Deleted!',
                              'Your file has been deleted.',
                              'success'
                          )
                      }
                  })
          }
      })
  }
    return (
        <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead >
            <tr >
              <th >
               
              </th>
              <th>Img</th>
              <th>Item name</th>
              <th>price</th>
             
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {Array.isArray(cart) &&cart.map((menu,index)=> <tr key={menu._id}>
              <th>
              {index+1}
             
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={menu.image} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  
                </div>
              </td>
              <td>
              
                    <p className="font-bold">{menu.name}</p>
                    
                 
              </td>
              <td>${menu.price}</td>
              <th>
                <button onClick={()=> handleDelete(menu)} className="btn  bg-[#B91C1C] rounded-xl text-white text-2xl "><BsTrash3/></button>
              </th>
            </tr>)}
            
          
          </tbody>
          
          
        </table>
      </div>
    );
};

export default Table;