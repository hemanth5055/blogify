import React from "react";
import defaultImg from "../assets/default.png";
import { IoArrowDown } from "react-icons/io5";

function Card({ title, imageUrl, link }) {
  return (
    <div className="flex flex-col w-[350px] bg-[#EBEBEB] rounded-[10px]">
      <img
        src={defaultImg}
        alt="Article  Image"
        className="w-[350px] h-[200px] rounded-t-[10px]"
      />
      <div className="p-2 w-full mt-1 ">
        <h1 className="font-monts font-medium text-[18px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Nihil,adipisicing elit. vel.
        </h1>
      </div>
      <div className="flex justify-end items-center  min-h-[30px] px-5 my-1">
        <div className="-rotate-135 cursor-pointer">
          <IoArrowDown size={25} />
        </div>
      </div>
    </div>
  );
}

export default Card;
