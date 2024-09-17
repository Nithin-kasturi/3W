import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 w-full bg-white p-4 flex justify-around shadow-lg">
      <button className="text-blue-500 flex flex-col items-center" onClick={() => navigate('/')}>
        <i className="fas fa-home text-2xl"></i>
        <span className="text-xs">Home</span>
      </button>
      <button className="text-blue-500 flex flex-col items-center" onClick={() => navigate('/task-details')}>
        <i className="fas fa-plus-circle text-2xl"></i>
        <span className="text-xs">Add Task</span>
      </button>
      <button className="text-blue-500 flex flex-col items-center">
        <i className="fas fa-user text-2xl"></i>
        <span className="text-xs">Profile</span>
      </button>
    </div>
  );
};

export default Footer;
