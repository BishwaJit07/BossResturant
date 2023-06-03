import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { BsTrash3 } from 'react-icons/bs';
import { MdOutlineAdminPanelSettings, MdSupervisorAccount } from "react-icons/md";
import Swal from 'sweetalert2';

const AllUsers = () => {
  const token = localStorage.getItem('access-token')
  
    const {data: users=[],refetch} = useQuery(['users'],async()=>{
        const res = await fetch ('http://localhost:5000/users',{headers:{
          authorization:`bearer ${token}`
      }})
        return res.json();
    })

    const handleMakeAdmin = user =>{
         fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method: 'PATCH',
         })
         .then (res=>res.json())
         .then (data=>{ console.log(data)
           if(data.modifiedCount){
            refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is updated to Admin`,
                showConfirmButton: false,
                timer: 1500
              })
           }   
        })
    }

    const handleDeleteUser= user =>{
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
            fetch(`http://localhost:5000/users/${user._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'User has been deleted.',
                            'success'
                        )
                    }
                })
        }
    })
    }

    return (
        <div>
            <Helmet><title>Boss Restro | AllUsers</title></Helmet>
            {users.length}
            <table className="table w-full">
          {/* head */}
          <thead >
            <tr >
              <th >
               
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
             
              <th>Action</th>
            </tr>
          </thead>
          <tbody> 
            {/* row 1 */}
            {Array.isArray(users) &&users.map((user,index)=> <tr key={user._id}>
              <th>
              {index+1}
             
              </th>
              
              <td>
                    <p className="font-bold">  {user.name}</p>   
                 
              </td>
             
              <td>{user.email}</td>
              <td >{user.role === 'admin'? <MdOutlineAdminPanelSettings className='bg-orange-600 text-2xl rounded text-white'/>: <button onClick={()=>handleMakeAdmin(user)} className='btn btn-ghost'> <MdSupervisorAccount className='bg-orange-600 text-2xl rounded text-white'/></button>}  </td>
              <th>
                <button onClick={()=> handleDeleteUser(user)} className="btn  bg-[#B91C1C] rounded-xl text-white text-2xl "><BsTrash3/></button>
              </th>
            </tr>)}
            
          
          </tbody>
          
          
        </table>
        </div>
    );
};

export default AllUsers;