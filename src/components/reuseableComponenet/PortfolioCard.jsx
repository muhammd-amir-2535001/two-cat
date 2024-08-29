import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";

const PortfolioCard = ({ img, title, decriptation, link }) => {
  return (
    <Card className="bg-transparent border-none h-full">
      <div className="relative group">
        <Image
          src={img}
          width={500}
          height={500}
          className="w-full h-full object-cover bg-transparent rounded-lg"
        />
        <div className="p-2 w-[90%] flex justify-between items-center absolute border backdrop-blur-2xl bg-white/30 border-white rounded-lg px-2 text-white bottom-[-50%] left-3 group-hover:bottom-3 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
          <div>
            <p className="font-bold">{title}</p>
            <p className="text-sm pl-4">{decriptation}</p>
          </div>
          <Link href={link}>
            <div className="border border-white rounded-full p-1">
              <IoIosArrowRoundForward />
            </div>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default PortfolioCard;
