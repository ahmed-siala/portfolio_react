import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function ProjectDetails() {
  const { id } = useParams()
  const [project, setProject] = useState(null)

  useEffect(() => {
    axios
      .get(`http://localhost:4000/projects/${id}`)
      .then(res => setProject(res.data))
  }, [id])

  if (!project) return <p>Loading...</p>

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <p>Status: {project.status}</p>
    </div>
  )
}

export default ProjectDetails
