"use client";

import Link from "next/link";
import React from "react";

export const Hero = () => {
  return (
    <section className=" max-w-6xl mx-auto py-28 px-3">
      <div className="flex flex-col gap-6">
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          Find your next
          <span className="text-slate-500"> perfect</span>
          <br></br>
          place with ease
        </h1>
        <p className="text-gray-400 text-xs sm:text-sm">
          Sahand Estate will help you find your home fast, easy and comfortable.
          Our expert support are always available.
        </p>
        <Link
          href="/search"
          className="text-xs sm:text-sm text-blue-800 font-bold hover:underline"
        >
          Let's start now...
        </Link>
      </div>
    </section>
  );
};
