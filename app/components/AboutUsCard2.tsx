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

const AboutUsCard2: React.FC<Props> = ({
  imageSrc1,
  title,
  text,
  imageSrc2,
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
      {/* Leva strana - Slika */}
      <div className="hidden md:w-1/2 w-full md:flex md:justify-center lg:justify-start">
        <Image
          src={imageSrc2}
          alt="slika"
          className="w-full lg:w-3/4 object-cover"
          width={720}
          height={560}
        />
      </div>

      {/* Desna strana - Slika, Naslov i Tekst */}
      <div className="lg:w-1/2 w-full p-4 space-y-4">
        <Image src={imageSrc1} alt="like" width={40} height={40} />
        <div className=" lg:text-left">
          <h2 className="text-xl text-center lg:text-2xl font-bold">{title}</h2>
        </div>
        <div className="pt-2 text-[#475467] max-w-[500px] text-sm">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsCard2;
