import Login from "../src/pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
