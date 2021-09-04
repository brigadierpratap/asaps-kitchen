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
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { updateUserInfoThunk } from "../../Redux/actions/ActionCreator";

const mapDispatchToProps = dispatch => ({
  updateUser: data => dispatch(updateUserInfoThunk(data)),
});

function Login(props) {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");
  const backdrop = () => {
    props.setLoginModal(false);
  };
  const handleChange = event => {
    seterror("");
    if (event.target.name === "email") {
      setEmail(event.target.value);
      var regexp =
        /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (regexp.test(event.target.value)) {
        setValidEmail(true);
      } else setValidEmail(false);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };
  const handleSignIn = async e => {
    if (loading) return;
    setloading(true);
    await fetch(process.env.REACT_APP_API_URL + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then(res => res.json())
      .then(data => {
        setloading(false);
        if (data.status === 1) {
          localStorage.setItem("jwt", data.message);
          props.updateUser(data.user);
          props.history.push("/home");
          props.setLoginModal(false);
          props.setIsLoggedIn(true);
        }
        if (data.status === -1) throw new Error(data.message);
      })
      .catch(err => {
        seterror(err.message);
        setloading(false);
        console.log(err);
      });
  };
  return (
    <AuthModal backdrop={backdrop}>
      <Title>
        Log In <img src={cross} alt="cross" onClick={backdrop} />
      </Title>
      <Form>
        <Email
          type="email"
          value={email}
          placeholder="Email Id"
          valid={validEmail}
          onChange={handleChange}
          name="email"
          email={true}
        />
        <Email
          type="password"
          value={password}
          onChange={handleChange}
          name="password"
          placeholder="Password"
        />
        <span style={{ color: "red", fontSize: "0.8em" }}>{error}</span>

        <Button color="#81C784" onClick={handleSignIn}>
          <img src={loginIcon} alt="login" />
          Log In
        </Button>
        <Button color="white" border onClick={e => {}}>
          <img src={googlelogo} alt="login" />
          Continue with Google
        </Button>
        <Footer>
          New here? &nbsp;
          <FooterLink
            onClick={e => {
              props.setSignUpModal(true);
              backdrop();
            }}
          >
            {" "}
            Create account
          </FooterLink>
        </Footer>
      </Form>
    </AuthModal>
  );
}

export default withRouter(connect(null, mapDispatchToProps)(Login));
