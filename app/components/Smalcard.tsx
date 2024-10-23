import React from "react";

interface props {
  imageSrc1: string;
  title: string;
  text: string;
}
const Smalcard: React.FC<props> = (props) => {
  return (
    <div className=" ">
      <div className="flex items-center  text-gray-800 font-black">
        <img src={props.imageSrc1} alt="like" className="pr-2" />
        <h2 className="lg:text-2xl text-center text-[#00dbfe]">
          {props.title}
        </h2>
      </div>
      <div className=" p-4  text-gray-700">
        <p className="">{props.text}</p>
      </div>
    </div>
  );
};
export default Smalcard;
