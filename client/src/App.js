import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Auth from "./components/Auth/Auth";
// import Login from './components/Login';
// import Register from './components/Register';
import TaskReminders from "./components/TaskReminders/TaskReminders";
import MedicationAlerts from "./components/MedicationAlerts/MedicationAlerts";
import EmergencyCalling from "./components/EmergencyCalling/EmergencyCalling";
import { ThemeProvider } from "./components/Dashboard/ThemeContext";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
        <Route
          path="/dashboard"
          element={
            <ThemeProvider>
              <Dashboard />
            </ThemeProvider>
          }
        />
        <Route path="/login" element={<Auth />} />
        <Route path="/task-reminders" element={<TaskReminders />} />

        <Route path="/medication-alerts" element={<MedicationAlerts />} />

        <Route path="/emergency-calling" element={<EmergencyCalling />} />
      </Routes>
    </Router>
  );
}

export default App;
