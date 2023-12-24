import React from "react";
import {
  Checkbox,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";

export const CheckBoxes = ({ options }) => {
  return (
    <List className="flex-row">
      {options.map((item, idx) => {
        return (
          <ListItem key={idx} className="p-0">
            <label
              htmlFor="horizontal-list-react"
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-2">
                <Checkbox
                  id="horizontal-list-react"
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                />
              </ListItemPrefix>
              <Typography color="blue-gray" className="font-medium">
                {item}
              </Typography>
            </label>
          </ListItem>
        );
      })}
      {/* <ListItem className="p-0">
        <label
          htmlFor="horizontal-list-react"
          className="flex w-full cursor-pointer items-center px-3 py-2"
        >
          <ListItemPrefix className="mr-3">
            <Checkbox
              id="horizontal-list-react"
              ripple={false}
              className="hover:before:opacity-0"
              containerProps={{
                className: "p-0",
              }}
            />
          </ListItemPrefix>
          <Typography color="blue-gray" className="font-medium">
            React.js
          </Typography>
        </label>
      </ListItem>
      <ListItem className="p-0">
        <label
          htmlFor="horizontal-list-vue"
          className="flex w-full cursor-pointer items-center px-3 py-2"
        >
          <ListItemPrefix className="mr-3">
            <Checkbox
              id="horizontal-list-vue"
              ripple={false}
              className="hover:before:opacity-0"
              containerProps={{
                className: "p-0",
              }}
            />
          </ListItemPrefix>
          <Typography color="blue-gray" className="font-medium">
            Vue.js
          </Typography>
        </label>
      </ListItem>
      <ListItem className="p-0">
        <label
          htmlFor="horizontal-list-svelte"
          className="flex w-full cursor-pointer items-center px-3 py-2"
        >
          <ListItemPrefix className="mr-3">
            <Checkbox
              id="horizontal-list-svelte"
              ripple={false}
              className="hover:before:opacity-0"
              containerProps={{
                className: "p-0",
              }}
            />
          </ListItemPrefix>
          <Typography color="blue-gray" className="font-medium">
            Svelte.js
          </Typography>
        </label>
      </ListItem> */}
    </List>
  );
};
