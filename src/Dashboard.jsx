import React, { useState } from "react";
import { NavComp } from "./components/Navbar";
import { Container } from "./components/Container";
import { Projects } from "./components/Projects";
import { CreateProject } from "./components/CreateProject";

const Dashboard = () => {
  const [showCreateProject, setShowCreateProject] = useState(false);

  const openModal = () => setShowCreateProject(true);
  const closeModal = () => setShowCreateProject(false);

  return showCreateProject ? (
    <CreateProject close={closeModal} />
  ) : (
    <>
      <NavComp open={openModal} />
      <Container>
        <Projects />
      </Container>
    </>
  );
};

export default Dashboard;
