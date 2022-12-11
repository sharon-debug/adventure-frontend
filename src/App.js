import React, {useState, useEffect} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import HousePage from "./components/HousePage/HousePage";
import Login from "./components/Login/Login";
import Signup from "./components/Signup";
import ReviewContainer from "./components/Reviews/ReviewContainer";
import Footer from "./components/Footer";
import "./index.css";
import Enroll from "./components/Enroll";


function App() {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   // auto-login
  //   fetch('/me').then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar user={user}/>

        <Switch>
        <Route path="/signup">
              <Signup onLogin={setUser}/>
            </Route>
          <Route path="/houses">
            <HousePage />
          </Route>

          <Route path="/reviews">
            <ReviewContainer />
          </Route>
          <Route path="/contactus">
            <ContactUs />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/enroll">
            <Enroll />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
