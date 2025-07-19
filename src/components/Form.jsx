export default function Form({ formData, setFormData }) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Personal Info</h2>
      {["name", "email", "phone", "linkedin", "github"].map((field) => (
        <input
          key={field}
          name={field}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          value={formData[field]}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
        />
      ))}

      <h2 className="text-xl font-semibold mt-4 mb-2">Resume Details</h2>
      {["education", "skills", "projects", "experience"].map((field) => (
        <textarea
          key={field}
          name={field}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          value={formData[field]}
          onChange={handleChange}
          rows={3}
          className="w-full p-2 border rounded mb-3"
        />
      ))}
    </div>
  );
}
