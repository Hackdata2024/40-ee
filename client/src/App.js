

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Auth from './components/Auth/Auth';
// import Login from './components/Login';
// import Register from './components/Register';
import TaskReminders from './components/TaskReminders/TaskReminders';
import MedicationAlerts from './components/MedicationAlert/MedicationAlerts';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/task-reminders" element={<TaskReminders />} />

        <Route path="/medication-alerts" component={MedicationAlerts} />
        {/*
        <Route path="/emergency-calling" component={EmergencyCalling} />
        <Route path="/positive-news-feed" component={PositiveNewsFeed} />
        <Route path="/user-profile" component={UserProfile} /> */}
      </Routes>
    </Router>
  );
}

export default App;