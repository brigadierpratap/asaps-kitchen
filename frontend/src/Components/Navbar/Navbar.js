import React from "react";
import DropDown from "../DropDown/DropDown";
import {
  NavCollapse,
  NavContainer,
  NavLogin,
  NavLogo,
  NavOuterContainer,
  Search,
} from "./Navbar.styles";
import asap from "../../Assets/Images/asap2.svg";
import search from "../../Assets/Images/search.svg";

function Navbar(props) {
  return (
    <NavOuterContainer>
      <NavContainer>
        <NavLogo to="/home">
          <img src={asap} alt="Logo" />
        </NavLogo>
        <DropDown />
        <NavCollapse>
          <Search to="/search">
            <img
              src={search}
              alt="search"
              style={{ width: "0.9em", marginRight: "0.4em" }}
            />
            Search
          </Search>
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
        </NavCollapse>
      </NavContainer>
    </NavOuterContainer>
  );
}

export default Navbar;
