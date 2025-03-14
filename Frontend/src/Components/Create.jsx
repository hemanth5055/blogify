import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

function Create() {
  const [user, setUser] = useState(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [file, setFile] = useState("No File Selected");
  const navigate = useNavigate();
  const checkAuth = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await axios.post("http://localhost:8000/user/check", {
        token: token,
      });
      if (response.data.event == "true") {
        setUser(response.data.user);
      } else {
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  };
  useEffect(() => {
    checkAuth();
  }, []);

  const handleSubmit = () => {};
  return (
    <div className="w-full h-screen px-7 py-4 pl-10">
      <div className="w-full flex justify-between items-center">
        <h1
          className="font-inst text-[60px] cursor-pointer select-none"
          onClick={() => navigate("/")}
        >
          Blogify
        </h1>
        {user !== null ? (
          <h1 className="font-inst text-[25px] cursor-pointer select-none">
            {user.name}
          </h1>
        ) : (
          ""
        )}
      </div>
      <div className="w-full mt-10 flex flex-col ">
        <input
          type="file"
          id="image"
          className="hidden"
          onChange={(event) => setFile(event.target.files[0].name)}
        />
        <div className="flex gap-3 items-center">
          <button
            className="bg-[#EEEEEE] h-[50px] w-[200px] p-5 rounded-[10px] flex justify-center items-center font-monts font-medium cursor-pointer"
            onClick={() => document.getElementById("image").click()}
          >
            Choose File
          </button>

          <h3 className="font-medium font-monts">{file}</h3>
        </div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="font-monts h-[48px] w-[350px] bg-[#EEEEEE] p-3 rounded-[5px] outline-none font-medium mt-5"
        />
        <textarea
          name="body"
          id="body"
          placeholder="Body"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
          className="font-monts resize-none h-[400px] w-[650px] bg-[#EEEEEE] p-3 rounded-[5px] outline-none font-medium mt-5"
        ></textarea>
        <button
          className="w-[40px] h-[40px] rounded-full bg-black flex justify-center items-center mt-5 cursor-pointer"
          onClick={handleSubmit}
        >
          <FaArrowRightLong color="white" className="-rotate-90" />
        </button>
      </div>
    </div>
  );
}

export default Create;
