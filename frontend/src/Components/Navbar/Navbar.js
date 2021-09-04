import React, { useEffect, useState } from "react";
import DropDown from "../DropDown/DropDown";
import {
  NavAccCont,
  NavCollapse,
  NavContainer,
  NavLogin,
  NavLogo,
  NavOuterContainer,
  Search,
} from "./Navbar.styles";
import asap from "../../Assets/Images/asap2.svg";
import search from "../../Assets/Images/search.svg";
import avatar from "../../Assets/Images/avatar.png";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

function Navbar(props) {
  const [mobile, setMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [profileEx, setprofileEx] = useState(false);
  const handleDrop = e => {
    setprofileEx(false);
  };
  useEffect(() => {
    document.addEventListener("click", handleDrop);
    setMobile(window.innerWidth < 768);
    return () => {
      document.removeEventListener("click", handleDrop);
    };
  }, []);
  return (
    <NavOuterContainer>
      <NavContainer>
        <NavLogo to="/home">
          <img src={asap} alt="Logo" />
        </NavLogo>
        <DropDown />
        <NavCollapse collapse={mobile} expanded={expanded}>
          <Search to="/search">
            <img
              src={search}
              alt="search"
              style={{ width: "0.9em", marginRight: "0.4em" }}
            />
            Search
          </Search>
          {!props.isLoggedIn && (
            <>
              <NavLogin
                onClick={e => {
                  props.setLoginModal(true);
                }}
              >
                Log In
              </NavLogin>
              <NavLogin
                onClick={e => {
                  props.setSignUpModal(true);
                }}
              >
                Sign Up
              </NavLogin>
            </>
          )}
          {props.isLoggedIn && (
            <>
              <NavAccCont
                onClick={e => {
                  e.stopPropagation();
                  setprofileEx(true);
                }}
              >
                {props.userInfo.info.name} <img src={avatar} alt="avatar" />
                {profileEx && (
                  <div className="drop-cont">
                    <span className="caret"></span>
                    <Link to="/myprofile" className="drop-item">
                      Account
                    </Link>
                    <Link to="/cart" className="drop-item">
                      Cart
                    </Link>
                    <Link
                      to="/logout"
                      onClick={e => {
                        e.stopPropagation();
                        props.logOut();
                      }}
                      className="drop-item"
                    >
                      Log Out
                    </Link>
                  </div>
                )}
              </NavAccCont>
            </>
          )}
        </NavCollapse>
      </NavContainer>
    </NavOuterContainer>
  );
}
const mapStateToProps = state => ({
  userInfo: state.UserInfo,
});
export default withRouter(connect(mapStateToProps)(Navbar));
