import Link from "next/link";
import React from "react";
// import { Carousel } from "@material-tailwind/react";

export const Hero = () => {
  return (
    <section class=" max-w-6xl mx-auto py-28 px-3">
      <div class="flex flex-col gap-6">
        <h1 class="text-slate-700 font-bold text-3xl lg:text-6xl">
          Find your next
          <span class="text-slate-500"> perfect</span>
          <br></br>
          place with ease
        </h1>
        <p class="text-gray-400 text-xs sm:text-sm">
          Sahand Estate will help you find your home fast, easy and comfortable.
          Our expert support are always available.
        </p>
        <Link
          href="/search"
          class="text-xs sm:text-sm text-blue-800 font-bold hover:underline"
        >
          Let's start now...
        </Link>
      </div>
      {/* <Carousel className="rounded-xl">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel> */}
    </section>
  );
};
