const API_URL = "http://localhost:4000/projects";

export const getProjects = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const addProject = async (project) => {
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(project),
  });
};

export const deleteProject = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};
