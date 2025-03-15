import React from "react";
import defaultImg from "../assets/default.png";
import { IoArrowDown } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Card({ title, imageUrl, id }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-[350px] bg-[#EBEBEB] rounded-[10px]">
      <img
        src={imageUrl}
        alt="Article  Image"
        className="w-[350px] h-[200px] rounded-t-[10px]"
      />
      <div className="p-2 w-full mt-1 ">
        <h1 className="font-monts line-clamp-2 overflow-hidden font-medium text-[18px]">
          {title}
        </h1>
      </div>
      <div className="flex justify-end items-center  min-h-[30px] px-5 my-1">
        <div
          className="-rotate-135 cursor-pointer"
          onClick={() => {
            navigate(`/blog/${id}`);
          }}
        >
          <IoArrowDown size={25} />
        </div>
      </div>
    </div>
  );
}

export default Card;
