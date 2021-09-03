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

function Login(props) {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [password, setPassword] = useState("");
  const backdrop = () => {
    props.setLoginModal(false);
  };
  const handleChange = event => {
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
  const handleSignIn = () => {};
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
        <Button color="#81C784" onClick={handleSignIn}>
          <img src={loginIcon} alt="login" />
          Log In
        </Button>
        <Button color="white" border>
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

export default Login;
