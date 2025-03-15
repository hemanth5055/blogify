import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handlesubmit = async () => {
    const response = await axios.post(
      `https://blogify-lovat-seven.vercel.app/user/signup`,
      {
        name,
        email,
        password,
      }
    );
    if (response.data.event == "true") navigate("/login");
  };
  const checkAuth = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await axios.post(
        `https://blogify-lovat-seven.vercel.app/user/check`,
        {
          token: token,
        }
      );
      if (response.data.event == "true") navigate("/");
    }
  };
  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div className="w-full h-screen px-7 py-4 ">
      <h1
        className="font-inst text-[40px] cursor-pointer select-none"
        onClick={() => navigate("/")}
      >
        Blogify
      </h1>
      <div className="flex flex-col items-center flex-center mt-20">
        <h2 className="font-inst text-[70px]">Signup</h2>
        <input
          type="text"
          placeholder="Good Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="font-monts h-[48px] w-[350px] bg-[#EEEEEE] p-3 rounded-[5px] outline-none font-medium mt-5"
        />
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
        <button
          className="w-[40px] h-[40px] rounded-full bg-black flex justify-center items-center mt-5 cursor-pointer"
          onClick={handlesubmit}
        >
          <FaArrowRightLong color="white" />
        </button>

        <h2 className="font-monts font-medium mt-8">
          Already have an account,{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            login
          </span>
        </h2>
      </div>
    </div>
  );
}

export default Signup;
