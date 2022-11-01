import React, {  useContext, useState } from "react";
import { Card, Form } from "react-bootstrap";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { AuthContext } from "./Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { request } from "./api/request";
import jwtDecode from "jwt-decode";

function Login() {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    const { email, password } = values;
    const { data } = await request.post("/login", { email, password });
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
          <Card.Title style={{ fontSize: 25 }}>Login</Card.Title>
          <Form className="mt-3">
            <Form.Label>Email</Form.Label>
            <Input
              type="email"
              value={values.email}
              name="email"
              onChange={handleChange}
            />
            <Form.Label>Password</Form.Label>
            <Input
              type="password"
              value={values.password}
              name="password"
              onChange={handleChange}
            />
            <Button
              onClick={handleLogin}
              title="Login"
              variant={"outline-dark"}
              width="w-100"
            />
            <Form.Text className="d-flex mt-2">
              Don't have an accont? <Link to="/signup">Signup</Link>
            </Form.Text>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
