import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { updateUserData } from '../services/userSer';
function NavBar(props) {
  let [showMobileNav, setShowMobileNav] = useState(false);
  let history = useHistory();

  const logOut = () => {
    localStorage.removeItem("tok");
    updateUserData();
    toast.info("Logged Out");
    history.push("/login")
  }

  return (
    <div className="row align-items-center">
      <div className="logo col-lg-3 d-flex justify-content-between align-items-center">
        <h2 className="text-danger"><i class="fa fa-id-card" aria-hidden="true"></i> Your Business App</h2>
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
        {!localStorage["tok"] ?
          <React.Fragment>
            <NavLink activeClassName="active" to="/login">Log in</NavLink>
            <NavLink activeClassName="active" to="/signup">Sign up</NavLink>
          </React.Fragment>
          :
          <React.Fragment>
            <NavLink activeClassName="active" to="/userInfo" >User Info</NavLink>
            <NavLink activeClassName="active" to="/favoriteCards" >My Favorites</NavLink>
            <a onClick={logOut} role="button">Log out</a>
          </React.Fragment>
        }
      </nav>
    </div>
  )
}

export default NavBar
