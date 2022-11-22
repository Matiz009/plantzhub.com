import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Products from "./components/Products";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import NotFound from "./components/NotFound";
import Forgot from "./components/Forgot";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/LandingPage" element={<LandingPage />} />{" "}
          <Route exact path="/Products" element={<Products />} />{" "}
          <Route exact path="/ContactUs" element={<ContactUs />} />{" "}
          <Route exact path="/Login" element={<Login />} />{" "}
          <Route exact path="/SignUp" element={<SignUp />} />{" "}
          <Route exact path="/Forgot" element={<Forgot />} />{" "}
          <Route path="/*" element={<NotFound />} />{" "}
        </Routes>{" "}
      </div>{" "}
    </Router>
  );
}

export default App;