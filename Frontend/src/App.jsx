import React from "react";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import Blogview from "./Components/Blogview";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="/blog/:id" element={<Blogview></Blogview>}></Route>
      <Route path="/" element={<Home></Home>}></Route>
    </Routes>
  );
}

export default App;
