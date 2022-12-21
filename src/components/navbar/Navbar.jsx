import { Link } from "react-router-dom"
import "./navbar.css"
const Navbar = () => {
  return (
<div className="navbar">
      <div className="navContainer">
        <div className="logo">
          <Link to='/'>
          <h2>HOTEL BOOKINGG</h2>
          </Link>
          
        </div>
        <div className="navItems">
          <button className="btn1">Register</button>
          <button className="btn2">Login</button>
        </div>
      </div>
    </div>  )
}

export default Navbar