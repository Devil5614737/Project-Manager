import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export const ProjectCard = ({ id, title, desc, createdBy, createdAt }) => {
  return (
    <motion.div
   initial={{
  y:42,
  opacity:0
   }}
   animate={{y:0,opacity:1}}
  transition={{ type: "spring", stiffness: 100,staggerDirection:1,delay:.4}}
    >
      <Card className="mb-4" style={{ position: "relative", height: 200 }}>
        <Card.Body>
          <Card.Title
            style={{ fontSize: 19, fontWeight: "bold", cursor: "pointer" }}
          >
            {title}
          </Card.Title>
          <Card.Text style={{ fontSize: 12, color: "#777777" }}>
            {createdAt}
          </Card.Text>
          <Card.Text style={{ fontSize: 14, color: "#2c2c2c" }}>
            {desc}
          </Card.Text>
          <Card.Text style={{ fontSize: 14, color: "#777777" }}>
            createdBy: {createdBy}
          </Card.Text>
          <Link
            to={`/projects/${id}`}
            style={{
              background: "black",
              color: "white",
              width: 35,
              height: 35,
              borderRadius: "100%",
              display: "grid",
              placeItems: "center",
              cursor: "pointer",
              position: "absolute",
              top: -10,
              right: -4,
            }}
          >
            <ArrowTopRightOnSquareIcon style={{ width: 20, height: 20 }} />
          </Link>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  createdBy: PropTypes.string,
  createdAt: PropTypes.string,
};
