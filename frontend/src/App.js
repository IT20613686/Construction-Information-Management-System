import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddHardware from "./Components/Hardware/AddHardware";
import ViewHardware from "./Components/Hardware/ViewHardware";
import AddHardwareItem from "./Components/Hardware Item/AddHardwareItem";
import ViewHardwareItem from "./Components/Hardware Item/ViewHardwareItem";
import HardwareReport from "./Components/Hardware/HardwareReport";
import HardwareItemReport from "./Components/Hardware Item/HardwareItemReport";
import CustomerHardware from "./Components/Customer Hardware/CustomerHardware";
import ViewCustomerItem from "./Components/Customer Hardware/ViewCustomerItem";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import LandingPage from "./screens/LandingPage/LandingPage";
import Home from "./Components/Customer Home/Home";
import AdminDash from "./Components/Admin Dashboard/AdminDash";
import HardwareDash from "./Components/Hardware Dashboard/HardwareDash";

const App = () => {
  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} exact />
            <Route path="/customer-home" element={<Home />} exact />
            <Route path="/admin-dash" element={<AdminDash />} exact />
            <Route path="/hardware-dash" element={<HardwareDash />} exact />
            <Route path="/register" element={<RegisterScreen />} exact />
            <Route path="/login" element={<LoginScreen />} exact />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/addHardware" element={<AddHardware />} exact />
            <Route path="/viewHardware" element={<ViewHardware />} exact />
            <Route
              path="/addHardwareItem"
              element={<AddHardwareItem />}
              exact
            />
            <Route
              path="/viewHardwareItem"
              element={<ViewHardwareItem />}
              exact
            />
            <Route path="/hardware-report" element={<HardwareReport />} exact />
            <Route
              path="/hardwareItem-report"
              element={<HardwareItemReport />}
              exact
            />
            <Route
              path="/customerHardware"
              element={<CustomerHardware />}
              exact
            />
            <Route
              path="/customerItem/:name"
              element={<ViewCustomerItem />}
              exact
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
