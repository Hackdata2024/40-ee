// client/src/components/Dashboard/Dashboard.js
import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="hidden sm:flex sm:flex-shrink-0 sm:w-56 border-r border-gray-200 bg-white">
        {/* Sidebar Content */}
        <div className="flex flex-col w-56">
          {/* Your sidebar content goes here */}
          <div className="p-4 border-b">
            <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
          </div>
          <nav className="flex-1 flex flex-col overflow-y-auto">
            {/* Sidebar navigation links */}
            <a href="#" className="p-4 text-gray-600 hover:bg-gray-200">
              Task Reminders
            </a>
            <a href="#" className="p-4 text-gray-600 hover:bg-gray-200">
              Medication Alerts
            </a>
            <a href="#" className="p-4 text-gray-600 hover:bg-gray-200">
              Emergency Calling
            </a>
            <a href="#" className="p-4 text-gray-600 hover:bg-gray-200">
              Positive News Feed
            </a>
            <a href="#" className="p-4 text-gray-600 hover:bg-gray-200">
              User Profile
            </a>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        {/* Your main content goes here */}
        <div className="p-4">
          <h1 className="text-3xl font-semibold text-gray-800">Welcome to Your Dashboard</h1>
          {/* Add more content and components */}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// // Import your component for each route
// import TaskReminders from './TaskReminders';
// import MedicationAlerts from './MedicationAlerts';
// import EmergencyCalling from './EmergencyCalling';
// import PositiveNewsFeed from './PositiveNewsFeed';
// import UserProfile from './UserProfile';

// const Dashboard = () => {
//   return (
//     <Router>
//       <div className="min-h-screen flex bg-gray-100">
//         {/* Sidebar */}
//         <aside className="hidden sm:flex sm:flex-shrink-0 sm:w-56 border-r border-gray-200 bg-white">
//           <div className="flex flex-col w-56">
//             <div className="p-4 border-b">
//               <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
//             </div>
//             <nav className="flex-1 flex flex-col overflow-y-auto">
//               <Link to="/task-reminders" className="p-4 text-gray-600 hover:bg-gray-200">Task Reminders</Link>
//               <Link to="/medication-alerts" className="p-4 text-gray-600 hover:bg-gray-200">Medication Alerts</Link>
//               <Link to="/emergency-calling" className="p-4 text-gray-600 hover:bg-gray-200">Emergency Calling</Link>
//               <Link to="/positive-news-feed" className="p-4 text-gray-600 hover:bg-gray-200">Positive News Feed</Link>
//               <Link to="/user-profile" className="p-4 text-gray-600 hover:bg-gray-200">User Profile</Link>
//             </nav>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
//           <Routes>
//             <Route path="/task-reminders" element={<TaskReminders />} />
//             <Route path="/medication-alerts" element={<MedicationAlerts />} />
//             <Route path="/emergency-calling" element={<EmergencyCalling />} />
//             <Route path="/positive-news-feed" element={<PositiveNewsFeed />} />
//             <Route path="/user-profile" element={<UserProfile />} />
//             {/* Redirect to /task-reminders or another component as the default route */}
//             <Route path="/" element={<TaskReminders />} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// };

// export default Dashboard;

