import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen px-7 py-4 ">
      <h1
        className="font-inst text-[40px] cursor-pointer select-none"
        onClick={() => navigate("/")}
      >
        Blogify
      </h1>
      <div className="flex flex-col items-center flex-center mt-20">
        <h2 className="font-inst text-[70px]">Login</h2>
        <input
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="font-monts h-[48px] w-[350px] bg-[#EEEEEE] p-3 rounded-[5px] outline-none font-medium mt-5"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="font-monts h-[48px] w-[350px] bg-[#EEEEEE] p-3 rounded-[5px] outline-none font-medium mt-5"
        />
        <button className="w-[40px] h-[40px] rounded-full bg-black flex justify-center items-center mt-5 cursor-pointer">
          <FaArrowRightLong color="white" />
        </button>

        <h2 className="font-monts font-medium mt-8">
          Don’t have an account ,{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            signup
          </span>
        </h2>
      </div>
    </div>
  );
}

export default Login;
