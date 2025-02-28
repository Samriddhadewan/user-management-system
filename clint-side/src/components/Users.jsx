import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const CurrentUsers = useLoaderData();
  const [users, setUsers] = useState(CurrentUsers);

  const handleDeleteUser = (id) => {
    console.log(id);

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
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 1) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            const FilteredUsers = users.filter((user) => user._id !== id);
            setUsers(FilteredUsers);
          });
      }
    });
  };

  return (
    <div className=" mt-20">
      <div>
        <Link className="" to="/newUser">
          <button className="flex text-blue-600 text-xl btn items-center gap-1  mb-7">
            NewUser <FaRegUser />
          </button>
        </Link>

        <div className="">
          <div className="overflow-x-auto">
            <table className="table text-center">
              {/* head */}
              <thead className="bg-[#2B1B42]  text-white">
                <tr className="">
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {users.map((user, idx) => (
                  <>
                    <tr key={user._id}>
                      <th>{idx + 1}</th>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.status}</td>
                      <td>
                        <div className="flex gap-2">
                          <button className="btn">E</button>
                          <button
                            onClick={() => handleDeleteUser(user._id)}
                            className="btn"
                          >
                            X
                          </button>
                        </div>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
