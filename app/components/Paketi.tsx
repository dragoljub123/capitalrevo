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
    <div className="pakets " style={{ width: "384px", height: "auto" }}>
      <div className="flex justify-center items-center  border-[1px] border-gray-300 rounded-md w-2/5">
        <img
          src={imageSrc}
          alt="Card"
          style={{ width: "auto", height: "auto", padding: "2px" }}
        />
        <h2 className=" ">{title}</h2>
      </div>
      <div className="paketsdesc   ">
        <p className=" text-center text-2xl lg:text-3xl font-bold  border-b-[1px] border-gray-300">
          {description}
        </p>
        <ul>
          {listItems.map((item, index) => (
            <li className="p-1" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="card-footerb3 ">
        <button className="bg-dugmeplava text-white px-12 py-1 rounded-3xl hover:bg-blue-700 transition-colors duration-300 w-25">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Paketi;
