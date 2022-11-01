import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { request } from "../api/request";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import {AuthContext} from '../Context/AuthContext';

export const Projects = () => {
  const {user}=useContext(AuthContext)
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    const { data } = await request.get("/projects");
    setProjects(data.reverse());
  };

  useEffect(() => {
    getProjects();
  }, [user]);

  return (
    <Row md={2} xs={1} lg={3} className="mt-4">
      {projects.map((project) => (
        <Col key={project._id}>
          <ProjectCard
            id={project._id}
            title={project.title}
            desc={project.description}
            createdBy={project.postedBy.name}
            createdAt={formatDistanceToNow(new Date(project.createdAt), {
              addSuffix: true,
            })}
          />
        </Col>
      ))}
    </Row>
  );
};
