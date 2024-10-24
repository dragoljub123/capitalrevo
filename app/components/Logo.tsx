import React from "react";
import Link from "next/link";
import Image from "next/image";
import glogo from "../images/CapRev logo LBH.png";

interface Props {
  title?: string;
  className: string;
}

export const Logo = ({ title, className }: Props) => {
  return (
    <Link href={"/"}>
      <Image
        src={glogo}
        alt="slika"
        className=" object-contain w-[200px] "
        priority
      />
    </Link>
  );
};
