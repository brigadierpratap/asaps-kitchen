import React, { useState } from "react";
import AuthModal from "./AuthModal";

import {
  Button,
  Email,
  Footer,
  FooterLink,
  Form,
  Title,
} from "./AuthModal.styles";
import cross from "../../Assets/Images/cross.svg";
import loginIcon from "../../Assets/Images/login.svg";
import googlelogo from "../../Assets/Images/google-logo.png";
import { updateUserInfoThunk } from "../../Redux/actions/ActionCreator";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
  updateUser: data => dispatch(updateUserInfoThunk(data)),
});
function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setloading] = useState(false);
  const backdrop = () => {
    props.setSignUpModal(false);
  };
  const handleChange = e => {
    setError("");
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "confPassword") {
      setConfPassword(e.target.value);
    }
  };
  const handleSignup = async e => {
    const obj = { name: name, email: email, password: password };
    if (loading) return;
    setloading(true);
    await fetch(process.env.REACT_APP_API_URL + "register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then(res => res.json())
      .then(data => {
        setloading(false);
        if (data.status === 1) {
          //set redux state
          props.setLoginModal(true);
          props.setSignUpModal(false);
          props.setIsLoggedIn(true);
        } else throw new Error(data.message);
      })
      .catch(err => {
        setloading(false);
        setError(err.message);
        console.log(err.message);
      });
  };
  return (
    <AuthModal backdrop={backdrop}>
      <Title>
        Sign Up <img src={cross} alt="cross" onClick={backdrop} />
      </Title>
      <Form>
        <Email
          type="text"
          placeholder="Full Name"
          name="name"
          onChange={handleChange}
          value={name}
        />
        <Email
          value={email}
          type="email"
          placeholder="Email Id"
          name="email"
          onChange={handleChange}
        />
        <Email
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={password}
        />
        <Email
          type="password"
          placeholder="Confirm Password"
          name="confPassword"
          onChange={handleChange}
          value={confPassword}
        />
        <span style={{ color: "red", fontSize: "0.8em" }}>{error}</span>
        <Button color="#81C784" onClick={handleSignup} disabled={loading}>
          <img src={loginIcon} alt="login" />
          Sign Up
        </Button>
        <Button color="white" border onClick={e => {}}>
          <img src={googlelogo} alt="login" />
          Continue with Google
        </Button>
        <Footer>
          Already have an account? &nbsp;
          <FooterLink
            onClick={e => {
              props.setLoginModal(true);
              backdrop();
            }}
          >
            Log In
          </FooterLink>
        </Footer>
      </Form>
    </AuthModal>
  );
}

export default withRouter(connect(null, mapDispatchToProps)(Signup));
