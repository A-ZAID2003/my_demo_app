import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import AddNote from "./components/AddNote";
import AllNotes from "./components/AllNotes";
function App() {
  return (
    <BrowserRouter>
    <div className="bg-dark text-white min-vh-100">
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/nav" element={<Navbar />} />
        <Route path="/" element={<Home />} />
        <Route path="/add-note" element={<AddNote/>} />
        <Route path="/all-notes" element={<AllNotes/>} />
      </Routes>
      </div> 
    </BrowserRouter>
  );
}

export default App;

