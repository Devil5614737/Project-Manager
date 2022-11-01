import React, { useContext, useEffect, useState } from "react";
import { Badge, Button, Image } from "react-bootstrap";
import { Container } from "./components/Container";
import { NavComp } from "./components/Navbar";
import { request } from "./api/request";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";


const ProjectPreview = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const param = useParams();
  const [project, setProject] = useState([]);

  const getProject = async () => {
    const { data } = await request.get(`/projects/${param.id}`);
    setProject(data);
  };

  useEffect(() => {
    getProject();
  }, []);

  const handleRemoveProject = async (projectId) => {
    const { data } = await request.post("/remove-project", { projectId });
    if (data) return navigate("/projects");
  };


  return (
    <>
      <NavComp />
      <Container>
        <div className="my-4 ">
          <h1 style={{ fontWeight: "bold", fontSize: "3rem" }}>
            {project.title}
          </h1>
        
          <Badge bg="secondary">{project.category}</Badge>
          <p className="mt-3">{project.description}</p>
          <div className="buttons d-flex gap-3">
            <a
              target="_blank"
              href={`${project.github}`}
              className="btn btn-outline-dark btn-sm"
            >
              Github
            </a>
            <a
              target="_blank"
              href={`${project.demo}`}
              className="btn btn-outline-dark btn-sm"
            >
              Live Demo
            </a>
            {project?.postedBy?._id === user?._id && (
              <button
                onClick={() => handleRemoveProject(project?._id)}
                className="btn btn-outline-danger btn-sm"
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProjectPreview;
