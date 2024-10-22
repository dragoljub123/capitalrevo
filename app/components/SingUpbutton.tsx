import Link from "next/link";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <Link href="https://platform.capitalrevo.com/register?demo=false">
      <button
        className="text-xs flex justify-center items-center py-2.5 px-2 gap-3 lg:w-16 xl:w-20 h-9 bg-white rounded-lg text-navcolor mt-2 lg:mt-0 w-full hover:bg-[#00dbfe] transition duration-300 "
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
