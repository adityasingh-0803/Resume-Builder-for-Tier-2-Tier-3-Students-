import React, { useState } from 'react';
import './App.css';
import { FaGithub, FaLinkedin, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import jsPDF from 'jspdf';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    skills: '',
    projects: '',
  });

  const [showLinks, setShowLinks] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Resume', 20, 20);

    doc.setFontSize(12);
    doc.text(`Name: ${formData.name}`, 20, 40);
    doc.text(`Email: ${formData.email}`, 20, 50);
    doc.text(`Phone: ${formData.phone}`, 20, 60);
    doc.text(`Education: ${formData.education}`, 20, 70);
    doc.text(`Skills: ${formData.skills}`, 20, 80);
    doc.text(`Projects: ${formData.projects}`, 20, 90);

    doc.save('resume.pdf');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 font-sans">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">Resume Builder</h1>

        {/* Toggle Social Links */}
        <div className="text-center mb-4">
          <button
            onClick={() => setShowLinks(!showLinks)}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center justify-center mx-auto transition"
          >
            {showLinks ? <FaChevronUp className="mr-2" /> : <FaChevronDown className="mr-2" />}
            {showLinks ? 'Hide Profiles' : 'Show Profiles'}
          </button>
        </div>

        {/* Social Icons */}
        {showLinks && (
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-3xl text-gray-700 hover:text-black" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-3xl text-blue-600 hover:text-blue-800" />
            </a>
          </div>
        )}

        {/* Form */}
        <form className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            value={formData.name}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            value={formData.email}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            value={formData.phone}
          />
          <textarea
            name="education"
            placeholder="Education"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            value={formData.education}
          />
          <textarea
            name="skills"
            placeholder="Skills"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            value={formData.skills}
          />
          <textarea
            name="projects"
            placeholder="Projects"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            value={formData.projects}
          />
        </form>

        {/* Generate Button */}
        <div className="text-center mt-6">
          <button
            onClick={generatePDF}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Download Resume PDF
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
