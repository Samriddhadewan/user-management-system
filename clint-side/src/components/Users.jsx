import { FaRegUser } from "react-icons/fa"
import { Link, useLoaderData } from "react-router-dom"

const Users = () => {
  const users = useLoaderData();
  console.log(users)
  return (
    <div className=" mt-20">
      <div>
      <Link className="text-blue-600 font-normal text-xl" to="/newUser">
      <div className="flex items-center gap-1  mb-7">
      NewUser <FaRegUser />
      </div>
      </Link>

      <div className="">
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="bg-[#2B1B42] text-white">
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map((user, idx) => <>
        <tr key={user._id}>
        <th>{idx + 1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.status}</td>
        <td>
          <div className="flex gap-2">
            <button className="btn">E</button>
            <button className="btn">X</button>
          </div>
        </td>
      </tr>
        </>)
      }
    </tbody>
  </table>
      </div>
      </div>




    </div>
    </div>
  )
}

export default Users