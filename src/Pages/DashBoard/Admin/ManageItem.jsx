import { BsTrash3 } from "react-icons/bs";
import Swal from "sweetalert2";
import useMenu from "../../../Hooks/useMenu";
import SecTitle from "../../Home/SecTitle";
import { BiCalendarEdit } from "react-icons/bi";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageItem = () => {
  const [menu, , refetch] = useMenu();
  console.log(menu);

  const [axiosSecure] = useAxiosSecure();

 



  const handleDelete = item => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //   fetch(`http://localhost:5000/menu/${item._id}`,   {
        //       method: 'DELETE'
        //   })

        //       .then(res => res.json())
        //       .then(data => {
        //           if (data.deletedCount > 0) {
        //               refetch();
        //               Swal.fire(
        //                   'Deleted!',
        //                   'Your file has been deleted.',
        //                   'success'
        //               )

        //           }
        //       })
       
          

        axiosSecure.delete(`/menu/${item._id}`)
        .then(res => {
            console.log('deleted res', res.data);
            if (res.data.deletedCount > 0) {
                refetch();
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
          }
         
        });



      }
    });
  };
  return (
    <div>
      <SecTitle heading="Hurry Up" subHeading="Manage Item"></SecTitle>

      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Img</th>
            <th>Item name</th>
            <th>price</th>

            <th>Action</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {
            menu.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="font-bold">{item.name}</p>
                </td>
                <td>${item._id}</td>

                <td className="btn  bg-[#D1A054] rounded-xl text-white text-2xl ">
                  <BiCalendarEdit />
                </td>

                <th>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn  bg-[#B91C1C] rounded-xl text-white text-2xl "
                  >
                    <BsTrash3 />
                  </button>
                </th>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageItem;
