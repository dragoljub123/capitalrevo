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
    <div className="flex flex-col justify-between pt-5 pakets w-[335px] md:w-[364px] lg:w-[313px] xl:md:w-[364px] lg:min-h-[700px] mb-10">
      <div className="flex justify-center items-center border-[1px] border-gray-300 rounded-2xl plan-name">
        <img
          src={imageSrc}
          alt="Card"
          style={{ width: "auto", height: "auto", padding: "3px" }}
        />
        <h4 className="rounded-lg plan-name-name text-xl   ">{title}</h4>
      </div>

      <div className="paketsdesc flex-grow ">
        <p className="pt-5 pb-5 text-center text-3xl lg:text-3xl font-bold border-b-[1px] border-gray-300 ">
          {description}
        </p>
        <ul className="border-b-[1px] border-gray-300 mb-7 ">
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
