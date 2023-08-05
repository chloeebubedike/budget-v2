import { Route, Routes, Outlet } from "react-router-dom";
import "./App.css";

import { SidePanel } from "./components/SidePanel/SidePanel";
import { Budget } from "./pages/Budget";
import { Dashboard } from "./pages/Dashboard";
import { Review } from "./pages/Review";
import { Transactions } from "./pages/Transactions";
function App() {
  return (
    <div className="app-container">
      <div className="side-panel">
        <SidePanel />
      </div>
      <div className="main-content">
        <Outlet />
      </div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/review" element={<Review />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </div>
  );
}

export default App;
