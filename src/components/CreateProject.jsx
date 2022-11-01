import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "./Button";
import { Container } from "./Container";
import { Input } from "./Input";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { request } from "../api/request";


export const CreateProject = ({ close }) => {

  const [values, setValues] = useState({
    title: "",
    category: "",
    desc: "",
    github: "",
    demo: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };


 

  const handleSubmit = async () => {
    const { title, desc, category, github, demo } = values;
    const { data } = await request.post("/create-project", {
      title,
      category,
      description: desc,
      github,
      demo,
    });
if(data) return close()

  };

  return (
    <Container>
      <div
        className="create-project m-auto w-50"
        style={{ position: "relative" }}
      >
        <h1 className="mb-4">Create Project</h1>
        <Form>
          <Form.Label>Project Title</Form.Label>
          <Input
            type="text"
            value={values.title}
            name="title"
            onChange={handleChange}
          />
          <Form.Label>Select Category</Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="category"
            onChange={handleChange}
          >
            <option value="React.js">React.js</option>
            <option value="Next.js">Next.js</option>
            <option value="Vanilla.js">Vanilla Js</option>
            <option value="Other">Other</option>
          </Form.Select>
          <Form.Label className="mt-3">Project Description</Form.Label>
          <Form.Control
            as={"textarea"}
            className="mb-3"
            values={values.desc}
            name="desc"
            onChange={handleChange}
          />
          <Form.Label>Github Repository</Form.Label>
          <Input
            type="text"
            values={values.github}
            name="github"
            onChange={handleChange}
          />
          <Form.Label>Live Demo</Form.Label>
          <Input
            type="text"
            values={values.demo}
            name="demo"
            onChange={handleChange}
          />
          <Button
            onClick={handleSubmit}
            title={"Submit"}
            variant="outline-dark"
          />
        </Form>
      </div>
      <XMarkIcon
        onClick={close}
        style={{
          width: 30,
          height: 30,
          cursor: "pointer",
          position: "absolute",
          top: 20,
          right: 20,
        }}
      />
    </Container>
  );
};
