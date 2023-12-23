import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

export const Listing = ({ Item }) => {
  return (
    <li
      className=" bg-white flex flex-col gap-4 shadow-md hover:shadow-lg rounded-md
    overflow-hidden transition-shadow w-full sm:w-[330px] border"
    >
      <Link className="contents" href="/yay">
        <Image
          className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300 "
          src={Item.imageUrl}
          width="100"
          height="100"
        />
        <div className="w-full p-3 gap-2 flex flex-col">
          <p className="font-semibold m-0 text-lg truncate text-slate-700">
            {Item.name}
          </p>
          <div className="flex items-center gap-1">
            <FaMapMarkerAlt />
            <p className="text-xs  text-gray-600 truncate">{Item.address}</p>
          </div>
          <p className="text-xs text-gray-600 line-clamp-2">
            {Item.description}
          </p>
          <p className="text-slate-500 mt-2 font-semibold">
            ${Item.regularPrice}
          </p>
          <div className="flex items-center gap-4 text-slate-700">
            <div className="flex items-center gap-1">2 Beds</div>
            <div className="flex items-center gap-1">4 Baths</div>
          </div>
        </div>
      </Link>
    </li>
  );
};
