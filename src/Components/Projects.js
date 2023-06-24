import React, { useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([
    { title: "", description: "", link: "", image: "" },
  ]);

  const handleProjectChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...projects];
    list[index][name] = value;
    setProjects(list);
  };

  const handleAddProject = () => {
    setProjects([...projects, { title: "", description: "", link: "", image: "" }]);
  };

  const handleRemoveProject = (index) => {
    const list = [...projects];
    list.splice(index, 1);
    setProjects(list);
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4 font-weight-bold">Projects</h3>
      {projects.map((project, index) => (
        <div className="card mb-3" key={index}>
          <div className="card-body">
            <div className="form-group">
              <label>Project Title</label>
              <input
                type="text"
                name="title"
                value={project.title}
                onChange={(event) => handleProjectChange(index, event)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Project Description</label>
              <textarea
                name="description"
                value={project.description}
                onChange={(event) => handleProjectChange(index, event)}
                className="form-control"
              ></textarea>
            </div>
            <div className="form-group">
              <label>Project Link</label>
              <input
                type="text"
                name="link"
                value={project.link}
                onChange={(event) => handleProjectChange(index, event)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Project Image</label>
              <input
                type="file"
                name="image"
                value={project.image}
                onChange={(event) => handleProjectChange(index, event)}
                className="form-control-file"
              />
            </div>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleRemoveProject(index)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleAddProject}
      >
        Add more
      </button>
      <hr />
          <div className="text-left">
          <button className="btn btn-warning font-weight-bold mt-2" type="submit">
          Submit
          </button>
          </div>
    </div>
  );
};

export default Projects;
