import React from "react";
import { useNavigate } from "react-router-dom";
import defaultImg from "../assets/default.png";
import { IoArrowDown } from "react-icons/io5";
import Card from "./Card";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen px-8 py-4 flex flex-col">
      <div className="flex items-center justify-between  ">
        <h1 className="font-inst text-[70px] select-none">Blogify</h1>
        <div className="flex items-center justify-between gap-2">
          <h3
            className="font-inst font-medium text-[20px] cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </h3>
          <h3 className="font-inst font-medium text-[20px]">|</h3>
          <h3
            className="font-inst font-medium text-[20px] cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Signup
          </h3>
        </div>
      </div>
      <div className="px-3 py-10 grid  grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4 gap-y-5 w-full place-items-center">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}

export default Home;
