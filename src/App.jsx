import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    education: "",
    experience: "",
    github: "",
    linkedin: "",
  });

  const resumeRef = useRef();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: `${form.name}_Resume`,
  });

  return (
    <div className="app">
      <h1>📄 Resume Builder</h1>

      <div className="form">
        {Object.keys(form).map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={`Enter ${field}`}
            value={form[field]}
            onChange={handleChange}
          />
        ))}
      </div>

      <button onClick={handlePrint} className="download-btn">
        📥 Download PDF
      </button>

      <div className="resume" ref={resumeRef}>
        <h2>{form.name}</h2>
        <p>📧 {form.email} | 📞 {form.phone}</p>
        <p><strong>🎓 Education:</strong> {form.education}</p>
        <p><strong>💼 Experience:</strong> {form.experience}</p>
        <p><strong>🧠 Skills:</strong> {form.skills}</p>
        <p>
          <span className="icon">🔗</span> <strong>LinkedIn:</strong>{" "}
          <a href={form.linkedin} target="_blank" rel="noopener noreferrer">{form.linkedin}</a>
        </p>
        <p>
          <span className="icon">💻</span> <strong>GitHub:</strong>{" "}
          <a href={form.github} target="_blank" rel="noopener noreferrer">{form.github}</a>
        </p>
      </div>
    </div>
  );
}

export default App;
