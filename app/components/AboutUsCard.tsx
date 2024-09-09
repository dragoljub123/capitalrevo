import React from "react";
import "../globals.css";
import Image from "next/image";

interface Props {
  // make sure the interface is capitalized by convention
  imageSrc1: string;
  title: string;
  text: string;
  imageSrc2: string;
}

const AboutUsCard: React.FC<Props> = ({
  imageSrc1,
  title,
  text,
  imageSrc2,
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
      <div className="lg:w-1/2 w-full p-4 space-y-6">
        <Image src={imageSrc1} alt="like" width={40} height={40} />
        <div className="flex-row justify-center items-center  font-bold">
          <h2 className="lg:text-2xl ">{title}</h2>
        </div>
        <div className="pt-2  text-[#475467] max-w-[500px] text-sm">
          <p>{text}</p>
        </div>
      </div>
      <div className="lg:w-1/2 w-full pl-4">
        <Image
          src={imageSrc2}
          alt="slika"
          className="w-3/4"
          width={720}
          height={560}
        />
      </div>
    </div>
  );
};

export default AboutUsCard;
