import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import Backend from "./Backend";
import { useNavigate } from "react-router-dom";

function Myblogs() {
  const [data, setData] = useState();
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const checkAuth = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await axios.post(`${Backend()}/user/check`, {
        token: token,
      });
      if (response.data.event == "true") {
        setUser(response.data.user);
        getData(response.data.user);
      } else {
        localStorage.removeItem("token");
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  };
  async function getData(userA) {
    const response = await axios.post(`${Backend()}/blog/allmy`, {
      userId: userA.id,
    });
    if (response.data.event == "true") {
      setData(response.data.data);
    } else {
      // console.log(response.data.message);
    }
  }
  useEffect(() => {
    checkAuth();
  }, []);
  return (
    <div className="flex w-full h-screen flex-col px-10 py-5 ">
      {user != null ? (
        <>
          <div className="w-full flex justify-between items-center ">
            <h1
              className="font-inst text-[70px] select-none cursor-pointer"
              onClick={() => navigate("/")}
            >
              Blogify
            </h1>
            <h1 className="font-inst text-[30px] select-none">{user.name}</h1>
          </div>
          <div className="px-3 py-10 grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4 gap-y-5 w-full place-items-center">
            {data && data.length > 0 ? (
              data.map((element) => (
                <Card
                  key={element._id}
                  imageUrl={element.imageUrl}
                  title={element.title}
                  id={element._id}
                />
              ))
            ) : (
              <div className="font-inst text-[30px] select-none absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                No Blogs..
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="font-inst text-[70px] select-none absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          Loading..
        </div>
      )}
    </div>
  );
}

export default Myblogs;
