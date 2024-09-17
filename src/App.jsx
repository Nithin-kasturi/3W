import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import StatsBar from './components/StatsBar';
import Leaderboard from './components/Leaderboard';
import SocialMediaTask from './components/SocialMediaTask';
import Footer from './components/Footer';
import TaskDetails from './components/TaskDetails'; // Import TaskDetails

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen pb-20">
        <Header />
        <StatsBar />
        <Routes>
          <Route path="/" element={<Leaderboard />} />
          <Route path="/task-details" element={<TaskDetails />} /> {/* Route for TaskDetails */}
        </Routes>
        <SocialMediaTask />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
