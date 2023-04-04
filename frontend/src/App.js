import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddHardware from './Components/Hardware/AddHardware';

const App = () => {
  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route path='/' element={<AddHardware/>} exact/>
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
