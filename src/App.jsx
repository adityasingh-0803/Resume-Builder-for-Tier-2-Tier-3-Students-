import React, { useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    education: '',
    skills: '',
    experience: '',
    linkedin: '',
    github: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Resume Builder</h1>

      <form className="w-full max-w-lg bg-white rounded-xl shadow-lg p-6 space-y-4">
        {["name", "email", "education", "skills", "experience", "linkedin", "github"].map((field) => (
          <input
            key={field}
            className="w-full p-2 border rounded-md"
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            name={field}
            value={form[field]}
            onChange={handleChange}
          />
        ))}
      </form>

      <div className="mt-10 w-full max-w-2xl p-6 bg-white rounded-xl shadow-xl text-left">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Preview</h2>
        <p><strong>Name:</strong> {form.name}</p>
        <p><strong>Email:</strong> {form.email}</p>
        <p><strong>Education:</strong> {form.education}</p>
        <p><strong>Skills:</strong> {form.skills}</p>
        <p><strong>Experience:</strong> {form.experience}</p>
        <p><strong>LinkedIn:</strong> <a href={form.linkedin} className="text-blue-500" target="_blank" rel="noreferrer">{form.linkedin}</a></p>
        <p><strong>GitHub:</strong> <a href={form.github} className="text-blue-500" target="_blank" rel="noreferrer">{form.github}</a></p>
      </div>
    </div>
  );
}

export default App;
