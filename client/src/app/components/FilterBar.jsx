"use client";

import React from "react";

import { CheckBoxes } from "./CheckBoxes";
import { MySelect } from "./MySelect";

export const FilterBar = () => {
  return (
    <div className="bg-transparent border-b-2 sm:border-r-2 p-7 h-auto md:min-h-screen flex-2  ">
      <form class="flex flex-col gap-8">
        <div class="flex items-center gap-2">
          <label class="whitespace-nowrap">Search Term:</label>
          <input
            type="text"
            id="searchTerm"
            placeholder="Search..."
            class="border rounded-lg p-3 w-full"
            value=""
          />
        </div>
        <div class="flex items-center gap-1">
          <label class="whitespace-nowrap">Type:</label>
          <CheckBoxes options={["Rent", "Sale", "Offer"]} />
        </div>
        <div class="flex items-center gap-2">
          <label class="whitespace-nowrap">Amenities:</label>
          <CheckBoxes options={["Parking", "Furnished"]} />
        </div>
        <div class="flex items-center gap-2">
          <label class="">Sort:</label>
          <MySelect />
          {/* <select id="sort_order" class="border rounded-lg p-3">
            <option value="regularPrice_desc">Price high to low</option>
            <option value="regularPrice_asc">Price low to high </option>
            <option value="createdAt_desc" selected="">
              Latest
            </option>
            <option value="createdAt_asc">Oldest</option>
          </select> */}
        </div>
        <button class="bg-slate-700 text-white p-3 uppercase rounded-lg w-full">
          Search
        </button>
      </form>
    </div>
  );
};
