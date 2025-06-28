import { Outlet } from "react-router-dom"
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <div className="wrap">
      <Navbar/>
      <Outlet />
    </div>
  )
}

export default Dashboard;