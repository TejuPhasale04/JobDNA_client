import React from 'react';

const Welcome = ({ onNext }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-green-100 to-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-green-800 mb-6">🔍 Welcome to JobDNA</h1>
        <p className="text-lg text-gray-600 mb-8">Discover your ideal job role through resume AI analysis</p>
        <button
          onClick={onNext}
          className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
        >
          🚀 Get Started
        </button>
      </div>
    </div>
  );
};

export default Welcome;
