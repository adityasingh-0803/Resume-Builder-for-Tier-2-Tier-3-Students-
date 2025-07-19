import React, { useState } from "react";
import jsPDF from "jspdf";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    education: "",
    skills: "",
    projects: "",
    experience: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text(formData.name, 10, 10);
    doc.setFontSize(10);
    doc.text(`${formData.email} | ${formData.phone}`, 10, 20);
    doc.text(`${formData.linkedin} | ${formData.github}`, 10, 30);

    doc.line(10, 35, 200, 35);

    doc.text("Education:", 10, 45);
    doc.text(formData.education, 20, 52);

    doc.text("Skills:", 10, 62);
    doc.text(formData.skills, 20, 69);

    doc.text("Projects:", 10, 79);
    doc.text(formData.projects, 20, 86);

    doc.text("Experience:", 10, 96);
    doc.text(formData.experience, 20, 103);

    doc.save("resume.pdf");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold text-center mb-6 flex items-center justify-center">
        <span className="mr-2">📄</span> Resume Builder
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow p-4 rounded-md space-y-3">
          <h2 className="text-xl font-semibold">Personal Info</h2>
          <input name="name" placeholder="Full Name" className="input" value={formData.name} onChange={handleChange} />
          <input name="email" placeholder="Email" className="input" value={formData.email} onChange={handleChange} />
          <input name="phone" placeholder="Phone" className="input" value={formData.phone} onChange={handleChange} />
          <input name="linkedin" placeholder="LinkedIn" className="input" value={formData.linkedin} onChange={handleChange} />
          <input name="github" placeholder="GitHub" className="input" value={formData.github} onChange={handleChange} />

          <h2 className="text-xl font-semibold mt-4">Resume Details</h2>
          <textarea name="education" placeholder="Education" className="input" value={formData.education} onChange={handleChange} />
          <textarea name="skills" placeholder="Skills" className="input" value={formData.skills} onChange={handleChange} />
          <textarea name="projects" placeholder="Projects" className="input" value={formData.projects} onChange={handleChange} />
          <textarea name="experience" placeholder="Experience" className="input" value={formData.experience} onChange={handleChange} />
        </div>

        <div className="bg-white shadow p-4 rounded-md">
          <div className="space-y-2">
            <h2 className="text-xl font-bold">{formData.name}</h2>
            <p className="text-sm text-gray-700">
              📧 {formData.email} | 📞 {formData.phone}
            </p>
            <p className="text-sm text-gray-700">
              🌐 {formData.linkedin} | 💻 {formData.github}
            </p>

            <hr className="my-2" />

            <div>
              <h3 className="font-semibold">🎓 Education</h3>
              <p>{formData.education}</p>
            </div>
            <div>
              <h3 className="font-semibold">🛠️ Skills</h3>
              <p>{formData.skills}</p>
            </div>
            <div>
              <h3 className="font-semibold">📁 Projects</h3>
              <p>{formData.projects}</p>
            </div>
            <div>
              <h3 className="font-semibold">💼 Experience</h3>
              <p>{formData.experience}</p>
            </div>
            <button onClick={downloadPDF} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
