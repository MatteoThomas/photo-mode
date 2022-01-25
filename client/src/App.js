import { Route, Routes } from "react-router-dom";

import Login from "../src/pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Nav from "./components/Nav/Nav";
import ImageUpload from "./components/ImageUpload/ImageUpload";

import "./reset.css";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div>
        <Nav />
      </div>
      <div>
        <Routes className="routes">
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/imageUpload" exact element={<ImageUpload />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
