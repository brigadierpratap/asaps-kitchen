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

function App() {
  const [loginModal, setLoginModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <AppContainer>
        {loginModal && (
          <Login
            setLoginModal={setLoginModal}
            setSignUpModal={setSignUpModal}
          />
        )}
        {signUpModal && (
          <Signup
            setSignUpModal={setSignUpModal}
            setLoginModal={setLoginModal}
          />
        )}

        <Switch>
          <Route exact path="/">
            <Home
              setSignUpModal={setSignUpModal}
              setLoginModal={setLoginModal}
            />
          </Route>
          <Route exact path="/home">
            <Navbar
              setLoginModal={setLoginModal}
              setSignUpModal={setSignUpModal}
            />
            <Home2 />
          </Route>
          <Route exact path="/search">
            <Navbar
              setLoginModal={setLoginModal}
              setSignUpModal={setSignUpModal}
            />
            <Search />
          </Route>

          <Redirect to="/" />
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
export default App;
