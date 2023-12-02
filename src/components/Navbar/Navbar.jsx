import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

  return (
    <nav className="navbar bg-base-100 md:container mx-auto">
      <div className="navbar-start ">
        <div className="dropdown" >
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><NavLink className="mx-3 font-bold text-lg" to="/">Home</NavLink></li>
            <li><NavLink className="mx-3 font-bold text-lg" to="/donations">Donations</NavLink></li>
            <li><NavLink className="mx-3 font-bold text-lg" to="/statistics">Statistics</NavLink></li>
          </ul>
        </div>
        <Link to="/"><img className="w-40" src="https://i.ibb.co/3NCBWdw/Logo.png" alt="logo" /></Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink className="mx-3 font-bold text-lg" to="/">Home</NavLink>
          <NavLink className="mx-3 font-bold text-lg" to="/donations">Donations</NavLink>
          <NavLink className="mx-3 font-bold text-lg" to="/statistics">Statistics</NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;