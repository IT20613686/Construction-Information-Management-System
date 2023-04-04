import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddHardware from "./Components/Hardware/AddHardware";
import ViewHardware from "./Components/Hardware/ViewHardware";

const App = () => {
  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route path="/addHardware" element={<AddHardware />} exact />
            <Route path="/viewHardware" element={<ViewHardware />} exact />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
