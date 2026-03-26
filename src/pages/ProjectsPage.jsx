import { useEffect, useState } from 'react'
import {
  getProjects,
  createProject,
  deleteProject
} from '../api/projectsApi'

function ProjectsPage() {
  const [projects, setProjects] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadProjects()
  }, [])

  async function loadProjects() {
    setLoading(true)
    const data = await getProjects()
    setProjects(data)
    setLoading(false)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!title.trim()) return

    const newProject = {
      title,
      description,
      status: 'draft'
    }

    const created = await createProject(newProject)
    setProjects([...projects, created])
    setTitle('')
    setDescription('')
  }

  async function handleDelete(id) {
    await deleteProject(id)
    setProjects(projects.filter(p => p.id !== id))
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Projects CRUD</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <br /><br />

        <textarea
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <br /><br />

        <button type="submit">Add Project</button>
      </form>

      <hr />

      {loading && <p>Loading...</p>}

      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <strong>{project.title}</strong> — {project.description}
            <button
              onClick={() => handleDelete(project.id)}
              style={{ marginLeft: '10px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectsPage
