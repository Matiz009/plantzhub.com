import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Products from "./components/Products";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import NotFound from "./components/NotFound";
import Forgot from "./components/Forgot";
import LandingMenu from "./components/LandingMenu";
import Purchase from "./components/Purchase";
import AdminLogin from "./components/AdminLogin";
import AdminSignUp from "./components/AdminSignUp";
import AdminRecover from "./components/AdminRecover";
import Dashboard from "./components/Dashboard";
import AddPlants from "./components/AddPlants";
import DeletePlants from "./components/DeletePlants";
import UpdatePlants from "./components/UpdatePlants";
import ViewPlants from "./components/ViewPlants";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/LandingPage" element={<LandingPage />} />{" "}
          <Route path="/Products" element={<Products />} />{" "}
          <Route path="/ContactUs" element={<ContactUs />} />{" "}
          <Route path="/Login" element={<Login />} />{" "}
          <Route path="/AdminLogin" element={<AdminLogin />} />{" "}
          <Route path="/AdminSignUp" element={<AdminSignUp />} />{" "}
          <Route path="/AdminRecover" element={<AdminRecover />} />{" "}
          <Route path="/Projects" element={<Projects />} />
          <Route path="/About" element={<About />} />
          <Route path="/LandingMenu" element={<LandingMenu />} />
          <Route path="/SignUp" element={<SignUp />} />{" "}
          <Route path="/Forgot" element={<Forgot />} />{" "}
          <Route path="/Purchase" element={<Purchase />} />{" "}
          <Route path="/Dashboard" element={<Dashboard />} />{" "}
          <Route path="/AddPlants" element={<AddPlants />} />
          <Route path="/DeletePlants" element={<DeletePlants />} />
          <Route path="/UpdatePlants" element={<UpdatePlants />} />
          <Route path="/ViewPlants" element={<ViewPlants />} />
          <Route path="/*" element={<NotFound />} />{" "}
        </Routes>{" "}
      </div>{" "}
    </Router>
  );
}

export default App;