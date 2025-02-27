import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const Home = () => {
  return (
    <div>
      <div>
        <Navbar ></Navbar>
      </div>
      <div className="max-w-[1140px] mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Home