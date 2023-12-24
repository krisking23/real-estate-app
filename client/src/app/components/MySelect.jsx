import React from "react";
import { Select, Option } from "@material-tailwind/react";

export const MySelect = () => {
  return (
    <div className="w-72">
      <Select>
        <Option>Price high to low</Option>
        <Option>Price low to high</Option>
        <Option>Latest</Option>
        <Option>Oldest</Option>
      </Select>
    </div>
  );
};
