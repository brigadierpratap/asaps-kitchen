import React from "react";
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

function Signup(props) {
  const backdrop = () => {
    props.setSignUpModal(false);
  };
  return (
    <AuthModal backdrop={backdrop}>
      <Title>
        Sign Up <img src={cross} alt="cross" onClick={backdrop} />
      </Title>
      <Form>
        <Email type="text" placeholder="Full Name" />
        <Email type="email" placeholder="Email Id" />
        <Email type="password" placeholder="Password" />
        <Email type="password" placeholder="Confirm Password" />
        <Button color="#81C784" onClick={e => {}}>
          <img src={loginIcon} alt="login" />
          Sign Up
        </Button>
        <Button color="white" border>
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

export default Signup;
