import React, { useContext, useState } from "react";
import { Card, Form } from "react-bootstrap";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import {Link, useNavigate} from 'react-router-dom';
import { AuthContext } from "./Context/AuthContext";
import {request} from './api/request';
import jwtDecode from "jwt-decode";

function Signup() {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name:"",
    email: "",
    password: "",
  });


  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    const {name, email, password } = values;
    const { data } = await request.post("/signup", { name,email, password });
    if (data) {
      const decoded = jwtDecode(data);
      localStorage.setItem("token", data);
      setUser(decoded);
      navigate("/projects");
    }
  };

  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Card style={{ width: "25rem", padding: 12 }}>
        <Card.Body>
          <Card.Title style={{ fontSize: 25 }}>Signup</Card.Title>
          <Form className="mt-3">
            <Form.Label>Name</Form.Label>
            <Input type="text" name='name' onChange={handleChange} value={values.name}/>
            <Form.Label>Email</Form.Label>
            <Input type="email" name='email' onChange={handleChange} value={values.email}/>
            <Form.Label>Password</Form.Label>
            <Input type="password" name='passsword' onChange={handleChange} value={values.passsword}/>
            <Button onClick={handleSignup} title="Signup" variant={"outline-dark"} width="w-100" />
            <Form.Text className="d-flex mt-2">
              Have an accont? <Link to="/">Login</Link>
            </Form.Text>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Signup;
