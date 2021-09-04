import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import styled from "styled-components";
import Login from "./Components/AuthModal/Login";
import Signup from "./Components/AuthModal/Signup";
import Home from "./Components/Home/Home";
import Home2 from "./Components/Home/Home2";
import Navbar from "./Components/Navbar/Navbar";
import Search from "./Components/Search/Search";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  fetchUserInfo,
  updateUserInfoThunk,
} from "./Redux/actions/ActionCreator";
import { connect } from "react-redux";

AOS.init();
const mapDispatchToProps = dispatch => ({
  updateUser: data => dispatch(updateUserInfoThunk(data)),
  getUser: () => dispatch(fetchUserInfo()),
});
function App(props) {
  const [loginModal, setLoginModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("jwt") ? true : false
  );
  const logOut = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    window.location.reload(true);
  };
  useEffect(() => {
    props.getUser();
  }, []);

  return (
    <Router>
      <AppContainer>
        {loginModal && !isLoggedIn && (
          <Login
            setLoginModal={setLoginModal}
            setSignUpModal={setSignUpModal}
            setIsLoggedIn={setIsLoggedIn}
          />
        )}
        {signUpModal && !isLoggedIn && (
          <Signup
            setSignUpModal={setSignUpModal}
            setLoginModal={setLoginModal}
            setIsLoggedIn={setIsLoggedIn}
          />
        )}

        <Switch>
          {!isLoggedIn && (
            <Route exact path="/">
              <Home
                setSignUpModal={setSignUpModal}
                setLoginModal={setLoginModal}
                setIsLoggedIn={setIsLoggedIn}
                isLoggedIn={isLoggedIn}
              />
            </Route>
          )}
          <Route exact path="/home">
            <Navbar
              setLoginModal={setLoginModal}
              setSignUpModal={setSignUpModal}
              setIsLoggedIn={setIsLoggedIn}
              isLoggedIn={isLoggedIn}
              logOut={logOut}
            />
            <Home2 setIsLoggedIn={setIsLoggedIn} />
          </Route>
          <Route exact path="/search">
            <Navbar
              logOut={logOut}
              setLoginModal={setLoginModal}
              setSignUpModal={setSignUpModal}
              setIsLoggedIn={setIsLoggedIn}
              isLoggedIn={isLoggedIn}
            />
            <Search setIsLoggedIn={setIsLoggedIn} />
          </Route>

          <Redirect to="/home" />
        </Switch>
      </AppContainer>
    </Router>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export default connect(null, mapDispatchToProps)(App);
