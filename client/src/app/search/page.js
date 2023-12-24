import React from "react";
import { FilterBar } from "../components/FilterBar";
import { Listings } from "../components/Listings";

async function getData() {
  const res = await fetch("http://localhost:8080/listing");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();
  return (
    <div className="flex flex-col md:flex-row">
      <FilterBar />
      <div className="flex-1 p-5 m-5">
        <h1 class="text-3xl mb-12 font-semibold border-b  text-slate-700">
          Listing results:
        </h1>
        <Listings data={data} />
      </div>
    </div>
  );
}
