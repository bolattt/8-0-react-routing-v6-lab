import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

/*
  Components
*/
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import PetsList from "./components/pets/PetsList";

/*
  Data
  ---------------
  Note: Normally this data would be pulled from an API. It is not necessary, however, for this application.
*/
import { employeeData } from "./data/employees.js";
import { ownerData } from "./data/owners";
import { petData } from "./data/pets";

function App() {
  const [employees] = useState(employeeData);
  const [owners] = useState(ownerData);
  const [pets] = useState(petData);

  return (
    <div className="wrapper">
      <Router>
        <Nav />

        <Routes>
          <Route
            path="/"
            element={<Home employees={employees} owners={owners} pets={pets} />}
          ></Route>
          <Route
            path="/staff"
            element={<StaffList employees={employees} />}
          ></Route>
          <Route
            path="/pets"
            element={<Navigate replace to="/pets/cats" pets={pets} />}
          ></Route>
          <Route path="pets/:type" element={<PetsList pets={pets} />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
