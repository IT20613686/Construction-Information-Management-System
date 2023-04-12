import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddHardware from "./Components/Hardware/AddHardware";
import ViewHardware from "./Components/Hardware/ViewHardware";
import AddHardwareItem from "./Components/Hardware Item/AddHardwareItem";
import ViewHardwareItem from "./Components/Hardware Item/ViewHardwareItem";
import HardwareReport from "./Components/Hardware/HardwareReport";
import HardwareItemReport from "./Components/Hardware Item/HardwareItemReport";

const App = () => {
  return (
    <Router>
      <div>
        <main>
          <Routes>
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
            <Route path="/hardwareItem-report" element={<HardwareItemReport />} exact />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
