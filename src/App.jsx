import { useState } from "react";
import Form from "./components/Form";
import Preview from "./components/Preview";

export default function App() {
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

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">📄 Resume Builder</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <Form formData={formData} setFormData={setFormData} />
        <Preview formData={formData} />
      </div>
    </div>
  );
}
