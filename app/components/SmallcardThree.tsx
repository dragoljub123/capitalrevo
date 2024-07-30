import React from "react";
import "../globals.css";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  imageurlnumber: string;
  number: string;
}

const SmallcardThree: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  imageurlnumber,
  number,
}) => {
  return (
    <div className="flex">
      <div className="card3">
        <img src={imageUrl} className="card-image3" />
        <h4 className="card-title3">
          <span className="text-zlatna">{number}</span>
          {title}
        </h4>
        <p className="text-sm">{description}</p>
      </div>
      <div className=" flex justify-end  ">
        <img src={imageurlnumber} className=" w-full h-14" />
      </div>
    </div>
  );
};

export default SmallcardThree;
