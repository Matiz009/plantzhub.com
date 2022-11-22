import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Products from "./components/Products";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import NotFound from "./components/NotFound";
import Forgot from "./components/Forgot";
import Purchase from "./components/Purchase";
import AdminLogin from "./components/AdminLogin";
import AdminSignUp from "./components/AdminSignUp";
import AdminRecover from "./components/AdminRecover";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/LandingPage" element={<LandingPage />} />{" "}
          <Route exact path="/Products" element={<Products />} />{" "}
          <Route exact path="/ContactUs" element={<ContactUs />} />{" "}
          <Route exact path="/Login" element={<Login />} />{" "}
          <Route exact path="/AdminLogin" element={<AdminLogin />} />{" "}
          <Route exact path="/AdminSignUp" element={<AdminSignUp />} />{" "}
          <Route exact path="/AdminRecover" element={<AdminRecover />} />{" "}
          <Route exact path="/SignUp" element={<SignUp />} />{" "}
          <Route exact path="/Forgot" element={<Forgot />} />{" "}
          <Route exact path="/Purchase" element={<Purchase />} />{" "}
          <Route path="/*" element={<NotFound />} />{" "}
        </Routes>{" "}
      </div>{" "}
    </Router>
  );
}

export default App;