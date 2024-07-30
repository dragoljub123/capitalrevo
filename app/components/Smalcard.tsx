import React from "react";
import "../globals.css";

interface props {
  imageSrc1: string;
  title: string;
  text: string;
}

const Smalcard: React.FC<props> = (props) => {
  return (
    <div className=" card1 ">
      <div className="flex p-2  font-bold">
        <img src={props.imageSrc1} alt="like" className="pr-2" />
        <h2 className="lg:text-2xl">{props.title}</h2>
      </div>

      <div className=" p-2 ">
        <p className="">{props.text}</p>
      </div>
    </div>
  );
};

export default Smalcard;
