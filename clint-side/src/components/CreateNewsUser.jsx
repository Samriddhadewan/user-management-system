import { useState } from "react";

const CreateNewsUser = () => {
  const [gender, setGender] = useState("male");
  const [status, setStatus] = useState("active");
  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password,  gender, status)
};

  return (
    <div className="flex justify-center items-center mt-20">
      <div className="card bg-base-100 w-full p-8 max-w-xl shrink-0 shadow-2xl">
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-2">New User</h1>
          <p className="text-gray-400">
            User thew Bellow Form to create a new Account
          </p>
        </div>
        <form onSubmit={handleCreateUser} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>{" "}
            <br />
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>{" "}
            <br />
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="mt-3">
            <div className="flex gap-7">
              <label className="label">Gender</label>
              <label className="flex text-gray-600 items-center gap-1">
                <input
                  type="radio"
                  name="gender"
                  className="radio text-black"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e)=> setGender(e.target.value)}
                />
                Male
              </label>
              <label className="flex text-gray-600 gap-1">
                <input
                  type="radio"
                  name="gender"
                  className="radio text-black"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e)=> setGender(e.target.value)}
                />
                Female
              </label>
            </div>
          </div>

          <div className="mt-3">
            <div className="flex gap-7">
              <label className="label">Active</label>
              <label className="flex text-gray-600 items-center gap-1">
                <input
                  type="radio"
                  name="status"
                  className="radio text-black"
                  value="active"
                  checked={status === "active"}
                  onChange={(e)=> setStatus(e.target.value)}
                />
                Active
              </label>
              <label className="flex text-gray-600 gap-1">
                <input
                  type="radio"
                  name="status"
                  className="radio text-black"
                  value="inactive"
                  checked={status === "inactive"}
                  onChange={(e)=> setStatus(e.target.value)}
                />
                Inactive
              </label>
            </div>
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-emerald-400 w-full">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNewsUser;
