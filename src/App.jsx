import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import ProjectPreview from "./ProjectPreview";
import { Routes, Route } from "react-router-dom";
import { Protected } from "./components/Protected";
import NotFound from "./NotFound";
import { AuthContextProvider } from "./Context/AuthContext";

const App = () => {
  return (
  <AuthContextProvider>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/projects" element={<Protected Component={Dashboard}/>} />
      <Route path="/projects/:id" element={<Protected Component={ProjectPreview} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </AuthContextProvider>
  );
};

export default App;
