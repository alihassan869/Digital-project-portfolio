import './App.css';
import Home from './Components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPAge from './Components/pages/AboutPAge';
import Servicepage from './Components/pages/Servicepage';
import Loginpage from './Components/pages/Loginpage';
import Registerpage from './Components/pages/Registerpage';
import Notfound from './Components/pages/Notfound';
import notimg from './assests/images/404-Error-Page-Donut-Template.jpg';
import Forgetemail from './Components/pages/Forgetemail';
import Newppassword from './Components/pages/Newppassword';
import { useState } from 'react';
function App() {
  const [user, setuserlogin] = useState({});
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              user && user._id ? (
                <Home to="/" />
              ) : (
                <Loginpage SetuserLogin={setuserlogin} />
              )
            }
          />
          <Route
            exact
            path="/About"
            element={
              user && user._id ? (
                <AboutPAge />
              ) : (
                <Loginpage setuserlogin={setuserlogin} />
              )
            }
          />
          <Route
            exact
            path="/Service"
            element={
              user && user._id ? (
                <Servicepage />
              ) : (
                <Loginpage setuserlogin={setuserlogin} />
              )
            }
          />
          <Route
            exact
            path="/Login"
            element={<Loginpage setuserlogin={setuserlogin} />}
          />
          <Route exact path="/Register" element={<Registerpage />} />
          <Route exact path="/Forgetemail" element={<Forgetemail />} />
          <Route exact path="/NewPassword/:token" element={<Newppassword />} />
          <Route exact path="*" element={<Notfound notimg={notimg} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
