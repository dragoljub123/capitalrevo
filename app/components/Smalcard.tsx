import React from "react";

interface props {
  imageSrc1: string;
  title: string;
  text: string;
}
const Smalcard: React.FC<props> = (props) => {
  return (
    <div className=" ">
      <div className="flex items-center  text-gray-700 ">
        <img src={props.imageSrc1} alt="like" className="pr-2" />
        <h2 className="text-2xl font-black text-center text-[#00dbfe]">
          {props.title}
        </h2>
      </div>
      <div className=" p-4  text-gray-700">
        <p className="md:text-lg">{props.text}</p>
      </div>
    </div>
  );
};
export default Smalcard;
