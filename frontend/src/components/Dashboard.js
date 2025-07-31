import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserPlus, FaList } from 'react-icons/fa';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-4xl font-bold text-purple-700 mb-8">
        🎓 Student Dashboard
      </h2>
      <div className="flex gap-8">
        <button
          onClick={() => navigate('/create')}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 shadow-md"
        >
          <FaUserPlus />
          Add Student
        </button>

        <button
          onClick={() => navigate('/list')}
          className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 shadow-md"
        >
          <FaList />
          View All Students
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
