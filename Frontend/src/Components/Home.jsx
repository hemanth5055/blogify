import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import axios from "axios";
// import { useUser } from "../Context/Usercontext";

function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [data, setData] = useState(null);
  const checkAuth = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await axios.post(
        `https://blogify-lovat-seven.vercel.app/user/check`,
        {
          token: token,
        }
      );
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
    const response = await axios.post(
      `https://blogify-lovat-seven.vercel.app/blog/all`,
      {
        userId: userA.id,
      }
    );
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
    <div className="w-full h-screen px-8 py-4 flex flex-col max-sm:px-2">
      <div className="flex items-center justify-between flex-wrap ">
        <h1 className="font-inst text-[70px] select-none">Blogify</h1>
        <div className="flex items-center justify-between gap-2 flex-wrap">
          {user != null ? (
            <>
              <h3 className="font-inst font-medium text-[20px] cursor-pointer">
                {user.name}
              </h3>
              <h3 className="font-inst font-medium text-[20px]">|</h3>
              <h3
                className="font-inst font-medium text-[20px] cursor-pointer"
                onClick={() => navigate("/my-blogs")}
              >
                My Blogs
              </h3>
              <h3 className="font-inst font-medium text-[20px]">|</h3>
              <h3
                className="font-inst font-medium text-[20px] cursor-pointer"
                onClick={() => {
                  navigate("/create");
                }}
              >
                Post a blog
              </h3>
              <h3 className="font-inst font-medium text-[20px]">|</h3>
              <h3
                className="font-inst font-medium text-[20px] cursor-pointer"
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/login");
                }}
              >
                Logout
              </h3>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
      <div className="px-3 py-10 grid  grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4 gap-y-5 w-full place-items-center">
        {data != null ? (
          <>
            {data.map((element) => {
              return (
                <Card
                  key={element._id}
                  imageUrl={element.imageUrl}
                  title={element.title}
                  id={element._id}
                ></Card>
              );
            })}
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Home;
