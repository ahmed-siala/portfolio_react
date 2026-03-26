import { useEffect, useState } from "react";
import { getProjects, deleteProject } from "../api/projectsApi";
import "./Projects.css";

function Projects() {
  const [projects, setProjects] = useState([]);

  const loadProjects = () => {
    getProjects().then((data) => setProjects(data));
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      await deleteProject(id);
      loadProjects();
    }
  };

  return (
    <div className="projects-page">
      <h1>My Projects</h1>

      <table className="projects-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Project Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {projects.map((project, index) => (
            <tr key={project.id}>
              <td>{index + 1}</td>
              <td>{project.title}</td>
              <td>{project.description}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(project.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {projects.length === 0 && <p>No projects yet</p>}
    </div>
  );
}

export default Projects;
