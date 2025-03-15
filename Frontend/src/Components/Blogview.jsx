import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowDown } from "react-icons/io5";
import axios from "axios";
import person from "../assets/person.png";

function Blogview() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState(null);
  async function getData(id) {
    const response = await axios.get(
      `https://blogify-lovat-seven.vercel.app/blog/${id}`
    );
    if (response.data.event == "true") {
      setData(response.data.data);
    } else {
      // console.log(response.data.message);
    }
  }

  useEffect(() => {
    getData(id);
  }, []);
  return (
    <div className="w-full h-screen px-10 py-5 flex flex-col max-sm:px-5">
      {data == null ? (
        <div className="font-inst text-[70px] select-none absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          Loading..
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between ">
            <h1 className="font-inst text-[70px] select-none">Blogify</h1>
            <div className="flex items-center justify-between gap-2">
              <div
                className="font-inst font-medium text-[20px] flex cursor-pointer items-center gap-1"
                onClick={() => navigate("/")}
              >
                Home <IoArrowDown size={25} className="-rotate-135" />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col mt-10">
            <div className="min-h-[250px] flex gap-10 max-sm:gap-5 max-sm:flex-col ">
              <img
                src={data.imageUrl}
                className="h-[270px] max-w-[450px] rounded-[10px]"
              />
              <div className="w-full relative max-sm:min-h-[200px]  ">
                <h1 className="font-inst font-medium text-4xl mt-4">
                  {data.title}
                </h1>
                <div className="flex items-center my-4 gap-2">
                  <img src={person} className="w-[40px] h-[40px]" />
                  <h3 className="font-monts font-medium text-md">
                    {data.ownerName}
                  </h3>
                </div>
                <div className=" bottom-2">
                  <h1 className="font-monts text-md font-medium">
                    {data.createdDate}
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-full mt-12">
              <p className="font-inst whitespace-pre-wrap font-medium text-3xl max-sm:text-2xl selection:bg-fuchsia-300 text-gray-700 leading-11">
                {data.body}
              </p>
              <div className="w-full h-[30px]"></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Blogview;
