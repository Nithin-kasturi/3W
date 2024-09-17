import React from 'react';

import { FaInstagramSquare } from "react-icons/fa";const tasks = [
  { id: 1, title: 'Monthly leaderboard winner', points: '10 Points' },
  { id: 2, title: 'Share With 5 friends!', points: '10 Points' },
  { id: 3, title: 'Earn daily win Big Reward!', points: '10 Points' },
  { id: 4, title: 'Claim 10 Point Every Hour', points: '10 Points' },
  { id: 5, title: 'Weekly Leaderboard Prize', points: '10 Points' },
  { id: 6, title: 'Like the Instagram Post', points: '10 Points' }
];

const TaskDetails = () => {
  return (
    <div className="p-4">
      {tasks.map((task) => (
        <div key={task.id} className="bg-red-500 text-white rounded-lg mb-4 p-4 flex justify-between items-center">
          <div className="flex items-center">
          <FaInstagramSquare className="h-10 w-10"/>
            
            <span className="font-bold pl-5">{task.title}</span>
          </div>
          <div className="bg-white text-red-500 rounded-full px-4 py-1 font-bold">
            {task.points}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskDetails;
