import Link from "next/link";
import React from "react";

interface CardProps {
  title: string;
  imageSrc: string;
  description: string;
  listItems: string[];
}
const Paketi: React.FC<CardProps> = ({
  title,
  imageSrc,
  description,
  listItems,
}) => {
  return (
    <div className="flex flex-col justify-between pt-5 pakets  mb-10  ">
      <div className="flex justify-center items-center  plan-name">
        <img
          src={imageSrc}
          alt="Card"
          style={{ width: "auto", height: "auto", padding: "3px" }}
        />
        <h4 className="rounded-lg plan-name-name text-lg font-black text-gray-700  ">
          {title}
        </h4>
      </div>

      <div className="paketsdesc flex-grow ">
        <p className=" pb-2 text-center text-gray-800  text-lg  font-bold border-b-[1px] border-gray-300 ">
          {description}
        </p>
        <ul className="border-b-[1px] border-gray-300 mb-7 text-gray-700 text-xs md:text-sm">
          {listItems.map((item, index) => (
            <li
              className="pakets-list-item p-1 flex items-center bg-no-repeat bg-left custom-li"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="card-footerb3 mt-auto">
        <Link
          className="bluebutton"
          href="https://platform.capitalrevo.com/login"
        >
          Get started
        </Link>
      </div>
    </div>
  );
};
export default Paketi;
