"use client";

import Link from "next/link";
import React from "react";

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
    </section>
  );
};
