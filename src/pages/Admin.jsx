import { useState } from "react";
import { addProject } from "../api/projectsApi";
import "./Admin.css";

function Admin() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProject({ title, description });
    setTitle("");
    setDescription("");
    alert("Project added successfully!");
  };

  return (
    <div className="admin-page">
      <div className="admin-card">
        <h1>Add New Project</h1>

        <form onSubmit={handleSubmit}>
          <label>Project Title</label>
          <input
            type="text"
            placeholder="Enter project title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <label>Project Description</label>
          <textarea
            placeholder="Enter project description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <button type="submit">Add Project</button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
