import React from "react";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import Blogview from "./Components/Blogview";
import { Route, Routes } from "react-router-dom";
import Create from "./Components/Create";
import Myblogs from "./Components/Myblogs";
import Nomatch from "./Components/Nomatch";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="/blog/:id" element={<Blogview></Blogview>}></Route>
      <Route path="/create" element={<Create></Create>}></Route>
      <Route path="/my-blogs" element={<Myblogs></Myblogs>}></Route>
      <Route path="*" element={<Nomatch></Nomatch>}></Route>
      <Route path="/" element={<Home></Home>}></Route>
    </Routes>
  );
}

export default App;
