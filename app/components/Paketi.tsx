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
    <div className="pakets " style={{ width: "364px" }}>
      <div className=" flex justify-center items-center  border-[1px] border-gray-300 rounded-2xl plan-name">
        <img
          src={imageSrc}
          alt="Card"
          style={{ width: "auto", height: "auto", padding: "2px" }}
        />
        <h2 className="border-[1px] border-gray-300 rounded-lg plan-name-name ">
          {title}
        </h2>
      </div>
      <div className="paketsdesc   ">
        <p className=" pt-10 pb-10 text-center text-2xl lg:text-3xl font-bold  border-b-[1px] border-gray-300">
          {description}
        </p>
        <ul className="border-b-[1px] border-gray-300 mb-7 mt-5">
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
      <div className="card-footerb3 ">
        <button className="bluebutton">Get started</button>
      </div>
    </div>
  );
};
export default Paketi;