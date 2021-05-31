import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
function NavBar(props) {
  let [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(()=>{

  },[])

  return (
    <div className="row align-items-center">
      <div className="logo col-lg-3 d-flex justify-content-between align-items-center">
        <h2 className="text-danger">Cards project</h2>
        <div className="burger" onClick={() => {
          setShowMobileNav(!showMobileNav);
        }}>
          <i className="fa fa-bars fs-2" aria-hidden="true"></i>
        </div>
      </div>
      {/* style -> with condition */}
      <nav onClick={() => {
        setShowMobileNav(false);
      }} className="col-lg-9 text-end" style={{ display: showMobileNav && "block" }}>
        <NavLink activeClassName="active" exact={true} to="">Home</NavLink>
        <NavLink activeClassName="active" to="/about">about</NavLink>
        <NavLink activeClassName="active" to="/login">Login</NavLink>
        <NavLink activeClassName="active" to="/signup">Signup</NavLink>
      </nav>
    </div>
  )
}

export default NavBar
