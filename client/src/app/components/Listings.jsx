import React from "react";
import { Listing } from "./Listing";

export const Listings = ({ data }) => {
  return (
    <ul className="flex flex-wrap gap-4">
      {data.map((item) => {
        return <Listing key={item.id} Item={item} />;
      })}
    </ul>
  );
};
