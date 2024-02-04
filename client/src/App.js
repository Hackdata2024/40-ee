import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Auth from "./components/Auth/RegistrationForm";
import TaskReminders from "./components/TaskReminders/TaskReminders";
import MedicationAlerts from "./components/MedicationAlerts/MedicationAlerts";
import EmergencyCalling from "./components/EmergencyCalling/EmergencyCalling";
import { ThemeProvider } from "./components/Dashboard/ThemeContext";
import Main from "./components/Main";
import { SignedOut, SignedIn } from "@clerk/clerk-react";
import RegistrationForm from "./components/Auth/RegistrationForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/account" element={
          <SignedIn>
            <RegistrationForm />
          </SignedIn>
        } />
        <Route
          path="/login"
          element={
            <SignedOut>
              <Auth />
            </SignedOut>
          }
        />
        <Route
          path="/dashboard"
          element={
            <SignedIn>
              <ThemeProvider>
                <Dashboard />
              </ThemeProvider>
            </SignedIn>
          }
        />
        <Route
          path="/task-reminders"
          element={
            <SignedIn>
              <TaskReminders />
            </SignedIn>
          }
        />
        <Route
          path="/medication-alerts"
          element={
            <SignedIn>
              <MedicationAlerts />
            </SignedIn>
          }
        />
        <Route
          path="/emergency-calling"
          element={
            <SignedIn>
              <EmergencyCalling />
            </SignedIn>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
