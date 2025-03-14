import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowDown } from "react-icons/io5";
import defaultImg2 from "../assets/default2.avif";
import person from "../assets/person.png";

function Blogview() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen px-8 py-5 flex flex-col">
      <div className="flex items-center justify-between  ">
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
        <div className="h-[250px] w-full  flex gap-10">
          <img
            src={defaultImg2}
            className="h-[250px] w-[350px] rounded-[10px]"
          />
          <div className="w-full relative">
            <h1 className="font-inst font-medium text-4xl mt-4">
              Building multi-arch containers with GitHub Actions in AWS Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Praesentium,
              rem.
            </h1>
            <div className="flex items-center my-4 gap-2">
              <img src={person} className="w-[40px] h-[40px]" />
              <h3 className="font-monts font-medium text-md">John Doe (JD)</h3>
            </div>
            <div className="absolute bottom-2">
              <h1 className="font-monts text-md font-medium">2025-03-14</h1>
            </div>
          </div>
        </div>
        <div className="w-full mt-8">
          <p className="font-inst font-medium text-3xl selection:bg-fuchsia-300 text-gray-700 leading-11">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            saepe doloremque nisi officiis architecto porro eum corporis iusto
            earum iure a ea, omnis labore illo magnam? Quas, in. Sed quos
            similique est odit perferendis. Mollitia officia qui accusantium
            magni deleniti consequuntur consequatur sint molestias culpa at odit
            odio eum numquam repudiandae voluptatem velit adipisci corporis cum
            eligendi deserunt, accusamus ipsa? Praesentium laudantium cum iste
            vero? Blanditiis quia dolorem eum corrupti expedita itaque optio
            officia earum iste nihil eius recusandae iusto, quam in impedit at
            vel hic voluptatum animi quos dolorum. Consectetur maiores illo at
            unde sapiente, temporibus quaerat repudiandae laboriosam!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blogview;
