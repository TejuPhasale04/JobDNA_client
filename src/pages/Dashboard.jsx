import React, { useState } from 'react';
import axios from 'axios';

const Dashboard = ({ user }) => {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobRole, setJobRole] = useState("");

  const handleResumeUpload = async () => {
    if (!resumeFile) return alert("Please select a resume file.");

    const formData = new FormData();
    formData.append("resume", resumeFile);

    try {
      const res = await axios.post(
        "https://jobdna-api.onrender.com/upload-resume", // 🔁 Change this to your actual backend URL
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setJobRole(res.data.role);
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Upload failed. Try again.");
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 to-white min-h-screen flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-2">🔍 JobDNA Dashboard</h1>
        <p className="text-sm text-gray-500 mb-6">"A perfect role for tech-savvy innovators!"</p>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Upload Resume (PDF)</label>
          <input
            type="file"
            accept=".pdf"
            onChange={e => setResumeFile(e.target.files[0])}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full
              file:border-0 file:text-sm file:font-semibold file:bg-green-100 file:text-green-700
              hover:file:bg-green-200 cursor-pointer"
          />
          <button
            onClick={handleResumeUpload}
            className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
          >
            📄 Analyze Resume
          </button>
        </div>

        {jobRole && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-lg text-gray-700">🎯 Predicted Job Role:</p>
            <p className="text-xl font-bold text-blue-700 mt-1">{jobRole}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
