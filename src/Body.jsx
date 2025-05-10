import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"
import Login from "./Login"
const Body = () => {
  return (
    <>
      <NavBar/>
      <div className="flex justify-center min-h-screen">
      <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default Body
