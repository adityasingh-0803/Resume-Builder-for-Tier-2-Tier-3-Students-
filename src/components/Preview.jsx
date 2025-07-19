import html2pdf from "html2pdf.js";

export default function Preview({ formData }) {
  const downloadPDF = () => {
    const element = document.getElementById("resume-preview");
    html2pdf().from(element).save("resume.pdf");
  };

  return (
    <div className="bg-white p-4 shadow rounded">
      <div id="resume-preview" className="p-4 border">
        <h2 className="text-xl font-bold">{formData.name}</h2>
        <p>{formData.email} | {formData.phone}</p>
        <p>{formData.linkedin} | {formData.github}</p>
        <hr className="my-2" />
        <h3 className="font-semibold">Education</h3>
        <p>{formData.education}</p>
        <h3 className="font-semibold mt-2">Skills</h3>
        <p>{formData.skills}</p>
        <h3 className="font-semibold mt-2">Projects</h3>
        <p>{formData.projects}</p>
        <h3 className="font-semibold mt-2">Experience</h3>
        <p>{formData.experience}</p>
      </div>

      <button
        onClick={downloadPDF}
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Download PDF
      </button>
    </div>
  );
}
