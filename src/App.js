import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Basket from "./components/Basket/Basket";
import Calendar from "./components/Calendar/Calendar";
import Daily from "./components/Daily/Daily";
import Diagrams from "./components/Diagrams/Diagrams";
import Pastry from "./components/Pastry/Pastry";
import Settings from "./components/Settings/Settings";
import Employees from "./components/Emploees/Employees";

function App() {
  return (
    <div className="app-wrapper">
      {/* <Header /> */}
      <Navbar />
      <div className="main__content">
        <Routes>
          <Route path="basket" element={<Basket />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="daily" element={<Daily />} />
          <Route path="diagrams" element={<Diagrams />} />
          <Route path="employee" element={<Employees />} />
          <Route path="pastry" element={<Pastry />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
